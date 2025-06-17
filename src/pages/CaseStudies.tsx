
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Target, Award } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Tenali Double Horse',
      subtitle: 'Brand Transformation Through Celebrity Synergy',
      challenge: 'Regional oil brand struggling with modern positioning and market expansion',
      solution: 'Strategic celebrity partnership with integrated media approach and brand evolution',
      results: [
        '300% increase in brand awareness',
        'Expanded to 3 new markets',
        '₹50 Cr+ media amplification',
        'Celebrity-brand synergy achieved'
      ],
      category: 'FMCG'
    },
    {
      title: 'Triplex',
      subtitle: 'Regional Repositioning with Emotional Connect',
      challenge: 'Local brand needed emotional messaging to compete with national players',
      solution: 'Deep consumer insight research with culturally relevant messaging strategy',
      results: [
        '250% growth in market share',
        'Emotional brand connection established',
        'Regional market leadership',
        'Premium positioning achieved'
      ],
      category: 'Consumer Goods'
    },
    {
      title: 'MR Constructions',
      subtitle: 'Celebrity-Driven Brand Credibility',
      challenge: 'Real estate brand needed trust and credibility in competitive market',
      solution: 'Brahmanandam partnership with strategic content and media integration',
      results: [
        '400% increase in inquiries',
        'Trust score improved by 60%',
        'Market credibility established',
        'Sales conversion up 180%'
      ],
      category: 'Real Estate'
    },
    {
      title: 'Chakrasiddh',
      subtitle: 'Ethical Awareness Through Integrated Approach',
      challenge: 'Traditional brand needed modern ethical positioning without losing authenticity',
      solution: 'PR-led awareness campaign with digital amplification and content strategy',
      results: [
        'Ethical brand positioning achieved',
        '200% digital engagement growth',
        'Traditional-modern balance struck',
        'Market leadership in ethics'
      ],
      category: 'Traditional/Wellness'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary leading-tight mb-8">
              Brands That <span className="text-evolv-copper">Evolved</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Real stories of transformation. Real business outcomes. Real impact across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-evolv-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-evolv-copper uppercase tracking-wide">
                      {study.category}
                    </span>
                    <ArrowRight className="text-gray-400" size={20} />
                  </div>
                  
                  <h3 className="text-2xl font-black text-primary mb-2">
                    {study.title}
                  </h3>
                  
                  <h4 className="text-lg font-medium text-evolv-copper mb-6">
                    {study.subtitle}
                  </h4>
                  
                  <div className="mb-6">
                    <h5 className="font-bold text-gray-900 mb-2">Challenge</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="font-bold text-gray-900 mb-2">Solution</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-900 mb-3">Results</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-evolv-copper rounded-full mr-2 flex-shrink-0"></div>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8">
              Impact Across Industries
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <TrendingUp className="text-evolv-copper mx-auto mb-4" size={40} />
              <div className="text-3xl font-black text-primary mb-2">500+</div>
              <div className="text-gray-600">Campaigns Delivered</div>
            </div>
            
            <div className="text-center">
              <Users className="text-evolv-copper mx-auto mb-4" size={40} />
              <div className="text-3xl font-black text-primary mb-2">130+</div>
              <div className="text-gray-600">Brands Served</div>
            </div>
            
            <div className="text-center">
              <Target className="text-evolv-copper mx-auto mb-4" size={40} />
              <div className="text-3xl font-black text-primary mb-2">25+</div>
              <div className="text-gray-600">Industries</div>
            </div>
            
            <div className="text-center">
              <Award className="text-evolv-copper mx-auto mb-4" size={40} />
              <div className="text-3xl font-black text-primary mb-2">₹200Cr+</div>
              <div className="text-gray-600">Media Handled</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to write your success story?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's create a case study that showcases your brand's evolution.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
            Start Your Transformation
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
