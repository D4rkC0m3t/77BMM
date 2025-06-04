
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Wrench, Clock, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Mobile Device Repair",
      description: "Professional repair services for all smartphone and tablet brands",
      features: ["Screen Replacement", "Battery Service", "Camera Repair"],
      icon: Smartphone,
      color: "text-electric-blue"
    },
    {
      title: "Technical Support",
      description: "Expert technical assistance and device optimization services",
      features: ["Software Updates", "Data Recovery", "Performance Tuning"],
      icon: Wrench,
      color: "text-electric-cyan"
    },
    {
      title: "Express Service",
      description: "Fast-track repair services for urgent device issues",
      features: ["Same-day Repair", "Priority Booking", "Emergency Support"],
      icon: Clock,
      color: "text-neon-green"
    },
    {
      title: "Warranty & Protection",
      description: "Comprehensive warranty and device protection plans",
      features: ["Extended Warranty", "Accident Protection", "Regular Maintenance"],
      icon: Shield,
      color: "text-purple-400"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Our <span className="text-electric-blue">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Professional mobile repair solutions tailored to your device needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                boxShadow: "0 25px 50px rgba(0, 212, 255, 0.2)"
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="hover-lift group"
            >
              <Card className="glass border-white/20 h-full overflow-hidden relative">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    className="mx-auto mb-4 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className={`${service.color} w-8 h-8`} />
                  </motion.div>
                  <CardTitle className="text-electric-blue text-xl group-hover:text-electric-cyan transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="text-white/80 flex items-center group-hover:text-white transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-electric-cyan rounded-full mr-3"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: idx * 0.3
                          }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                {/* Hover overlay effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-electric-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
