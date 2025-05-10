
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { AlertTriangle, Check, X } from "lucide-react";
import { motion } from "framer-motion";

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

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}

const getSkipDescription = (size: number) => {
  const descriptions: Record<number, string> = {
    4: "Ideal for small home projects and garden waste",
    6: "Perfect for home renovations and medium garden clearance",
    8: "Great for larger home renovations and garden waste",
    10: "Suitable for large-scale home renovations",
    12: "Perfect for construction sites and large clearances",
    14: "Ideal for larger construction projects",
    16: "Best for major construction and demolition",
    20: "For industrial-scale waste and commercial use",
    40: "Our largest skip for major commercial projects",
  };
  
  return descriptions[size] || "Suitable for various waste disposal needs";
};

const SkipCard = ({ skip, isSelected, onSelect }: SkipCardProps) => {
  // Calculate the total price including VAT
  const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
  
  // Use a reliable placeholder with the skip size
  const imageUrl = `https://i2.wp.com/www.bioenergyconsult.com/wp-content/uploads/2021/05/skip-bin-scaled.jpg?ssl=1`;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card 
        className={`overflow-hidden transition-all h-full futuristic-border ${
          isSelected 
          ? 'ring-2 ring-primary shadow-lg dark:ring-futuristic-accent dark:shadow-futuristic-accent/30' 
          : 'hover:shadow-xl hover:border-primary/30 dark:hover:shadow-futuristic-accent/20 dark:hover:border-futuristic-accent/30'
        }`}
        onClick={onSelect}
      >
        <div className="relative">
          <div className="overflow-hidden h-48 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-futuristic-dark dark:to-gray-800 relative">
            <motion.img 
              src={imageUrl}
              alt={`${skip.size} Yard Skip`}
              className="w-full h-full object-cover object-center dark:opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              loading="eager"
              onError={(e) => {
                // Fallback if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/600x400/FFD700/000000?text=${skip.size}+Yard+Skip`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-black/40"></div>
          </div>
          <Badge 
            className="absolute top-3 right-3 bg-blue-600 hover:bg-blue-700 dark:bg-futuristic-accent dark:hover:bg-futuristic-accent/90"
          >
            {skip.size} Yards
          </Badge>
          {!skip.allowed_on_road && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center">
              <Badge className="bg-amber-700 hover:bg-amber-800 text-white text-xs py-1 flex items-center gap-1 dark:bg-amber-800/90 dark:hover:bg-amber-800">
                <AlertTriangle className="h-3 w-3" /> Not Allowed On Road
              </Badge>
            </div>
          )}
        </div>
        
        <CardContent className="pt-4 dark:bg-card">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{skip.size} Yard Skip</h3>
          <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">{skip.hire_period_days} day hire period</p>
          <p className="text-xs text-gray-600 mt-3 dark:text-gray-300">{getSkipDescription(skip.size)}</p>
          
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="flex items-center gap-1 text-xs">
              {skip.allows_heavy_waste ? (
                <Check className="h-3 w-3 text-green-600 dark:text-green-500" />
              ) : (
                <X className="h-3 w-3 text-red-500" />
              )}
              <span className="dark:text-gray-300">Heavy Waste</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              {skip.allowed_on_road ? (
                <Check className="h-3 w-3 text-green-600 dark:text-green-500" />
              ) : (
                <X className="h-3 w-3 text-red-500" />
              )}
              <span className="dark:text-gray-300">Road Placement</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col items-start pt-0 pb-4 dark:bg-card">
          <div className="w-full flex flex-col">
            <p className="text-2xl font-bold text-blue-600 dark:text-futuristic-accent">£{totalPrice.toFixed(2)}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">£{skip.price_before_vat.toFixed(2)} + VAT</p>
          </div>
          <motion.button 
            className={`mt-3 w-full py-2 px-4 rounded-md border transition-all duration-300 ${
              isSelected 
              ? 'bg-primary text-white border-primary dark:bg-futuristic-accent dark:border-futuristic-accent dark:text-white' 
              : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-300 dark:bg-futuristic-dark dark:border-futuristic-border dark:text-gray-200 dark:hover:bg-futuristic-dark/70'
            }`}
            whileHover={!isSelected ? { scale: 1.03, backgroundColor: '#f3f4f6' } : {}}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            {isSelected ? (
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                Selected ✓
              </motion.span>
            ) : (
              "Select This Skip"
            )}
          </motion.button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default SkipCard;
