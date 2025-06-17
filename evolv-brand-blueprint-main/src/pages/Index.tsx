
import { ArrowRight, Target, Users, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  const highlights = [
    { number: '130+', label: 'Brands Served', icon: Users },
    { number: '₹200 Cr+', label: 'Media Handled', icon: TrendingUp },
    { number: '25+', label: 'Industries', icon: Target },
    { number: '500+', label: 'Campaigns', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-primary leading-tight mb-6 fade-in">
              We don't run campaigns.{' '}
              <span className="text-evolv-copper">We build brand ecosystems.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium slide-up">
              Evolv Global is where clarity meets execution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-primary text-white hover:bg-evolv-slate px-8 py-4 text-lg">
                Let's Build Your Brand
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-evolv-copper text-evolv-copper hover:bg-evolv-copper hover:text-white px-8 py-4 text-lg">
                <Link to="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-evolv-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-none shadow-none bg-transparent text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <highlight.icon className="text-evolv-copper" size={32} />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-primary mb-2">
                    {highlight.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {highlight.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8">
              Our Philosophy
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-xl font-bold text-evolv-copper mb-4">
                  Clarity before Creativity
                </h3>
                <p className="text-gray-600">
                  We understand your business before we create anything. Strategy drives execution.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-evolv-copper mb-4">
                  Systems over Chaos
                </h3>
                <p className="text-gray-600">
                  Every brand needs structure. We build frameworks that scale and sustain growth.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-evolv-copper mb-4">
                  Outcomes over Outputs
                </h3>
                <p className="text-gray-600">
                  We measure success by business impact, not just creative awards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to evolve your brand?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's build something extraordinary together.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
            <Link to="/contact">Start Your Evolution</Link>
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
