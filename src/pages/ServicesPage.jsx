import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import { Briefcase, Users, Building, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Individual Training",
      description: "Our core offering. We provide in-depth, hands-on training in a wide range of IT and Non-IT subjects to prepare you for the job market. Our curriculum is constantly updated to match industry demands.",
      features: ["Expert-led live classes", "Hands-on projects", "Personalized mentorship", "Flexible schedules"]
    },
    {
      icon: Building,
      title: "Corporate Training",
      description: "Upskill your workforce with our customized corporate training programs. We partner with companies to deliver targeted training that boosts productivity and innovation.",
      features: ["Customized curriculum", "On-site or remote delivery", "Scalable for teams of any size", "Post-training support"]
    },
    {
      icon: Users,
      title: "Placement Services",
      description: "Our commitment to you doesn't end with the course. We offer dedicated placement support to help you land your dream job, from resume building to mock interviews.",
      features: ["Resume & portfolio building", "Mock interviews", "Exclusive job portal access", "Strong industry connections"]
    }
  ];

  return (
    <PageWrapper>
      <Helmet>
        <title>Our Services | Clarifox</title>
        <meta name="description" content="Explore the services offered by Clarifox, including individual training, corporate training programs, and dedicated job placement services." />
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
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for individuals and businesses to thrive in the digital age.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8 flex flex-col"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-auto border-primary text-primary hover:bg-primary hover:text-white">
                  <NavLink to="/contact">
                    Enquire Now <ArrowRight className="ml-2 w-4 h-4" />
                  </NavLink>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-24"
          >
            <div className="bg-secondary rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Let's Build Your Future Together
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Whether you're an individual looking to launch a new career or a company aiming to empower your team, we have the right solution for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white pulse-glow">
                  <NavLink to="/courses">Explore Our Courses</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <NavLink to="/contact">Contact Sales</NavLink>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ServicesPage;