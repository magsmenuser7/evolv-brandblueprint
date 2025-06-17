import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, MessageCircle, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      budget: '',
      timeline: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Evolv Global! I'm interested in discussing my brand's evolution. Can we schedule a consultation?");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/evolvglobal', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/company/evolv-global', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/evolvglobal', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+919876543210', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:connect@evolvglobal.com?subject=Brand Consultation Inquiry', '_self');
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com?q=Jubilee+Hills+Hyderabad+India', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary leading-tight mb-8">
              Let's Build Your Brand <span className="text-evolv-copper">Ecosystem</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Ready to evolve? Let's start with a conversation about your brand's future.
            </p>
            
            {/* Social Media Quick Access */}
            <div className="flex justify-center space-x-6 mb-8">
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsAppClick}
                className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleInstagramClick}
                className="border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white"
              >
                <Instagram className="mr-2" size={20} />
                Instagram
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleLinkedInClick}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-evolv-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="border-none shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-black text-primary mb-8">
                  Start Your Evolution
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-evolv-copper focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10L">Under ₹10 Lakhs</option>
                        <option value="10L-50L">₹10 - ₹50 Lakhs</option>
                        <option value="50L-1Cr">₹50 Lakhs - ₹1 Crore</option>
                        <option value="1Cr-5Cr">₹1 - ₹5 Crores</option>
                        <option value="above-5Cr">Above ₹5 Crores</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-evolv-copper focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (Within 1 month)</option>
                        <option value="short">Short term (1-3 months)</option>
                        <option value="medium">Medium term (3-6 months)</option>
                        <option value="long">Long term (6+ months)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full"
                      placeholder="Tell us about your brand, challenges, and what you're looking to achieve..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-primary text-white hover:bg-evolv-slate py-4 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-primary mb-8">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Ready to transform your brand? We're here to listen, understand, 
                  and create something extraordinary together.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-evolv-copper mt-1 cursor-pointer hover:text-evolv-slate transition-colors" size={24} onClick={handleMapClick} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Location</h3>
                    <p className="text-gray-600 cursor-pointer hover:text-evolv-copper transition-colors" onClick={handleMapClick}>
                      Jubilee Hills<br />
                      Hyderabad, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="text-evolv-copper mt-1 cursor-pointer hover:text-evolv-slate transition-colors" size={24} onClick={handleEmailClick} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email</h3>
                    <p className="text-gray-600 cursor-pointer hover:text-evolv-copper transition-colors" onClick={handleEmailClick}>
                      connect@evolvglobal.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MessageCircle className="text-evolv-copper mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">WhatsApp Business</h3>
                    <Button 
                      variant="outline"
                      className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white mt-2"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageCircle className="mr-2" size={16} />
                      Chat with us
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-evolv-copper mt-1 cursor-pointer hover:text-evolv-slate transition-colors" size={24} onClick={handleCallClick} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Call Us</h3>
                    <p className="text-gray-600 cursor-pointer hover:text-evolv-copper transition-colors" onClick={handleCallClick}>
                      +91 98765 43210
                    </p>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="flex items-start space-x-4">
                  <div className="text-evolv-copper mt-1">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Follow Us</h3>
                    <div className="flex space-x-3 mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleInstagramClick}
                        className="border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white"
                      >
                        <Instagram size={16} className="mr-1" />
                        Instagram
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleLinkedInClick}
                        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        <Linkedin size={16} className="mr-1" />
                        LinkedIn
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleTwitterClick}
                        className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                      >
                        <Twitter size={16} className="mr-1" />
                        Twitter
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="border-2 border-evolv-copper bg-gradient-to-br from-evolv-light-grey to-white">
                <CardContent className="p-6">
                  <h3 className="font-bold text-primary mb-3">Quick Response Guarantee</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We respond to all inquiries within 24 hours. For urgent projects, 
                    reach out via WhatsApp for immediate assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Integration */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-primary mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600">Located in the heart of Hyderabad's business district</p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6904276513157!2d78.40929!3d17.4441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzM4LjgiTiA3OMKwMjQnMzMuNCJF!5e0!3m2!1sen!2sin!4v1644000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Evolv Global Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
