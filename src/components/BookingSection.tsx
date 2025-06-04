
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [otherServiceText, setOtherServiceText] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const { toast } = useToast();

  const services = [
    { value: 'front-glass', label: 'Glass Replacement (Front)' },
    { value: 'display-replacement', label: 'Display Replacement (Front)' },
    { value: 'back-glass', label: 'Back Glass Replacement' },
    { value: 'battery', label: 'Battery Replacement' },
    { value: 'body-housing', label: 'Body Housing Replacement' },
    { value: 'charging-port', label: 'Charging Port Replacement' },
    { value: 'speaker', label: 'Speaker Replacement' },
    { value: 'camera', label: 'Camera Replacement' },
    { value: 'mic', label: 'Microphone Issue' },
    { value: 'network', label: 'Network Issue' },
    { value: 'water-damage', label: 'Water Damage Repair' },
    { value: 'software', label: 'Software Issue / Flashing' },
    { value: 'motherboard', label: 'Motherboard Repair' },
    { value: 'others', label: 'Others' }
  ];

  const timeSlots = [
    '09:00', '10:30', '12:00', '13:30', '15:00', '16:30'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedService || !selectedTime || !formData.name || !formData.email || (selectedService === 'others' && !otherServiceText)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const serviceObject = services.find(s => s.value === selectedService);
    const serviceNameToSubmit = selectedService === 'others' ? 'Others' : (serviceObject ? serviceObject.label : '');

    const bookingDetails = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceName: serviceNameToSubmit,
      otherServiceText: otherServiceText,
      bookingDate: selectedDate ? format(selectedDate, 'PPP') : '',
      bookingTime: selectedTime,
    };

    try {
      const response = await fetch('http://localhost:3001/api/send-booking-confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Booking Confirmed! 🎉",
          description: `Your ${bookingDetails.serviceName === 'Others' && bookingDetails.otherServiceText ? bookingDetails.otherServiceText : bookingDetails.serviceName} appointment is scheduled for ${bookingDetails.bookingDate} at ${bookingDetails.bookingTime}. Confirmation email is on its way!`,
        });
        // Reset form
        setSelectedDate(undefined);
        setSelectedService('');
        setSelectedTime('');
        setFormData({ name: '', email: '', phone: '' });
        setOtherServiceText('');
      } else {
        toast({
          title: "Booking Failed",
          description: result.message || "Could not send booking confirmation. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error('Booking submission error:', error);
      let errorMessage = "An error occurred while submitting your booking. Please check your connection or contact support if the issue persists.";
      if (error instanceof Error) {
        errorMessage = `Booking Error: ${error.message}. Please check your connection or contact support.`;
      }
      // Log the full error object to the browser console for more details
      console.error('Full booking submission error object:', error); 

      toast({
        title: "Booking Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <section id="booking" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Book Your <span className="text-electric-blue">Appointment</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Schedule a consultation and let's bring your mobile vision to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-electric-blue text-2xl text-center">
                Schedule Your Session
              </CardTitle>
              <CardDescription className="text-white/70 text-center">
                Choose your preferred date, time, and service
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="glass border-white/20 text-white placeholder:text-white/50"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input
                      id="email"
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
                  <Label htmlFor="phone" className="text-white">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="glass border-white/20 text-white placeholder:text-white/50"
                    placeholder="Your phone number"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <Label className="text-white">Service *</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="glass border-white/20 text-white">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="glass border-white/20 bg-gray-900/90">
                      {services.map((service) => (
                        <SelectItem 
                          key={service.value} 
                          value={service.value}
                          className="text-white hover:bg-electric-blue/20"
                        >
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedService === 'others' && (
                    <div className="space-y-2 mt-4">
                      <Label htmlFor="otherService" className="text-white">Please specify other service *</Label>
                      <Input
                        id="otherService"
                        value={otherServiceText}
                        onChange={(e) => setOtherServiceText(e.target.value)}
                        className="glass border-white/20 text-white placeholder:text-white/50"
                        placeholder="Specify service details"
                        required
                      />
                    </div>
                  )}
                </div>

                {/* Date Selection */}
                <div className="space-y-2">
                  <Label className="text-white">Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal glass border-white/20 text-white",
                          !selectedDate && "text-white/50"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                        initialFocus
                        className="glass border-white/20 bg-gray-900/90 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Selection */}
                <div className="space-y-2">
                  <Label className="text-white">Time *</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        className={cn(
                          "glass border-white/20",
                          selectedTime === time 
                            ? "bg-electric-blue text-black" 
                            : "text-white hover:bg-electric-blue/20"
                        )}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-electric-blue hover:bg-electric-cyan text-black font-semibold py-3 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/50"
                >
                  Confirm Booking
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
