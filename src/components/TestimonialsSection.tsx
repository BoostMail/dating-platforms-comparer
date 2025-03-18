
import React from 'react';
import { UserRound, Quote } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const testimonials = [
  {
    id: 1,
    name: 'Sabine, 54',
    platform: 'Parship',
    text: 'Nach meiner Scheidung dachte ich, dass ich nie wieder jemanden finden würde. Dank Parship habe ich meinen neuen Partner Thomas kennengelernt. Wir sind jetzt seit 2 Jahren zusammen!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael, 63',
    platform: 'ElitePartner',
    text: 'Als Witwer war der Gedanke ans Dating beängstigend. ElitePartner hat mir geholfen, Frauen zu treffen, die meine Interessen teilen. Die Plattform ist seriös und die Qualität der Profile ist hervorragend.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Andrea, 47',
    platform: 'Zweisam',
    text: 'Die einfache Bedienung hat mich überzeugt. Nach nur 3 Monaten habe ich jemanden getroffen, mit dem ich jetzt eine wunderbare Beziehung führe.',
    rating: 4,
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-container py-16">
      <AnimatedSection className="text-center mb-12">
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
          Erfolgsgeschichten
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-balance">
          Was unsere Nutzer sagen
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-balance">
          Echte Erfahrungen von Menschen, die über 40+ Dating-Plattformen ihren Partner gefunden haben.
        </p>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {testimonials.map((testimonial) => (
          <AnimatedSection 
            key={testimonial.id}
            className="bg-white/40 dark:bg-black/40 backdrop-blur-md border border-border rounded-lg p-6 shadow-sm"
            delay={testimonial.id * 100}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                  <UserRound className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">Nutzer von {testimonial.platform}</p>
                </div>
              </div>
              <div className="text-amber-500">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Quote className="absolute top-0 left-0 h-6 w-6 text-primary/20 -translate-x-2 -translate-y-2" />
              <p className="text-muted-foreground pl-3 italic">
                "{testimonial.text}"
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
