import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsPage = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    { id: 1, name: "Sarah Johnson", role: "Frontend Developer at Google", course: "React JS Development", rating: 5, text: "Clarifox transformed my career completely! The React course was comprehensive and the instructors were incredibly supportive. I landed my dream job at Google within 2 months of completing the program.", image: "images/doctor_1.svg" },
    { id: 2, name: "Michael Chen", role: "Python Developer at Microsoft", course: "Python Programming", rating: 5, text: "The Python course at Clarifox exceeded my expectations. The hands-on projects and real-world applications prepared me perfectly for my role at Microsoft. The career support was outstanding!", image: "images/doctor_2.svg" },
    { id: 3, name: "Emily Rodriguez", role: "Full Stack Developer at Amazon", course: "Full Stack Development", rating: 5, text: "I came to Clarifox with no programming background, and now I'm working as a Full Stack Developer at Amazon. The structured curriculum and mentorship program made all the difference.", image: "images/doctor_3.svg" },
    { id: 4, name: "David Thompson", role: "Database Administrator at Oracle", course: "SQLite Database", rating: 5, text: "The database course was incredibly detailed and practical. The instructors' industry experience really showed, and the job placement support helped me secure a position at Oracle.", image: "images/doctor_4.svg" },
  ];

  const next = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  const prev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1);

  return (
    <PageWrapper>
      <Helmet>
        <title>Testimonials | Clarifox</title>
        <meta name="description" content="Read success stories from Clarifox graduates who have landed their dream jobs at top tech companies. See what our students have to say about our training." />
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
              Student Success Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our graduates who have transformed their careers and achieved their dreams with Clarifox.
            </p>
          </motion.div>

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${current * 100}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {testimonials.map((t) => (
                  <div key={t.id} className="flex-shrink-0 w-full">
                    <div className="testimonial-card rounded-2xl p-8 md:p-12 text-center bg-secondary">
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary">
                        <img   className="w-full h-full object-cover" alt={t.name} src={t.image} />
                      </div>
                      <div className="flex justify-center mb-4">
                        {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
                      </div>
                      <blockquote className="text-lg md:text-xl text-foreground font-medium leading-relaxed mb-6">
                        <Quote className="w-8 h-8 text-primary/50 inline-block mr-2" />
                        {t.text}
                      </blockquote>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{t.name}</h3>
                        <p className="text-primary font-medium">{t.role}</p>
                        <p className="text-muted-foreground text-sm">Graduate of {t.course}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <Button onClick={prev} variant="outline" size="icon" className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/50 border-border text-foreground hover:bg-background">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button onClick={next} variant="outline" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/50 border-border text-foreground hover:bg-background">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Grid of all testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="testimonial-card rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary">
                    <img   className="w-full h-full object-cover" alt={testimonial.name} src={testimonial.image} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                    <p className="text-primary text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-muted-foreground text-sm line-clamp-4">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TestimonialsPage;