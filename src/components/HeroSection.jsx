import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroContent = [
    {
      title: "Kickstart Your IT Career with Clarifox",
      subtitle: "Transform your future with industry-leading training programs",
      description: "Join thousands of successful graduates who landed their dream jobs through our comprehensive IT and Non-IT training courses.",
      src: "/images/2.svg"
    },
    {
      title: "Master In-Demand Technologies",
      subtitle: "Learn from industry experts and real-world projects",
      description: "From Python to React JS, master the technologies that top companies are hiring for right now.",
      src: "/images/3.svg"
    },
    {
      title: "100% Job Placement Support",
      subtitle: "Your success is our commitment",
      description: "Get personalized career guidance, interview preparation, and direct connections to our hiring partners.",
      src: "/images/4.svg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroContent.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        <img
          src={heroContent[currentSlide]?.src}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            {heroContent[currentSlide]?.title.split(" ").map((word, i) => (
              <span key={i} className={word.toLowerCase() === "clarifox" ? "gradient-text" : ""}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {heroContent[currentSlide]?.subtitle}
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {heroContent[currentSlide]?.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg font-semibold pulse-glow">
              <Link to="/courses">
                Explore Courses
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="border-white  hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
              <Link to="/jobs">
                <Play className="mr-2 w-5 h-5" />
                View Job Openings
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
