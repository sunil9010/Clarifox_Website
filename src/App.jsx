import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/hooks/useAuth.jsx';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import CoursesPage from '@/pages/CoursesPage';
import JobsPage from '@/pages/JobsPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import ContactPage from '@/pages/ContactPage';
import LoginPage from '@/pages/LoginPage';

function App() {
  return (
    <AuthProvider>
      <Helmet>
        <title>Clarifox - Transform Your Career with Expert IT Training</title>
        <meta name="description" content="Leading IT and Non-IT training consultancy offering comprehensive courses in Python, React, Node.js, and more. 95% placement rate with top companies. Start your career transformation today." />
        <meta name="keywords" content="IT training, programming courses, Python, React, JavaScript, career development, job placement, Clarifox" />
        <meta name="author" content="Clarifox Training Solutions" />
        <meta property="og:title" content="Clarifox - Transform Your Career with Expert IT Training" />
        <meta property="og:description" content="Join thousands of successful graduates who transformed their careers with our comprehensive IT training programs." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://clarifox.com" />
      </Helmet>
      
      <ScrollToTop />
      <Navigation />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </AuthProvider>
  );
}

export default App;