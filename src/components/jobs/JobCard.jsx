import React from 'react';
import { MapPin, Building, Clock, DollarSign, Edit, Trash2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth.jsx';
import { useToast } from '@/components/ui/use-toast';

const JobCard = ({ job, onEdit, onDelete }) => {
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  const handleApply = () => {
    if (job.applyUrl && job.applyUrl !== '#') {
      window.open(job.applyUrl, '_blank');
    } else {
      toast({
        title: "🚧 Feature In Progress",
        description: `Application for ${job.title} is not available online. Please contact us.`,
      });
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <Card className="job-card h-full flex flex-col bg-card text-card-foreground">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-xl text-foreground mb-2">{job.title}</CardTitle>
            <div className="flex items-center text-primary mb-2">
              <Building className="w-4 h-4 mr-2" />
              <span className="font-medium">{job.company}</span>
            </div>
          </div>
          {isAuthenticated && (
            <div className="flex space-x-2">
              <Button size="icon" variant="ghost" onClick={() => onEdit(job)} className="text-muted-foreground hover:text-foreground">
                <Edit className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" onClick={() => onDelete(job.id)} className="text-muted-foreground hover:text-destructive">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{job.location}</div>
          <div className="flex items-center"><Clock className="w-4 h-4 mr-2" />{job.type}</div>
          <div className="flex items-center"><DollarSign className="w-4 h-4 mr-2" />{job.salary}</div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{job.description}</p>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-border">
          <span className="text-xs text-muted-foreground">Posted: {formatDate(job.postedDate)}</span>
          <Button onClick={handleApply} size="sm" className="bg-gradient-to-r from-primary to-accent text-white">
            Apply Now
            {job.applyUrl && job.applyUrl !== '#' && <ExternalLink className="w-4 h-4 ml-2" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;