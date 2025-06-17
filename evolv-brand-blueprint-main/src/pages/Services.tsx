
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Palette, 
  Video, 
  TrendingUp, 
  Smartphone, 
  Code, 
  Megaphone, 
  Star, 
  BarChart, 
  Brain 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Brand Consulting & Strategy',
      description: 'Deep strategic frameworks that position your brand for sustainable growth and market leadership.',
    },
    {
      icon: Palette,
      title: 'Brand Creation & Identity Design',
      description: 'Comprehensive brand identities that communicate your values and resonate with your audience.',
    },
    {
      icon: Video,
      title: 'Ad Film Making & Content Production',
      description: 'Compelling visual storytelling that drives emotion and action across all platforms.',
    },
    {
      icon: TrendingUp,
      title: 'Media Buying & Planning',
      description: 'Strategic media investments that maximize reach, frequency, and return on ad spend.',
    },
    {
      icon: Smartphone,
      title: 'Digital Marketing & Performance',
      description: 'Data-driven digital strategies that convert audiences into customers and advocates.',
    },
    {
      icon: Code,
      title: 'Website Development & Tech',
      description: 'High-performance digital experiences that reflect your brand and drive business outcomes.',
    },
    {
      icon: Megaphone,
      title: 'PR & Crisis Management',
      description: 'Strategic communication that builds reputation and navigates challenging situations.',
    },
    {
      icon: Star,
      title: 'Celebrity Management & Endorsement',
      description: 'Strategic celebrity partnerships that amplify brand credibility and market presence.',
    },
    {
      icon: BarChart,
      title: 'Market Research & Consumer Insights',
      description: 'Deep consumer understanding that informs strategy and drives better business decisions.',
    },
    {
      icon: Brain,
      title: 'AI, Data & Brand Innovation',
      description: 'Cutting-edge technology solutions that future-proof your brand and optimize performance.',
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
              Strategic + Execution <span className="text-evolv-copper">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              We don't just offer services. We deliver integrated solutions that transform 
              businesses and build lasting brand ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-evolv-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <service.icon className="text-evolv-copper mr-4" size={32} />
                    <h3 className="text-xl font-bold text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-12">
              How We Work
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-black text-evolv-copper mb-4">01</div>
                <h3 className="text-xl font-bold text-primary mb-4">Strategic Foundation</h3>
                <p className="text-gray-600">
                  Every engagement begins with deep strategic thinking. We don't start with tactics—we start with understanding.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-black text-evolv-copper mb-4">02</div>
                <h3 className="text-xl font-bold text-primary mb-4">Integrated Execution</h3>
                <p className="text-gray-600">
                  Our teams work in perfect sync across all disciplines, ensuring consistent brand experience at every touchpoint.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-black text-evolv-copper mb-4">03</div>
                <h3 className="text-xl font-bold text-primary mb-4">Continuous Evolution</h3>
                <p className="text-gray-600">
                  We don't just deliver and disappear. We stay invested in your success, continuously optimizing and evolving.
                </p>
              </div>
            </div>
            
            <Button size="lg" className="bg-primary text-white hover:bg-evolv-slate px-8 py-4 text-lg">
              <Link to="/contact">Explore How We Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
