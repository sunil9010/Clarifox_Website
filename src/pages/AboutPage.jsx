import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import { Target, Users, Award, Lightbulb, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const AboutPage = () => {
  const features = [
    { icon: Target, title: "Mission-Driven", description: "Empowering individuals with cutting-edge skills to excel in the digital economy." },
    { icon: Users, title: "Expert Instructors", description: "Learn from industry professionals with years of real-world experience." },
    { icon: Award, title: "Proven Results", description: "95% placement rate with top companies across various industries." },
    { icon: Lightbulb, title: "Innovation Focus", description: "Stay ahead with the latest technologies and industry best practices." }
  ];

  const achievements = [
    "5000+ successful graduates",
    "200+ hiring partner companies",
    "15+ years of training excellence",
    "24/7 student support system"
  ];

  return (
    <PageWrapper>
      <Helmet>
        <title>About Us | Clarifox</title>
        <meta name="description" content="Learn about Clarifox, our mission, our values, and our expert team led by CEO Sreekanth Reddy Chintha. Discover how we transform careers." />
      </Helmet>

      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              About Clarifox
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the way in professional training and career development. We bridge the gap between education and industry requirements.
            </p>
          </motion.div>

          {/* CEO Section */}
          <section className="mb-24">
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
                <h2 className="text-3xl font-bold text-foreground">A Message from Our CEO</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "At Clarifox, our mission is simple: to empower every student with the skills and confidence to achieve their dream career. With over 5 years of dedicated experience in placing countless students, I've seen firsthand how the right training can transform lives. We are committed to your success, providing not just education, but a pathway to a brighter future."
                </p>
                <div>
                  <p className="text-xl font-semibold text-foreground">Sreekanth Reddy Chintha</p>
                  <p className="gradient-text font-medium">CEO, Clarifox</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Mission and Vision */}
          <section className="mb-24 bg-secondary p-12 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Transforming Careers Through Excellence
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Clarifox, we believe that quality education is the foundation of a successful career. Our comprehensive training programs are designed to meet the evolving demands of the technology industry.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With a perfect blend of theoretical knowledge and practical application, we prepare our students not just to find jobs, but to excel and become industry leaders.
                </p>
                <div className="space-y-4 pt-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-lg">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img  
                  className="rounded-2xl w-full h-auto object-cover shadow-2xl shadow-accent/20"
                  alt="Clarifox training facility"
                  src="https://images.unsplash.com/photo-1643199121319-b3b5695e4acb" />
              </motion.div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 text-center hover:border-primary transition-all duration-300 border"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-secondary rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of successful professionals who started their journey with Clarifox.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white pulse-glow">
                <NavLink to="/contact">Get Started Today</NavLink>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;