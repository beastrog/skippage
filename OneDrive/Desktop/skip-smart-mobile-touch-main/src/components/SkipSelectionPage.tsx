
import { useState } from 'react';
import SkipCard from './SkipCard';
import { toast } from './ui/sonner';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

interface SkipSelectionPageProps {
  skips: Skip[];
}

const SkipSelectionPage = ({ skips }: SkipSelectionPageProps) => {
  const [selectedSkip, setSelectedSkip] = useState<number | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const handleSkipSelect = (skipId: number) => {
    setSelectedSkip(skipId);
    toast.success(`Skip size selected`);
  };

  const handleContinue = () => {
    if (!selectedSkip) {
      toast.error('Please select a skip size first');
      return;
    }
    
    toast.success('Proceeding to next step');
    // In a real app, we would navigate to the next step here
    console.log(`Continuing with skip ID: ${selectedSkip}`);
  };

  const filteredSkips = filter 
    ? skips.filter(skip => {
        if (filter === 'road') return skip.allowed_on_road;
        if (filter === 'heavy') return skip.allows_heavy_waste;
        return true;
      })
    : skips;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="py-10 px-4 sm:px-6 min-h-screen dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 dark:text-white">
            Choose Your Skip Size
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Select the skip size that best suits your needs
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant={filter === null ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilter(null)}
              className="text-sm dark:border-futuristic-border dark:bg-opacity-90 dark:hover:bg-opacity-100 transition-all duration-300 hover:shadow-md"
            >
              All Skips
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant={filter === 'road' ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilter('road')}
              className="text-sm dark:border-futuristic-border dark:bg-opacity-90 dark:hover:bg-opacity-100 transition-all duration-300 hover:shadow-md"
            >
              Road Placement
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant={filter === 'heavy' ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilter('heavy')}
              className="text-sm dark:border-futuristic-border dark:bg-opacity-90 dark:hover:bg-opacity-100 transition-all duration-300 hover:shadow-md"
            >
              Heavy Waste
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedSkip === skip.id}
              onSelect={() => handleSkipSelect(skip.id)}
            />
          ))}
        </motion.div>

        {filteredSkips.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400">No skips match the selected filter.</p>
            <Button 
              variant="outline" 
              className="mt-4 dark:border-futuristic-border"
              onClick={() => setFilter(null)}
            >
              Show All Skips
            </Button>
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <motion.button 
            className="text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            ← Back
          </motion.button>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={selectedSkip ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            whileHover={selectedSkip ? { scale: 1.05, x: 2 } : {}}
            whileTap={selectedSkip ? { scale: 0.95 } : {}}
            className={`${!selectedSkip ? 'pointer-events-none' : ''}`}
          >
            <Button 
              onClick={handleContinue} 
              disabled={!selectedSkip}
              className="px-8 dark:bg-futuristic-accent dark:hover:bg-futuristic-accent/90 transition-all duration-300 hover:shadow-lg"
            >
              <motion.div 
                className="flex items-center"
                animate={selectedSkip ? { x: [0, 5, 0] } : {}}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5, ease: "easeInOut" }}
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkipSelectionPage;
