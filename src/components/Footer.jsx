import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Courses', href: '/courses' },
    { name: 'Job Openings', href: '/jobs' },
    { name: 'Contact', href: '/contact' }
  ];

  const courses = [
    { name: 'Python Programming', href: '/courses' },
    { name: 'HTML & CSS', href: '/courses' },
    { name: 'JavaScript Mastery', href: '/courses' },
    { name: 'SQLite Database', href: '/courses' },
    { name: 'React JS Development', href: '/courses' },
    { name: 'Node.js Backend', href: '/courses' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <NavLink to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Clarifox</span>
            </NavLink>
            <p className="text-muted-foreground leading-relaxed">
              Empowering careers through comprehensive IT and Non-IT training programs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@clarifox.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="w-5 h-5" />
                <span>123 Tech Street, NY 10001</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-foreground">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <NavLink to={course.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {course.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-foreground">Stay Connected</h3>
            <p className="text-muted-foreground">
              Subscribe for updates on courses and job opportunities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Clarifox. All rights reserved.
            </p>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary hover:bg-secondary"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;