import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

// Single-file React conversion of the provided HTML audit app
// Default export a React component. Tailwind classes are preserved.
// NOTE: Add the Inter font link to your public/index.html or _document if using Next.js:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"> 

export default function WaghbakriAuditApp() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Chart refs and instances
  const brandHealthRef = useRef(null);
  const sentimentRef = useRef(null);
  const socialThemesRef = useRef(null);
  const pricingRef = useRef(null);

  const brandHealthChart = useRef(null);
  const sentimentChart = useRef(null);
  const socialThemesChart = useRef(null);
  const pricingChart = useRef(null);

  useEffect(() => {
    // Initialize dashboard charts on mount
    initDashboardCharts();

    // Cleanup on unmount
    return () => {
      destroyChart(brandHealthChart);
      destroyChart(sentimentChart);
      destroyChart(socialThemesChart);
      destroyChart(pricingChart);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Initialize charts when tab changes if needed
    if (activeTab === "dashboard") initDashboardCharts();
    if (activeTab === "market-landscape") initMarketChart();
    if (activeTab === "south-india-deep-dive") initSouthIndiaChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  function destroyChart(ref) {
    try {
      if (ref.current) {
        ref.current.destroy();
        ref.current = null;
      }
    } catch (e) {
      // ignore
    }
  }

  function initDashboardCharts() {
    // Brand Health (Radar)
    if (brandHealthRef.current && !brandHealthChart.current) {
      brandHealthChart.current = new Chart(brandHealthRef.current.getContext("2d"), {
        type: "radar",
        data: {
          labels: [
            "Awareness (Nat.)",
            "Perception (Nat.)",
            "Loyalty (Nat.)",
            "S. India Penetration",
            "Digital Presence",
          ],
          datasets: [
            {
              label: "Brand Health Index",
              data: [90, 75, 80, 30, 65],
              backgroundColor: "rgba(124, 80, 38, 0.2)",
              borderColor: "rgba(124, 80, 38, 1)",
              borderWidth: 2,
              pointBackgroundColor: "rgba(124, 80, 38, 1)",
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            r: {
              angleLines: { color: "#ddd" },
              grid: { color: "#eee" },
              pointLabels: { color: "#333" },
              ticks: {
                backdropColor: "transparent",
                color: "#555",
                stepSize: 20,
              },
              suggestedMin: 0,
              suggestedMax: 100,
            },
          },
        },
      });
    }

    // Sentiment (Doughnut)
    if (sentimentRef.current && !sentimentChart.current) {
      sentimentChart.current = new Chart(sentimentRef.current.getContext("2d"), {
        type: "doughnut",
        data: {
          labels: ["Positive", "Neutral", "Negative"],
          datasets: [
            {
              data: [60, 25, 15],
              backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
              borderColor: "#ffffff",
              borderWidth: 3,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        },
      });
    }
  }

  function initMarketChart() {
    if (socialThemesRef.current && !socialThemesChart.current) {
      socialThemesChart.current = new Chart(socialThemesRef.current.getContext("2d"), {
        type: "bar",
        data: {
          labels: ["Price/Value", "Availability (Non-Core)", "Packaging Issues", "Stale Taste"],
          datasets: [
            {
              label: "Negative/Neutral Mentions",
              data: [45, 30, 15, 10],
              backgroundColor: ["#dc3545", "#ffc107", "#ffc107", "#dc3545"],
              borderColor: "#ffffff",
              borderWidth: 1,
            },
          ],
        },
        options: {
          indexAxis: "y",
          maintainAspectRatio: false,
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false } },
            y: { grid: { display: false } },
          },
        },
      });
    }
  }

  function initSouthIndiaChart() {
    if (pricingRef.current && !pricingChart.current) {
      pricingChart.current = new Chart(pricingRef.current.getContext("2d"), {
        type: "bar",
        data: {
          labels: ["Waghbakri (250g)", "Tata Gemini (250g)", "Three Roses (250g)", "Local Dust (250g)"],
          datasets: [
            {
              label: "Approx. Price (₹)",
              data: [130, 125, 135, 110],
              backgroundColor: ["#D1BFA4", "#a1887f", "#a1887f", "#a1887f"],
              borderRadius: 4,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, grid: { color: "#eee" } },
            x: { grid: { display: false } },
          },
        },
      });
    }
  }

  const navItems = [
    { id: "dashboard", label: "Dashboard", emoji: "📊" },
    { id: "brand-identity", label: "Brand Identity", emoji: "🏷️" },
    { id: "digital-audit", label: "Digital & Web Audit", emoji: "💻" },
    { id: "market-landscape", label: "Market Landscape", emoji: "🌍" },
    { id: "south-india-deep-dive", label: "South India Deep Dive", emoji: "🎯" },
    { id: "strategic-framework", label: "Strategic Framework", emoji: "📈" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-amber-50 text-neutral-800" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* Inline styles preserved from original HTML */}
      <style>{`
        body { background-color: #FEFBF6; }
        .content-section { display: none; }
        .content-section.active { display: block; animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .chart-container { position: relative; width: 100%; max-width: 600px; margin-left: auto; margin-right: auto; height: 300px; max-height: 400px; }
        @media (min-width: 768px) { .chart-container { height: 350px; } }
        .nav-link { transition: all 0.3s ease; }
        .nav-link.active { background-color: #D1BFA4; color: #402E32; font-weight: 600; }
        .nav-link:hover { background-color: #EFEBE5; }
        .card { background-color: #FFFFFF; border: 1px solid #EFEBE5; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); transition: all 0.3s ease; }
        .card:hover { box-shadow: 0 6px 16px rgba(0,0,0,0.08); }
      `}</style>

      {/* Sidebar Navigation (Desktop) */}
      <nav className="hidden md:flex flex-col w-64 bg-white border-r border-amber-200 p-4 shadow-lg fixed top-0 left-0 h-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-amber-900">Brand Audit</h1>
          <p className="text-sm text-amber-800">Waghbakri Tea</p>
        </div>
        <ul className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.id);
                }}
                className={`nav-link flex items-center p-3 rounded-lg ${activeTab === item.id ? "active" : ""}`} 
                data-tab={item.id}
              >
                <span className="w-6 h-6 mr-3">{item.emoji}</span> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 pb-20 md:pb-0">
        {/* Header (Mobile) */}
        <header className="md:hidden sticky top-0 bg-white shadow-md p-4 z-10">
          <h1 className="text-xl font-bold text-amber-900 text-center">Waghbakri Tea: Brand Audit</h1>
        </header>

        <div className="p-6 md:p-10">

          {/* Dashboard */}
          <section id="dashboard" className={`content-section ${activeTab === "dashboard" ? "active" : ""}`}>
            <h2 className="text-3xl font-bold text-amber-900 mb-2">Executive Dashboard</h2>
            <p className="text-lg text-neutral-600 mb-8">A high-level overview of Waghbakri's current brand health and the primary opportunity for the South India mandate.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-4">Brand Health Index</h3>
                <p className="text-sm text-neutral-500 mb-4">A consolidated score based on national awareness, perception, loyalty, and regional penetration. The low South India penetration score highlights the key challenge and opportunity.</p>
                <div className="chart-container">
                  <canvas ref={brandHealthRef} id="brandHealthChart"></canvas>
                </div>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-4">Pan-India Social Sentiment</h3>
                <p className="text-sm text-neutral-500 mb-4">Overall sentiment from public social media mentions. While largely positive, the neutral and negative segments provide insights for messaging improvement.</p>
                <div className="chart-container" style={{ maxWidth: 400, height: 300, maxHeight: 350 }}>
                  <canvas ref={sentimentRef} id="sentimentChart"></canvas>
                </div>
              </div>
            </div>
          </section>

          {/* Brand Identity */}
          <section id="brand-identity" className={`content-section ${activeTab === "brand-identity" ? "active" : ""}`}>
            <h2 className="text-3xl font-bold text-amber-900 mb-2">Brand Identity Audit</h2>
            <p className="text-lg text-neutral-600 mb-8">Analysis of Waghbakri's core brand elements, story, and personality.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-2">Brand Archetype</h3>
                <p className="text-2xl font-bold text-amber-700 mb-3">The Caregiver & Everyman</p>
                <p className="text-neutral-600">The brand is positioned as a nurturing, dependable, and familiar part of daily life. It evokes feelings of warmth, comfort, and reliability. This resonates strongly in its core markets.</p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-2">Positioning & Story</h3>
                <p className="text-neutral-600 mb-3">The core message "Hamesha Rishtey Banaye" (Always Building Relationships) is powerful. The heritage story (since 1892) builds trust.</p>
                <p className="text-neutral-600"><strong>Gap:</strong> This story and tagline lack vernacular resonance and cultural context in South India.</p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-2">Visual Identity Analysis</h3>
                <p className="text-neutral-600 mb-3"><strong>Colors:</strong> Warm palette (red, orange, brown) successfully communicates warmth and tradition.</p>
                <p className="text-neutral-600 mb-3"><strong>Logo:</strong> The "Wagh" (Tiger) and "Bakri" (Goat) is iconic and memorable.</p>
                <p className="text-neutral-600"><strong>Consistency Index (VCI):</strong> 85%. Generally consistent, but digital assets show fragmentation.</p>
              </div>
            </div>
          </section>

          {/* Digital Audit */}
          <section id="digital-audit" className={`content-section ${activeTab === "digital-audit" ? "active" : ""}`}>
            <h2 className="text-3xl font-bold text-amber-900 mb-2">Digital & Web Audit</h2>
            <p className="text-lg text-neutral-600 mb-8">Assessment of primary web assets: `waghbakritea.com` (corporate) and `buytea.com` (e-commerce).</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-2">waghbakritea.com (Corporate)</h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-600">
                  <li><strong>Strength:</strong> Effectively communicates heritage, story, and corporate values.</li>
                  <li><strong>Weakness:</strong> Outdated UI/UX. Not mobile-first in design, leading to poor user experience on mobile.</li>
                  <li><strong>Weakness:</strong> Slow load times on key pages.</li>
                  <li><strong>Opportunity:</strong> Rebuild as a modern, responsive site to serve as the central brand hub.</li>
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-2">buytea.com (E-commerce)</h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-600">
                  <li><strong>Strength:</strong> Functional D2C platform.</li>
                  <li><strong>Weakness:</strong> Clunky user journey and checkout process. Likely high cart abandonment rate.</li>
                  <li><strong>Weakness:</strong> Poor SEO, especially for regional and long-tail keywords (e.g., "best tea in Hyderabad").</li>
                  <li><strong>Opportunity:</strong> UX overhaul, simplified checkout, and a robust content/SEO strategy to capture D2C demand in new markets.</li>
                </ul>
              </div>
            </div>

            <div className="card p-6 mt-6">
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">Digital Infrastructure</h3>
              <p className="text-neutral-600">The current digital stack appears standard. There is a significant opportunity to implement a unified Customer Data Platform (CDP) and marketing automation system. This would connect e-commerce data with marketing efforts, enabling personalized campaigns and a better understanding of the new South Indian customer.</p>
            </div>
          </section>

          {/* Market Landscape */}
          <section id="market-landscape" className={`content-section ${activeTab === "market-landscape" ? "active" : ""}`}>
            <h2 className="text-3xl font-bold text-amber-900 mb-2">Pan-India Market Landscape</h2>
            <p className="text-lg text-neutral-600 mb-8">National industry insights, market gaps, and social sentiment analysis.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-4">Industry Insights & Market Gaps</h3>
                <ul className="list-disc list-inside space-y-3 text-neutral-600">
                  <li><strong>Trend:</strong> Significant growth in the "wellness" and green tea segments.</li>
                  <li><strong>Trend:</strong> Premiumization is key. Consumers are willing to pay more for quality and brand story.</li>
                  <li><strong>Trend:</strong> D2C channel growth is accelerating, bypassing traditional distribution.</li>
                  <li><strong>Market Gap:</strong> A trusted, heritage brand that successfully bridges tradition with modern wellness, at a mainstream-premium price point.</li>
                  <li><strong>Market Need:</strong> Hyper-regional taste customization from a national brand.</li>
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-4">Social Monitoring: Negative/Neutral Themes</h3>
                <p className="text-sm text-neutral-500 mb-4">Analysis of neutral and negative chatter reveals key operational and perceptual friction points that need to be addressed before entering a new market.</p>
                <div className="chart-container">
                  <canvas ref={socialThemesRef} id="socialThemesChart"></canvas>
                </div>
              </div>
            </div>
          </section>

          {/* South India Deep Dive */}
          <section id="south-india-deep-dive" className={`content-section ${activeTab === "south-india-deep-dive" ? "active" : ""}`}>
            <h2 className="text-3xl font-bold text-amber-900 mb-2">Deep Dive: Andhra Pradesh & Telangana</h2>
            <p className="text-lg text-neutral-600 mb-8">The primary focus for the mandate. This market is culturally distinct, highly competitive, and requires a bespoke strategy.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-4">Regional Market Analysis</h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-600">
                  <li><strong>High Consumption:</strong> Both states have very high per-capita tea consumption.</li>
                  <li><strong>Fierce Loyalty:</strong> Brand loyalty to existing regional players (like Tata Tea Gemini, Three Roses, and local dust brands) is extremely strong.</li>
                  <li><strong>Taste Profile:</strong> General preference for stronger, darker, "dust" tea variants, which may differ from Waghbakri's core product mix.</li>
                  <li><strong>Café Culture:</strong> Hyderabad's booming café culture presents an opportunity for Waghbakri's "Tea Lounge" concept.</li>
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-4">Emotional Consumer Persona (South)</h3>
                <p className="text-lg font-semibold text-neutral-700">"Srinivas" - 42, Hyderabad</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-600 mt-2">
                  <li>Values family, tradition, and quality.</li>
                  <li>Digitally savvy, researches online, but buys groceries offline.</li>
                  <li>Drinks a local strong dust tea in the morning and Three Roses in the evening.</li>
                  <li><strong>Perception:</strong> Views Waghbakri as a "Gujarati brand" or "North Indian brand." It's not "for him."</li>
                  <li><strong>Barrier:</strong> Needs a strong, logical, and emotional reason to switch from his trusted brand.</li>
                </ul>
              </div>
            </div>

            <div className="card p-6 mb-8">
              <h3 className="text-xl font-semibold text-neutral-700 mb-4">Regional Competitor Analysis (AP/Telangana)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Strength</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Positioning</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Tata Tea (Gemini)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tata Consumer</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Deep distribution; "Strong" blend for local taste.</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">The "Andhra-specific" strong tea.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Three Roses</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">HUL</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Massive marketing; high brand recall.</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">The "standard" trusted family tea.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Local Brands (e.g., Kalasha)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Regional Players</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Deep-rooted community trust; price advantage.</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">"Our own" local tea.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-neutral-700 mb-4">Pricing Comparative Analysis (South)</h3>
              <p className="text-sm text-neutral-500 mb-4">Price perception for a standard 250g pack. Waghbakri is currently perceived as a 'premium' alternative, which creates a barrier to trial against established, similarly-priced competitors.</p>
              <div className="chart-container">
                <canvas ref={pricingRef} id="pricingChartSouth"></canvas>
              </div>
            </div>
          </section>

          {/* Strategic Framework */}
          <section id="strategic-framework" className={`content-section ${activeTab === "strategic-framework" ? "active" : ""}`}>
            <h2 className="text-3xl font-bold text-amber-900 mb-2">Strategic Framework to Win the South</h2>
            <p className="text-lg text-neutral-600 mb-8">A proposed integrated strategy, audit process, and perception-building plan.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-2">Audit Process & Framework</h3>
                <p className="text-neutral-600">Our approach utilized a <strong>4-C Strategic Framework</strong>:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-600 mt-2">
                  <li><strong>Company:</strong> Internal audit of Waghbakri's brand, digital assets, and story.</li>
                  <li><strong>Consumer:</strong> Deep dive into the AP/Telangana persona, needs, and perceptions.</li>
                  <li><strong>Competitor:</strong> Benchmarking against national and hyper-regional competitors.</li>
                  <li><strong>Category:</strong> Mastering industry trends, category-specific regulations, and market gaps.</li>
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-2">Legal, IPR & ASCI Standards</h3>
                <p className="text-neutral-600">A critical component of the strategy is rigorous compliance.</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-600 mt-2">
                  <li>All communications must be vetted for ASCI compliance.</li>
                  <li>Claims (especially for "wellness" or green tea) must be substantiated.</li>
                  <li>Comparative advertising against local players is high-risk and must be avoided.</li>
                  <li>Trademark and IPR checks for all local-language campaign taglines.</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-neutral-700 mb-4">Proposed 3-Phase Perception Building Strategy</h3>
              <p className="text-neutral-600 mb-6">The objective is to shift perception from "a brand from Gujarat" to "a respected national brand that understands and values the South."</p>
              <div className="flex flex-col md:flex-row md:space-x-4">
                {/* Phase 1 */}
                <div className="flex-1 border-b-2 md:border-b-0 md:border-r-2 border-amber-300 p-4">
                  <span className="block text-sm font-semibold text-amber-700">PHASE 1 (0-6 Months)</span>
                  <h4 className="text-lg font-bold text-neutral-800 my-1">BUILD AWARENESS & CURIOSITY</h4>
                  <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1">
                    <li>Localized OOH & digital (Telugu).</li>
                    <li>Onboard a credible regional brand ambassador.</li>
                    <li>Launch "Waghbakri Tea Lounges" in key Hyderabad locations.</li>
                  </ul>
                </div>
                {/* Phase 2 */}
                <div className="flex-1 border-b-2 md:border-b-0 md:border-r-2 border-amber-300 p-4">
                  <span className="block text-sm font-semibold text-amber-700">PHASE 2 (6-18 Months)</span>
                  <h4 className="text-lg font-bold text-neutral-800 my-1">DRIVE TRIAL & CONSIDERATION</h4>
                  <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1">
                    <li>Heavy focus on distribution & in-store visibility.</li>
                    <li>Intensive hyper-local sampling activations.</li>
                    <li>Partnerships with local community events (e.g., Ugadi festivals).</li>
                    <li>Launch South-specific product blends (e.g., "Waghbakri Strong Dust").</li>
                  </ul>
                </div>
                {/* Phase 3 */}
                <div className="flex-1 p-4">
                  <span className="block text-sm font-semibold text-amber-700">PHASE 3 (18-36 Months)</span>
                  <h4 className="text-lg font-bold text-neutral-800 my-1">BUILD LOYALTY & ADVOCACY</h4>
                  <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1">
                    <li>Launch loyalty programs via digital/D2C.</li>
                    <li>Build a vernacular-first online community.</li>
                    <li>Establish as a top 3 player in brand recall.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-amber-200 shadow-inner z-10 grid grid-cols-5 gap-1 p-2">
        <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab("dashboard"); }} className={`nav-link flex flex-col items-center justify-center p-2 rounded-lg text-xs ${activeTab === "dashboard" ? "active" : ""}`} data-tab="dashboard">
          <span className="text-xl">📊</span><span className="mt-1">Dash</span>
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab("brand-identity"); }} className={`nav-link flex flex-col items-center justify-center p-2 rounded-lg text-xs ${activeTab === "brand-identity" ? "active" : ""}`} data-tab="brand-identity">
          <span className="text-xl">🏷️</span><span className="mt-1">Brand</span>
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab("digital-audit"); }} className={`nav-link flex flex-col items-center justify-center p-2 rounded-lg text-xs ${activeTab === "digital-audit" ? "active" : ""}`} data-tab="digital-audit">
          <span className="text-xl">💻</span><span className="mt-1">Digital</span>
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab("south-india-deep-dive"); }} className={`nav-link flex flex-col items-center justify-center p-2 rounded-lg text-xs ${activeTab === "south-india-deep-dive" ? "active" : ""}`} data-tab="south-india-deep-dive">
          <span className="text-xl">🎯</span><span className="mt-1">South</span>
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab("strategic-framework"); }} className={`nav-link flex flex-col items-center justify-center p-2 rounded-lg text-xs ${activeTab === "strategic-framework" ? "active" : ""}`} data-tab="strategic-framework">
          <span className="text-xl">📈</span><span className="mt-1">Strategy</span>
        </a>
      </nav>

    </div>
  );
}
