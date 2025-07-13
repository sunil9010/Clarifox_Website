import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>Contact Us | Clarifox</title>
        <meta name="description" content="Get in touch with Clarifox. Contact us for course inquiries, corporate training, or any questions you may have. We're here to help." />
      </Helmet>

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions? We're here to help you every step of the way.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your Name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="e.g., Course Inquiry" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} placeholder="Your message..." />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 text-lg">
                  {isSubmitting ? 'Sending...' : <><Send className="w-5 h-5 mr-2" /> Send Message</>}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-effect rounded-xl p-6 flex items-start space-x-4">
                <Phone className="w-8 h-8 text-accent mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Call Us</h3>
                  <p className="text-gray-400">For immediate assistance</p>
                  <a href="tel:+15551234567" className="text-primary hover:underline">+1 (555) 123-4567</a>
                </div>
              </div>
              <div className="glass-effect rounded-xl p-6 flex items-start space-x-4">
                <Mail className="w-8 h-8 text-accent mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Email Us</h3>
                  <p className="text-gray-400">For any inquiries</p>
                  <a href="mailto:info@clarifox.com" className="text-primary hover:underline">info@clarifox.com</a>
                </div>
              </div>
              <div className="glass-effect rounded-xl p-6 flex items-start space-x-4">
                <MapPin className="w-8 h-8 text-accent mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Visit Us</h3>
                  <p className="text-gray-400">123 Tech Street, Innovation District, NY 10001</p>
                  <button onClick={() => toast({ title: "🚧 Map feature coming soon!" })} className="text-primary hover:underline">Get Directions</button>
                </div>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Our Location</h3>
                <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Map Placeholder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;