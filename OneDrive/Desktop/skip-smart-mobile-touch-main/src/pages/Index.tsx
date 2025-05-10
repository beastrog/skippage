
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipSelectionPage from '../components/SkipSelectionPage';
import LoadingSpinner from '../components/LoadingSpinner';
import { toast } from '../components/ui/sonner';

// Define the Skip interface
interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  postcode?: string;
  area?: string;
}

const Index = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        // Sort skips by size ascending
        const sortedSkips = data.sort((a: Skip, b: Skip) => a.size - b.size);
        setSkips(sortedSkips);
      } catch (err) {
        console.error('Failed to fetch skip data:', err);
        setError('Failed to load skip options. Please try again later.');
        toast.error('Failed to load skip options. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  return (
    <div className="flex flex-col min-h-screen dark:bg-background transition-colors duration-300">
      <Header />
      
      <main className="flex-grow">
        {loading && <LoadingSpinner />}
        
        {error && (
          <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-500 mb-4 dark:text-red-400">Oops! Something went wrong.</h1>
              <p className="text-gray-600 mb-6 dark:text-gray-300">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors dark:bg-futuristic-accent dark:hover:bg-futuristic-accent/90"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
        
        {!loading && !error && <SkipSelectionPage skips={skips} />}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
