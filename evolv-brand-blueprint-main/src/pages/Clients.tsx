
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Clients = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const industries = [
    'All',
    'FMCG',
    'Real Estate',
    'Healthcare',
    'Technology',
    'Fashion',
    'Automotive',
    'Food & Beverage',
    'Education',
    'Finance',
    'Retail'
  ];

  // Sample client data - in a real implementation, this would come from a database
  const clients = [
    { name: 'Tenali Double Horse', industry: 'FMCG' },
    { name: 'Triplex', industry: 'FMCG' },
    { name: 'MR Constructions', industry: 'Real Estate' },
    { name: 'Chakrasiddh', industry: 'Healthcare' },
    { name: 'TechCorp Solutions', industry: 'Technology' },
    { name: 'Fashion Forward', industry: 'Fashion' },
    { name: 'AutoMax', industry: 'Automotive' },
    { name: 'Gourmet Delights', industry: 'Food & Beverage' },
    { name: 'EduPrime', industry: 'Education' },
    { name: 'FinanceFirst', industry: 'Finance' },
    { name: 'RetailHub', industry: 'Retail' },
    // Add more clients as needed to reach 100+
    { name: 'HealthPlus', industry: 'Healthcare' },
    { name: 'TechInnovate', industry: 'Technology' },
    { name: 'StyleCorp', industry: 'Fashion' },
    { name: 'DriveMax', industry: 'Automotive' },
    { name: 'FoodCraft', industry: 'Food & Beverage' },
    { name: 'LearnMore', industry: 'Education' },
    { name: 'MoneyWise', industry: 'Finance' },
    { name: 'ShopSmart', industry: 'Retail' },
    { name: 'WellnessCorp', industry: 'Healthcare' },
    { name: 'DigitalEdge', industry: 'Technology' },
    { name: 'TrendSetters', industry: 'Fashion' },
    { name: 'CarLux', industry: 'Automotive' },
    { name: 'CulinArt', industry: 'Food & Beverage' },
    { name: 'SkillBuilders', industry: 'Education' },
    { name: 'InvestPro', industry: 'Finance' },
    { name: 'MegaMart', industry: 'Retail' },
    { name: 'VitalCare', industry: 'Healthcare' },
    { name: 'CloudTech', industry: 'Technology' },
    { name: 'ChicBrands', industry: 'Fashion' },
    { name: 'SpeedWorks', industry: 'Automotive' },
    { name: 'TasteMakers', industry: 'Food & Beverage' },
    { name: 'BrainTrust', industry: 'Education' },
    { name: 'CapitalGains', industry: 'Finance' },
    { name: 'QuickShop', industry: 'Retail' },
  ];

  const filteredClients = selectedIndustry === 'All' 
    ? clients 
    : clients.filter(client => client.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary leading-tight mb-8">
              <span className="text-evolv-copper">130+</span> brands have evolved with us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              From startups to enterprises, across industries and geographies, 
              we've helped brands find their voice and amplify their impact.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 bg-evolv-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? "default" : "outline"}
                onClick={() => setSelectedIndustry(industry)}
                className={`${
                  selectedIndustry === industry 
                    ? 'bg-primary text-white' 
                    : 'border-2 border-gray-300 text-gray-700 hover:border-evolv-copper hover:text-evolv-copper'
                }`}
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredClients.map((client, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 hover:border-evolv-copper"
              >
                <div className="w-12 h-12 bg-evolv-copper rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-bold text-primary text-sm mb-2">
                  {client.name}
                </h3>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-evolv-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-primary mb-2">130+</div>
              <div className="text-gray-600 font-medium">Brands Served</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">25+</div>
              <div className="text-gray-600 font-medium">Industries</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">₹200Cr+</div>
              <div className="text-gray-600 font-medium">Media Handled</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">500+</div>
              <div className="text-gray-600 font-medium">Campaigns</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-12">
              What Our Clients Say
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <p className="text-lg text-gray-600 mb-6 italic">
                  "Evolv Global didn't just handle our marketing—they transformed our entire 
                  brand strategy. The results speak for themselves."
                </p>
                <div className="font-bold text-primary">CEO, Fortune 500 Company</div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <p className="text-lg text-gray-600 mb-6 italic">
                  "The strategic clarity they brought to our brand was unmatched. 
                  Every campaign was purposeful and impactful."
                </p>
                <div className="font-bold text-primary">Marketing Director, Tech Startup</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to join our client family?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's build your brand ecosystem together.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
            Start Your Brand Evolution
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
