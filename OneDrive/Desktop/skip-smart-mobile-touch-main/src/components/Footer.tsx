
import { Truck, Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 pt-12 pb-6 px-4 md:px-6 dark:bg-futuristic-dark dark:border-t dark:border-futuristic-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Truck className="h-6 w-6 text-green-600 dark:text-futuristic-accent" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 dark:from-futuristic-accent dark:to-futuristic-glow">
                WeWantWaste
              </span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs dark:text-gray-300">
              Providing reliable waste management solutions at competitive prices for over 15 years.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-futuristic-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-futuristic-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-600 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-futuristic-accent">Home</Link></li>
              <li><Link to="/" className="text-sm text-gray-600 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-futuristic-accent">Skip Sizes</Link></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-futuristic-accent">Areas We Cover</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-futuristic-accent">Services</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-futuristic-accent">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4 dark:text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 text-primary dark:text-futuristic-accent" />
                <span className="text-sm text-gray-600 dark:text-gray-300">01234 567 890</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 text-primary dark:text-futuristic-accent" />
                <span className="text-sm text-gray-600 dark:text-gray-300">info@wewantwaste.co.uk</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-4 w-4 mt-1 text-primary dark:text-futuristic-accent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-sm text-gray-600 dark:text-gray-300">123 Waste Street, Lowestoft, NR32</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4 dark:text-white">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4 dark:text-gray-300">Sign up for our newsletter to receive updates and special offers.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-3 py-2 bg-white text-sm border border-gray-300 rounded-md flex-grow dark:bg-futuristic-dark dark:border-futuristic-border dark:text-gray-300"
                required
              />
              <Button type="submit" size="sm" className="dark:bg-futuristic-accent dark:hover:bg-futuristic-accent/90">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <Separator className="mb-6 dark:bg-futuristic-border" />
        
        <div className="text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} WeWantWaste. All rights reserved.
          </p>
          <div className="mt-2 sm:mt-0">
            <ul className="flex justify-center sm:justify-start space-x-4">
              <li><a href="#" className="text-xs text-gray-500 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-futuristic-accent">Privacy Policy</a></li>
              <li><a href="#" className="text-xs text-gray-500 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-futuristic-accent">Terms of Service</a></li>
              <li><a href="#" className="text-xs text-gray-500 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-futuristic-accent">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
