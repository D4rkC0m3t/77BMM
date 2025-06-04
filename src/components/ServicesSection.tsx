
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "Mobile App Design",
      description: "Cutting-edge mobile interface design with intuitive user experiences",
      features: ["UI/UX Design", "Prototyping", "User Testing"]
    },
    {
      title: "Development Services",
      description: "Full-stack mobile development with modern technologies",
      features: ["iOS Development", "Android Development", "Cross-Platform"]
    },
    {
      title: "Consultation",
      description: "Expert advice on mobile strategy and technology decisions",
      features: ["Strategy Planning", "Tech Stack", "Project Planning"]
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
            Professional mobile solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="hover-lift"
            >
              <Card className="glass border-white/20 h-full">
                <CardHeader>
                  <CardTitle className="text-electric-blue text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-white/80 flex items-center">
                        <div className="w-2 h-2 bg-electric-cyan rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
