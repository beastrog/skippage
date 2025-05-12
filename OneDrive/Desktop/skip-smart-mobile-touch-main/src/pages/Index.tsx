
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
    // Track if the component is mounted to prevent state updates after unmount
    let isMounted = true;
    // Track retry attempts
    let retryCount = 0;
    const maxRetries = 3;
    const retryDelay = 1500; // 1.5 seconds
    
    const fetchSkips = async () => {
      try {
        if (isMounted) setLoading(true);
        
        // Use a timeout to abort the fetch if it takes too long
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        
        // Use environment variables for API URL and parameters
        const API_URL = import.meta.env.VITE_API_URL || 'https://app.wewantwaste.co.uk/api';
        const DEFAULT_POSTCODE = import.meta.env.VITE_DEFAULT_POSTCODE || 'NR32';
        const DEFAULT_AREA = import.meta.env.VITE_DEFAULT_AREA || 'Lowestoft';
        
        const response = await fetch(
          `${API_URL}/skips/by-location?postcode=${DEFAULT_POSTCODE}&area=${DEFAULT_AREA}`,
          { 
            signal: controller.signal,
            headers: {
              'Accept': 'application/json',
              'Cache-Control': 'no-cache'
            } 
          }
        );
        
        // Clear the timeout since the request completed
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        
        // Validate the response data
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format received from API');
        }
        
        // Sort skips by size ascending
        const sortedSkips = data.sort((a: Skip, b: Skip) => a.size - b.size);
        
        if (isMounted) {
          setSkips(sortedSkips);
          setError(null); // Clear any previous errors
        }
      } catch (err: any) {
        console.error('Failed to fetch skip data:', err);
        
        // Handle abort errors separately
        if (err.name === 'AbortError') {
          if (isMounted) {
            setError('Request timed out. Please check your connection and try again.');
            toast.error('Request timed out. Please check your connection and try again.');
          }
        } 
        // Implement retry logic for network errors or 5xx server errors
        else if (retryCount < maxRetries && 
                (err.message.includes('network') || 
                 err.message.includes('5') || 
                 err.message.includes('failed'))) {
          retryCount++;
          console.log(`Retrying fetch (${retryCount}/${maxRetries})...`);
          
          // Use exponential backoff for retries
          setTimeout(fetchSkips, retryDelay * retryCount);
          return; // Exit early to avoid setting error state
        }
        // For other errors, show error message
        else if (isMounted) {
          setError('Failed to load skip options. Please try again later.');
          toast.error('Failed to load skip options. Please try again later.');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchSkips();
    
    // Cleanup function to prevent memory leaks and state updates after unmount
    return () => {
      isMounted = false;
    };
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
