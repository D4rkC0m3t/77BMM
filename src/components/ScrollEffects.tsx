
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ScrollEffects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div ref={containerRef} className="relative py-20 overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-blue/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-cyan/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Content with scroll effects */}
      <motion.div 
        style={{ scale, opacity }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-6 glow-text"
          whileInView={{ 
            backgroundPosition: ["0% 50%", "100% 50%"],
            backgroundImage: "linear-gradient(90deg, #00D4FF, #00FFF7, #8B5CF6, #00D4FF)"
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Why Choose <span className="text-electric-blue">77BMM</span>?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-white/80 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Experience the future of mobile repair services with our expert technicians, 
          cutting-edge tools, and commitment to excellence.
        </motion.p>

        {/* Floating stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { number: "1000+", label: "Devices Repaired" },
            { number: "24/7", label: "Support Available" },
            { number: "99%", label: "Success Rate" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl"
              whileInView={{ 
                scale: [0.8, 1.1, 1],
                rotateY: [0, 360, 0]
              }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.2,
                type: "spring"
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)"
              }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-electric-blue mb-2">{stat.number}</div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollEffects;
