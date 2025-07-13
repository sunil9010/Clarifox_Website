import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/PageWrapper';
import HeroSection from '@/components/HeroSection';
import { ArrowRight, BookOpen, Briefcase, Award, Users, Star } from 'lucide-react';

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>Home | Clarifox - Expert IT & Non-IT Training</title>
        <meta name="description" content="Welcome to Clarifox. Kickstart your career with our expert-led training in IT and Non-IT fields. Explore our courses, services, and job opportunities." />
      </Helmet>

      <HeroSection />

      {/* CEO Spotlight Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                className="rounded-2xl w-full h-auto object-cover shadow-2xl shadow-primary/20"
                alt="Sreekanth Reddy Chintha, CEO of Clarifox"
               src="images/founder.svg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground">Meet Our Visionary Leader</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "With over 5 years of dedicated experience, I've had the privilege of placing countless students in their dream jobs. At Clarifox, we don't just teach; we build careers. Our commitment is to provide you with the skills and confidence needed to thrive in the tech industry."
              </p>
              <div>
                <p className="text-xl font-semibold text-foreground">Sreekanth Reddy Chintha</p>
                <p className="gradient-text font-medium">Founder & CEO, Clarifox</p>
              </div>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <NavLink to="/about">
                  Learn More About Our Story <ArrowRight className="ml-2 w-4 h-4" />
                </NavLink>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <motion.div variants={itemVariants} className="p-6">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground">5,000+</div>
              <div className="text-muted-foreground mt-1">Students Trained</div>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6">
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground">95%</div>
              <div className="text-muted-foreground mt-1">Placement Success</div>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground">15+</div>
              <div className="text-muted-foreground mt-1">Years of Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our most popular courses designed for career success.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Cards */}
            <FeaturedCard title="Python & Django" description="Master backend development with the most popular Python framework." link="/courses" />
            <FeaturedCard title="React JS Mastery" description="Build modern, dynamic user interfaces with the industry-standard library." link="/courses" />
            <FeaturedCard title="Full-Stack Development" description="Become a versatile developer by learning both frontend and backend technologies." link="/courses" />
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="link" className="text-primary text-lg">
              <NavLink to="/courses">
                View All Courses <ArrowRight className="ml-2 w-5 h-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Services & Jobs Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Award className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground mb-6">
              We offer more than just training. Our corporate training solutions and dedicated placement services are designed to help both individuals and companies thrive.
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <NavLink to="/services">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </NavLink>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Briefcase className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest Job Openings</h2>
            <p className="text-muted-foreground mb-6">
              Explore exclusive job opportunities from our network of hiring partners. Your next career move is just a click away.
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <NavLink to="/jobs">
                View Openings <ArrowRight className="ml-2 w-4 h-4" />
              </NavLink>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

const FeaturedCard = ({ title, description, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="course-card rounded-2xl p-8 text-center group bg-background"
  >
    <BookOpen className="w-12 h-12 text-primary mx-auto mb-6" />
    <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground mb-6">{description}</p>
    <Button asChild variant="link" className="text-primary">
      <NavLink to={link}>
        Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </NavLink>
    </Button>
  </motion.div>
);

export default HomePage;