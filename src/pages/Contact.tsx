import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Phone, Mail, MapPin, MessageCircle, Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const heroRef = useRef(null);
  const formRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: '-100px' });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen ocean-gradient">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/hero-boat-pikkewyn.jpg"
            alt="Ocean background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ocean-deep mb-4">
              Contact Us
            </h1>
            <p className="text-gray-700">
              Book your fishing adventure today! Reach out with any questions or to plan your tailored offshore trip
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section ref={formRef} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-6 lg:p-8"
            >
              <h2 className="text-xl font-semibold text-ocean-deep mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-ocean-deep mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">We'll get back to you as soon as possible.</p>
                  <Button 
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="border-ocean-medium text-ocean-medium hover:bg-ocean-medium hover:text-white"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-1"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-1"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-1"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell us about your fishing adventure plans..."
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Contact Info Card */}
              <div className="glass-card rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-ocean-deep mb-6">Contact Details</h2>
                <div className="space-y-4">
                  <a 
                    href="tel:+27828824594"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-ocean-light/30 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-ocean-light/50 rounded-lg flex items-center justify-center group-hover:bg-ocean-medium group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5 text-ocean-medium group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium text-ocean-deep">+27 82 882 4594</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/27828824594"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-ocean-light/30 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-ocean-light/50 rounded-lg flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5 text-ocean-medium group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">WhatsApp</p>
                      <p className="font-medium text-ocean-deep">+27 82 882 4594</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:info@coastline.capetown"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-ocean-light/30 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-ocean-light/50 rounded-lg flex items-center justify-center group-hover:bg-ocean-medium group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5 text-ocean-medium group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium text-ocean-deep">info@coastline.capetown</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 p-3 rounded-xl">
                    <div className="w-10 h-10 bg-ocean-light/50 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-ocean-medium" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-ocean-deep">Hout Bay Harbour</p>
                      <p className="text-sm text-gray-500">Cape Town, South Africa</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Card */}
              <div className="glass-card rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-ocean-deep mb-3">Find Us</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Located in Hout Bay Harbour, serving Cape Town's beautiful coastline.
                </p>
                <div className="relative h-64 rounded-xl overflow-hidden bg-ocean-light/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5!2d18.35!3d-34.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc676e3b54c6c1%3A0x5e0c9e0b0b0b0b0b!2sHout%20Bay%20Harbour!5e0!3m2!1sen!2sza!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
