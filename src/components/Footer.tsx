
// import { Link } from 'react-router-dom';
// import { Mail, MapPin, MessageCircle, Instagram, Linkedin, Twitter } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Footer = () => {
//   const handleSocialClick = (platform: string) => {
//     const urls = {
//       instagram: 'https://www.instagram.com/evolv._global?utm_source=qr&igsh=YnZyOHdpbmxmZnRv',
//       linkedin: 'https://www.linkedin.com/company/evolv-global/',
//       twitter: 'https://x.com/global_evolv?t=tY28K6FfW6zDdtRCwcQgPg&s=08',
//       whatsapp: 'https://wa.me/916304970488'
//     };
//     window.open(urls[platform as keyof typeof urls], '_blank');
//   };

//   return (
//     <footer className="bg-primary text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Brand */}
//           <div className="lg:col-span-2">
//             <div className="text-3xl font-black mb-4">
//               EVOLV<span className="text-evolv-copper">.</span>
//             </div>
//             <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
//               We don't run campaigns. We build brand ecosystems. 
//               Evolv Global is where clarity meets execution.
//             </p>
//             <div className="flex space-x-4 mb-6">
//               <div className="flex items-center space-x-2 text-gray-300">
//                 <MapPin size={16} />
//                 <span className="text-sm">8-2-293/82/B/S-7 4th Floor,JK TOWERS, Rd Number 10C, Gayatri Hills, Jubilee Hills, Hyderabad, Telangana 500033</span>
//               </div>
//             </div>
            
//             {/* Social Media Links */}
//             <div className="flex space-x-3">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => handleSocialClick('instagram')}
//                 className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white bg-transparent"
//               >
//                 <Instagram size={16} />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => handleSocialClick('linkedin')}
//                 className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
//               >
//                 <Linkedin size={16} />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => handleSocialClick('twitter')}
//                 className="border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white bg-transparent"
//               >
//                 <Twitter size={16} />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => handleSocialClick('whatsapp')}
//                 className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white bg-transparent"
//               >
//                 <MessageCircle size={16} />
//               </Button>
//             </div>
//           </div>
          
//           {/* Quick Links */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Quick Links</h3>
//             <div className="space-y-3">
//               <Link to="/" className="block text-gray-300 hover:text-white transition-colors duration-200">
//                 Home
//               </Link>
//               <Link to="/about" className="block text-gray-300 hover:text-white transition-colors duration-200">
//                 About
//               </Link>
//               <Link to="/services" className="block text-gray-300 hover:text-white transition-colors duration-200">
//                 Services
//               </Link>
//               <Link to="/case-studies" className="block text-gray-300 hover:text-white transition-colors duration-200">
//                 Case Studies
//               </Link>
//               <Link to="/clients" className="block text-gray-300 hover:text-white transition-colors duration-200">
//                 Clients
//               </Link>
//               <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
//                 Contact
//               </Link>
//             </div>
//           </div>
          
//           {/* Contact Info */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-2 text-gray-300">
//                 <Mail size={16} />
//                 <a href="mailto:Connect@evolvbrands.in" className="text-sm hover:text-white transition-colors">
//                   Connect@evolvbrands.in
//                 </a>
//               </div>
//               <div className="flex items-center space-x-2 text-gray-300">
//                 <MessageCircle size={16} />
//                 <a href="tel:+916304970488" className="text-sm hover:text-white transition-colors">
//                   +91 6304970488
//                 </a>
//               </div>
//               <div className="flex items-center space-x-2 text-gray-300">
//                 <MessageCircle size={16} />
//                 <a href="tel:+916304970488" className="text-sm hover:text-white transition-colors">
//                   +91 9703356332
//                 </a>
//               </div>
//             </div>
            
//             <div className="mt-6">
//               <h4 className="font-medium mb-3">Our Philosophy</h4>
//               <div className="space-y-2 text-sm text-gray-300">
//                 <div>• Clarity before Creativity</div>
//                 <div>• Systems over Chaos</div>
//                 <div>• Outcomes over Outputs</div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <div className="text-gray-300 text-sm">
//             © 2025 Evolv Global. All rights reserved.
//           </div>
//           <div className="text-gray-300 text-sm mt-4 md:mt-0 flex items-center space-x-4">
//             <span>Built for brands that dare to evolve.</span>
//             <div className="flex space-x-2">
//               <button 
//                 onClick={() => handleSocialClick('instagram')}
//                 className="text-pink-400 hover:text-pink-300 transition-colors"
//               >
//                 <Instagram size={16} />
//               </button>
//               <button 
//                 onClick={() => handleSocialClick('linkedin')}
//                 className="text-blue-400 hover:text-blue-300 transition-colors"
//               >
//                 <Linkedin size={16} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Instagram, Linkedin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleSocialClick = (platform: string) => {
    const urls = {
      instagram: 'https://www.instagram.com/evolv._global?utm_source=qr&igsh=YnZyOHdpbmxmZnRv',
      linkedin: 'https://www.linkedin.com/company/evolv-global/',
      x: 'https://x.com/global_evolv?t=tY28K6FfW6zDdtRCwcQgPg&s=08',
      whatsapp: 'https://wa.me/916304970488'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              // src="/lovable-uploads/18508a24-791e-410a-b53c-fc2c5ffdf0ac.png" 
              src="/images/evolv-logo.png" 
              alt="Evolv Global" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              We don't run campaigns. We build brand ecosystems. 
              Evolv Global is where clarity meets execution.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-6">
              <MapPin size={16} />
              <span className="text-sm">8-2-293/82/B/S-7 4th Floor, JK TOWERS, Rd Number 10C, Gayatri Hills, Jubilee Hills, Hyderabad, Telangana 500033</span>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSocialClick('instagram')}
                className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white bg-transparent"
              >
                <Instagram size={16} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSocialClick('linkedin')}
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
              >
                <Linkedin size={16} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSocialClick('x')}
                className="border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white bg-transparent"
              >
                <X size={16} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSocialClick('whatsapp')}
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white bg-transparent"
              >
                <MessageCircle size={16} />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                About
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Services
              </Link>
              <Link to="/case-studies" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Case Studies
              </Link>
              <Link to="/clients" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Clients
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <a href="mailto:Connect@evolvbrands.in" className="text-sm hover:text-white transition-colors">
                  Connect@evolvbrands.in
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MessageCircle size={16} />
                <a href="tel:+916304970488" className="text-sm hover:text-white transition-colors">
                  +91 6304970488
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MessageCircle size={16} />
                <a href="tel:+919703356332" className="text-sm hover:text-white transition-colors">
                  +91 9703356332
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Our Philosophy</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Clarity before Creativity</div>
                <div>• Systems over Chaos</div>
                <div>• Outcomes over Outputs</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm">
            © 2025 Evolv Global. All rights reserved.
          </div>
          <div className="text-gray-300 text-sm mt-4 md:mt-0 flex items-center space-x-4">
            <span>Built for brands that dare to evolve.</span>
            <div className="flex space-x-2">
              <button 
                onClick={() => handleSocialClick('instagram')}
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Instagram size={16} />
              </button>
              <button 
                onClick={() => handleSocialClick('linkedin')}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Linkedin size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
