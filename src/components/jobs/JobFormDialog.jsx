import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const JobFormDialog = ({ isOpen, setIsOpen, onSave, job }) => {
  const [formData, setFormData] = useState({
    title: '', company: '', location: '', type: '', salary: '',
    description: '', requirements: '', applyUrl: ''
  });

  useEffect(() => {
    if (job) {
      setFormData(job);
    } else {
      setFormData({
        title: '', company: '', location: '', type: '', salary: '',
        description: '', requirements: '', applyUrl: ''
      });
    }
  }, [job, isOpen]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card text-card-foreground">
        <DialogHeader>
          <DialogTitle className="gradient-text text-2xl">
            {job ? 'Edit Job Posting' : 'Add New Job Posting'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Job Title</Label>
              <Input id="title" name="title" value={formData.title} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" value={formData.company} onChange={handleInputChange} required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" value={formData.location} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="type">Job Type</Label>
              <Input id="type" name="type" value={formData.type} onChange={handleInputChange} placeholder="e.g., Full-time" required />
            </div>
          </div>
          <div>
            <Label htmlFor="salary">Salary Range</Label>
            <Input id="salary" name="salary" value={formData.salary} onChange={handleInputChange} placeholder="e.g., $70,000 - $90,000" required />
          </div>
          <div>
            <Label htmlFor="description">Job Description</Label>
            <Textarea id="description" name="description" value={formData.description} onChange={handleInputChange} rows={4} required />
          </div>
          <div>
            <Label htmlFor="requirements">Requirements</Label>
            <Textarea id="requirements" name="requirements" value={formData.requirements} onChange={handleInputChange} rows={3} required />
          </div>
          <div>
            <Label htmlFor="applyUrl">Application URL</Label>
            <Input id="applyUrl" name="applyUrl" type="url" value={formData.applyUrl} onChange={handleInputChange} placeholder="https://company.com/apply" />
          </div>
          <DialogFooter className="pt-4">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button type="submit" className="bg-gradient-to-r from-primary to-accent text-white">{job ? 'Update Job' : 'Add Job'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobFormDialog;