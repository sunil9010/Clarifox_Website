import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, User, LogOut, Briefcase, Home, Info, BookOpen, Mail, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth.jsx';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Services', href: '/services', icon: Award },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Jobs', href: '/jobs', icon: Briefcase },
    { name: 'Testimonials', href: '/testimonials', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const NavItem = ({ href, name, icon: Icon, isMobile = false }) => (
    <NavLink
      to={href}
      onClick={() => setIsOpen(false)}
      className={({ isActive }) =>
        `nav-link flex items-center gap-2 font-medium transition-colors ${
          isActive ? 'text-primary' : 'text-foreground hover:text-primary'
        } ${isMobile ? 'p-3 rounded-md hover:bg-secondary w-full text-left' : ''}`
      }
    >
      <Icon className="w-5 h-5" />
      <span>{name}</span>
    </NavLink>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">C</span>
            </motion.div>
            <span className="text-2xl font-bold gradient-text">Clarifox</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-foreground">
                  <User className="w-4 h-4 text-accent" />
                  <span className="text-sm">Admin</span>
                </div>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="text-primary border-primary hover:bg-primary hover:text-white"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button asChild size="sm" className="bg-gradient-to-r from-primary to-accent text-white">
                <NavLink to="/login">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </NavLink>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavItem key={item.name} {...item} isMobile />
            ))}
            <div className="pt-4 mt-4 border-t border-border">
              {isAuthenticated ? (
                <div className="px-3 py-2 space-y-4">
                  <div className="flex items-center space-x-2 text-foreground">
                    <User className="w-5 h-5 text-accent" />
                    <span className="text-base">Admin</span>
                  </div>
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="text-primary border-primary hover:bg-primary hover:text-white w-full"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="px-2">
                  <Button asChild className="bg-gradient-to-r from-primary to-accent text-white w-full">
                    <NavLink to="/login" onClick={() => setIsOpen(false)}>
                      <User className="w-4 h-4 mr-2" />
                      Login
                    </NavLink>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;