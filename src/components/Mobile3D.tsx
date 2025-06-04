
import { motion } from 'framer-motion';

const Mobile3D = () => {
  return (
    <motion.div
      className="relative"
      animate={{ 
        rotateY: [0, 15, 0, -15, 0],
        y: [0, -10, 0, 10, 0]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Mobile Device Frame */}
      <div className="relative w-24 h-48 bg-gradient-to-b from-gray-800 to-black rounded-2xl shadow-2xl transform perspective-1000 rotate-y-12">
        {/* Screen */}
        <div className="absolute top-3 left-3 right-3 bottom-3 bg-gradient-to-b from-electric-blue to-electric-cyan rounded-xl overflow-hidden">
          {/* Screen Content */}
          <div className="p-2 space-y-2">
            <div className="h-2 bg-white/30 rounded"></div>
            <div className="h-1 bg-white/20 rounded w-3/4"></div>
            <div className="h-1 bg-white/20 rounded w-1/2"></div>
            
            {/* Animated Elements */}
            <motion.div
              className="h-4 bg-white/40 rounded mt-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <div className="space-y-1 mt-2">
              <div className="h-1 bg-white/30 rounded"></div>
              <div className="h-1 bg-white/30 rounded w-2/3"></div>
            </div>
          </div>
        </div>
        
        {/* Home Button */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-600 rounded-full"></div>
        
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: [
              "0 0 20px rgba(0, 212, 255, 0.3)",
              "0 0 40px rgba(0, 212, 255, 0.6)",
              "0 0 20px rgba(0, 212, 255, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      
      {/* Floating Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-electric-blue rounded-full"
          style={{
            top: `${20 + i * 30}%`,
            left: `${-20 + i * 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5
          }}
        />
      ))}
    </motion.div>
  );
};

export default Mobile3D;
