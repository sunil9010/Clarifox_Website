import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import { Plus, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth.jsx';
import { useToast } from '@/components/ui/use-toast';
import JobCard from '@/components/jobs/JobCard';
import JobFormDialog from '@/components/jobs/JobFormDialog';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const savedJobs = localStorage.getItem('clarifox_jobs');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    } else {
      const defaultJobs = [
        { id: 1, title: "Frontend Developer", company: "TechCorp Solutions", location: "New York, NY", type: "Full-time", salary: "$70,000 - $90,000", description: "Join our innovative team to build cutting-edge user interfaces for our flagship products.", requirements: "React, TypeScript, TailwindCSS", applyUrl: "#", postedDate: new Date().toISOString() },
        { id: 2, title: "Python Developer", company: "DataFlow Inc", location: "San Francisco, CA", type: "Full-time", salary: "$80,000 - $110,000", description: "Work on complex data pipelines and machine learning models that power our analytics platform.", requirements: "Python, Django, AWS", applyUrl: "#", postedDate: new Date().toISOString() },
        { id: 3, title: "Full Stack Developer", company: "Innovation Labs", location: "Austin, TX", type: "Contract", salary: "$60 - $80/hour", description: "Develop and maintain both client-side and server-side applications for a variety of projects.", requirements: "Node.js, React, SQL", applyUrl: "#", postedDate: new Date().toISOString() }
      ];
      setJobs(defaultJobs);
      localStorage.setItem('clarifox_jobs', JSON.stringify(defaultJobs));
    }
  }, []);

  useEffect(() => {
    if (jobs.length > 0) {
      localStorage.setItem('clarifox_jobs', JSON.stringify(jobs));
    }
  }, [jobs]);

  const handleSaveJob = (jobData) => {
    if (editingJob) {
      setJobs(jobs.map(job => job.id === editingJob.id ? { ...jobData, id: editingJob.id, postedDate: editingJob.postedDate } : job));
      toast({ title: "Job Updated", description: "Job posting has been successfully updated." });
    } else {
      const newJob = { ...jobData, id: Date.now(), postedDate: new Date().toISOString() };
      setJobs([newJob, ...jobs]);
      toast({ title: "Job Added", description: "New job posting has been successfully added." });
    }
    setEditingJob(null);
    setIsFormOpen(false);
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setIsFormOpen(true);
  };

  const handleDelete = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId));
    toast({ title: "Job Deleted", description: "Job posting has been successfully deleted." });
  };

  const handleAddNew = () => {
    setEditingJob(null);
    setIsFormOpen(true);
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>Job Openings | Clarifox</title>
        <meta name="description" content="Find your next career opportunity. Explore exclusive job openings from Clarifox's network of hiring partners." />
      </Helmet>

      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Job Openings
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover exciting career opportunities from our partner companies. Your dream job awaits!
            </p>
          </motion.div>

          {isAuthenticated && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex justify-end"
            >
              <Button onClick={handleAddNew} className="bg-gradient-to-r from-primary to-accent text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add New Job
              </Button>
            </motion.div>
          )}

          <JobFormDialog
            isOpen={isFormOpen}
            setIsOpen={setIsFormOpen}
            onSave={handleSaveJob}
            job={editingJob}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <JobCard job={job} onEdit={handleEdit} onDelete={handleDelete} />
              </motion.div>
            ))}
          </div>

          {jobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <div className="bg-secondary rounded-2xl p-12 max-w-2xl mx-auto">
                <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  No Job Openings Available
                </h2>
                <p className="text-muted-foreground mb-6">
                  We're currently updating our job listings. Check back soon for new opportunities!
                </p>
                {isAuthenticated && (
                  <Button onClick={handleAddNew} className="bg-gradient-to-r from-primary to-accent text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add First Job
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default JobsPage;