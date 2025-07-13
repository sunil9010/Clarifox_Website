import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import { Code, Database, Globe, Smartphone, Server, Zap, Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { NavLink } from 'react-router-dom';

const CoursesPage = () => {
  const { toast } = useToast();

  const courses = [
    { id: 1, title: "Python Programming", icon: Code, duration: "3 months", students: "1200+", rating: 4.9, description: "Master Python from basics to advanced concepts including web development, data science, and automation.", level: "Beginner to Advanced", price: "$299" },
    { id: 2, title: "HTML & CSS", icon: Globe, duration: "2 months", students: "2000+", rating: 4.8, description: "Build responsive and modern websites with HTML5, CSS3, and modern layout techniques.", level: "Beginner", price: "$199" },
    { id: 3, title: "JavaScript Mastery", icon: Zap, duration: "4 months", students: "1500+", rating: 4.9, description: "Become proficient in JavaScript, from fundamentals to advanced concepts and modern ES6+ features.", level: "Beginner to Intermediate", price: "$349" },
    { id: 4, title: "SQLite Database", icon: Database, duration: "2 months", students: "800+", rating: 4.7, description: "Learn database design, SQL queries, and database management with SQLite.", level: "Beginner to Intermediate", price: "$249" },
    { id: 5, title: "React JS Development", icon: Smartphone, duration: "5 months", students: "1100+", rating: 4.9, description: "Build dynamic and interactive web applications using React.js and modern development practices.", level: "Intermediate", price: "$449" },
    { id: 6, title: "Node.js Backend", icon: Server, duration: "4 months", students: "900+", rating: 4.8, description: "Master server-side development with Node.js, Express, and database integration.", level: "Intermediate to Advanced", price: "$399" }
  ];

  const handleEnrollClick = (courseName) => {
    toast({
      title: "🚧 Feature In Progress",
      description: `Enrollment for ${courseName} is not yet available online. Please contact us for details.`,
    });
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>Our Courses | Clarifox</title>
        <meta name="description" content="Explore our wide range of expert-led IT and Non-IT courses, including Python, React, JavaScript, and more. Find the perfect course to launch your career." />
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
              Our Training Courses
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs designed to make you industry-ready with hands-on projects and expert guidance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="course-card rounded-2xl p-6 group flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                    <course.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{course.title}</h2>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{course.duration}</span>
                      <span className="flex items-center"><Users className="w-4 h-4 mr-1" />{course.students}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                    ))}
                  </div>
                  <span className="text-foreground font-semibold ml-2">{course.rating}</span>
                </div>
                <p className="text-muted-foreground mb-4 flex-grow">{course.description}</p>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{course.level}</span>
                  <span className="text-2xl font-bold text-foreground">{course.price}</span>
                </div>
                <Button
                  onClick={() => handleEnrollClick(course.title)}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 transition-all duration-300 mt-auto"
                >
                  Enroll Now
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-24"
          >
            <div className="bg-secondary rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Not Sure Which Course to Choose?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get personalized course recommendations based on your career goals and current skill level.
              </p>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <NavLink to="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </NavLink>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CoursesPage;