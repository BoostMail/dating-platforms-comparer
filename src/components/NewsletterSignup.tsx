
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import AnimatedSection from './AnimatedSection';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      toast({
        title: "Anmeldung erfolgreich!",
        description: "Vielen Dank für Ihre Anmeldung. Sie erhalten bald exklusive Dating-Tipps und Angebote.",
      });
      
      // Reset success state after some time
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1000);
  };
  
  return (
    <div className="bg-muted/40 rounded-lg border border-border p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
          <Mail className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium text-lg">Dating-Tipps & Angebote</h3>
          <p className="text-sm text-muted-foreground">Erhalten Sie exklusive Tipps und Rabatte</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Ihre E-Mail-Adresse"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
            disabled={isSubmitting || isSuccess}
          />
          <Button 
            type="submit" 
            disabled={isSubmitting || isSuccess}
            className={isSuccess ? "bg-green-600 hover:bg-green-700" : ""}
          >
            {isSuccess ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Gesendet
              </>
            ) : isSubmitting ? (
              "Wird gesendet..."
            ) : (
              "Anmelden"
            )}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Wir respektieren Ihre Privatsphäre. Sie können sich jederzeit abmelden.
        </p>
      </form>
    </div>
  );
};

export default NewsletterSignup;
