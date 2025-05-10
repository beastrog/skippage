
import { Truck, Phone, Menu, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as 'light' | 'dark' || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Skip Sizes', path: '/' },
    { title: 'Services', path: '#' },
    { title: 'Areas', path: '#' },
    { title: 'About Us', path: '#' },
    { title: 'Contact', path: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-futuristic-border">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Truck className="h-6 w-6 text-green-600 dark:text-futuristic-accent" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 dark:from-futuristic-accent dark:to-futuristic-glow">
            WeWantWaste
          </span>
        </div>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link 
                key={item.title}
                to={item.path} 
                className="text-sm font-medium transition-colors hover:text-primary dark:hover:text-futuristic-glow"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}
        
        {/* Contact Info & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className="mr-2"
          >
            {theme === 'dark' ? (
              <Sun className="h-[1.2rem] w-[1.2rem] text-futuristic-glow animate-pulse-glow" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <a 
            href="tel:01234567890" 
            className="hidden md:flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary dark:hover:text-futuristic-accent"
          >
            <Phone className="h-4 w-4" />
            <span>01234 567 890</span>
          </a>
          
          {isMobile && (
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none h-9 py-2 px-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[385px] dark:bg-futuristic-dark dark:border-futuristic-border">
                <nav className="flex flex-col gap-4 mt-8">
                  {menuItems.map((item) => (
                    <Link 
                      key={item.title}
                      to={item.path} 
                      className="text-base font-medium py-2 transition-colors hover:text-primary dark:hover:text-futuristic-accent"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                  <a 
                    href="tel:01234567890" 
                    className="flex items-center gap-2 text-base font-medium py-2 transition-colors hover:text-primary dark:hover:text-futuristic-accent"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="h-4 w-4" />
                    <span>01234 567 890</span>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
