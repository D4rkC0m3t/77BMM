
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent! 📧",
      description: "Thank you for your message. We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Get In <span className="text-electric-blue">Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to start your project? Let's discuss your mobile vision
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-electric-blue text-xl flex items-center">
                  <Mail className="mr-2" />
                  Email Us
                </CardTitle>
                <CardDescription className="text-white/70">
                  Send us an email and we'll respond within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white">chandragoud971@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-electric-blue text-xl flex items-center">
                  <Phone className="mr-2" />
                  Call Us
                </CardTitle>
                <CardDescription className="text-white/70">
                  Speak with our team directly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white">+91 81520 74243</p>
              </CardContent>
            </Card>

            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-electric-blue text-xl flex items-center">
                  <MapPin className="mr-2" />
                  Visit Us
                </CardTitle>
                <CardDescription className="text-white/70">
                  Find our office location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white">
                  Jain Market 1st Gate, 63 Block<br />
                  Near Moti Circle, Bellary<br />
                  KA 583101, Karnataka, India
                </p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-electric-blue">Why Choose 7BMM?</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-electric-cyan rounded-full mr-3"></div>
                  Cutting-edge mobile technologies
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-electric-cyan rounded-full mr-3"></div>
                  Expert design and development team
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-electric-cyan rounded-full mr-3"></div>
                  24/7 support and maintenance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-electric-cyan rounded-full mr-3"></div>
                  Agile development process
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-electric-blue text-2xl">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-white/70">
                  Tell us about your project and we'll get back to you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name" className="text-white">Name *</Label>
                      <Input
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="glass border-white/20 text-white placeholder:text-white/50"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email" className="text-white">Email *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="glass border-white/20 text-white placeholder:text-white/50"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="glass border-white/20 text-white placeholder:text-white/50"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="glass border-white/20 text-white placeholder:text-white/50 min-h-[120px]"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-electric-blue hover:bg-electric-cyan text-black font-semibold py-3 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/50"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
