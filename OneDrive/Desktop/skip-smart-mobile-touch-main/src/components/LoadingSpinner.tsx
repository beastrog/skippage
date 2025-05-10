
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center">
      <div className="relative">
        <motion.div
          className="w-16 h-16 border-4 border-t-primary rounded-full dark:border-t-futuristic-accent dark:border-futuristic-border/40"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute top-0 left-0 w-16 h-16 border-4 border-l-blue-400 border-r-transparent border-t-transparent border-b-transparent rounded-full dark:border-l-futuristic-glow"
          animate={{ rotate: -180 }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-600 dark:text-gray-300"
      >
        Loading skip options...
      </motion.p>
    </div>
  );
};

export default LoadingSpinner;
