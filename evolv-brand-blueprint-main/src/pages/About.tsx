
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const modelSteps = [
    {
      step: '01',
      title: 'Understand the Business',
      description: 'We dive deep into your market, competition, and customer psychology. Understanding precedes strategy.',
      icon: Target,
    },
    {
      step: '02',
      title: 'Solve the Business',
      description: 'We create strategic frameworks that address core business challenges, not just marketing problems.',
      icon: Lightbulb,
    },
    {
      step: '03',
      title: 'Scale the Business',
      description: 'We build systems and executions that grow with your business, ensuring sustainable long-term success.',
      icon: TrendingUp,
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
              We are <span className="text-evolv-copper">Evolv Global</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              A premium brand consulting and marketing execution firm that believes in building 
              brand ecosystems, not just running campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-evolv-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-12 text-center">
              Our Philosophy
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-sm">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-evolv-copper mb-4">
                    Clarity before Creativity
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We believe that the most creative solutions emerge from the clearest understanding 
                    of the problem. Strategy isn't the enemy of creativity—it's its foundation.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-sm">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-evolv-copper mb-4">
                    Systems over Chaos
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Great brands aren't built on random acts of marketing. They're built on systematic 
                    approaches that can be replicated, measured, and scaled.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-sm">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-evolv-copper mb-4">
                    Outcomes over Outputs
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We don't measure success by the number of campaigns we create. We measure it 
                    by the business outcomes we deliver and the brands we help evolve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Model Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-12 text-center">
              Our Model
            </h2>
            
            <div className="space-y-12">
              {modelSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex items-center gap-6 md:w-1/3">
                    <div className="text-6xl font-black text-evolv-copper">
                      {step.step}
                    </div>
                    <step.icon className="text-evolv-copper" size={48} />
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Built for the Future of Brands
            </h2>
            <p className="text-xl leading-relaxed mb-8 text-gray-300">
              In a world where everyone claims to be a marketer, we chose to be brand architects. 
              We don't just follow trends—we create frameworks that outlast them. Every brand we 
              touch doesn't just grow; it evolves into something stronger, clearer, and more impactful.
            </p>
            <p className="text-xl leading-relaxed text-gray-300">
              This is how we've served 130+ brands across 25+ industries, handling over ₹200 crores 
              in media, and building 500+ campaigns that matter.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
