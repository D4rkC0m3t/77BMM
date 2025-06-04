
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Battery, Droplets, Settings, Shield, Zap } from 'lucide-react';

const MobileRepairWidgets = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Screen Repair",
      description: "Cracked or damaged screens fixed with premium quality parts",
      color: "text-electric-blue",
      bgColor: "bg-electric-blue/10"
    },
    {
      icon: Battery,
      title: "Battery Replacement",
      description: "Restore your device's power with genuine battery replacements",
      color: "text-neon-green",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Droplets,
      title: "Water Damage",
      description: "Professional water damage repair and component restoration",
      color: "text-electric-cyan",
      bgColor: "bg-cyan-500/10"
    },
    {
      icon: Settings,
      title: "Software Issues",
      description: "Fix software glitches, updates, and performance problems",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Shield,
      title: "Screen Protection",
      description: "Premium screen protectors and protective accessories",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: Zap,
      title: "Quick Diagnostics",
      description: "Free diagnostic service to identify device issues",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Repair <span className="text-electric-blue">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive mobile device repair solutions with expert technicians
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 212, 255, 0.2)"
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Card className="glass border-white/20 h-full overflow-hidden relative">
                <CardContent className="p-6">
                  <motion.div
                    className={`${service.bgColor} rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className={`${service.color} w-8 h-8`} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Hover overlay effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-electric-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileRepairWidgets;
