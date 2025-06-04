
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Smartphone, Wrench, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Floating Service Icons */}
      <motion.div
        className="absolute top-20 left-10 text-electric-blue"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Smartphone size={40} />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-20 text-electric-cyan"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <Wrench size={35} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20 text-neon-green"
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      >
        <Zap size={30} />
      </motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 glow-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <span className="text-white">Professional</span>{' '}
            <span className="text-electric-blue">Mobile</span>
            <br />
            <span className="text-electric-cyan">Repair Services</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Expert smartphone and tablet repairs with cutting-edge technology. 
            Fast turnaround, quality guaranteed, and seamless booking experience.
          </motion.p>

          {/* Service Highlights */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {['Screen Repair', 'Battery Replacement', 'Water Damage', 'Software Fix'].map((service, index) => (
              <motion.div
                key={service}
                className="glass px-4 py-2 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {service}
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Button 
              size="lg"
              className="bg-electric-blue hover:bg-electric-cyan text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/50 hover-lift"
            >
              Book Repair
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-black px-8 py-4 rounded-full text-lg transition-all duration-300 hover-lift"
            >
              View Services
            </Button>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="cursor-pointer"
              >
                <ArrowDown className="text-electric-blue w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
