
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowRight } from 'lucide-react';
import platforms from '@/utils/platformData';
import { useToast } from '@/components/ui/use-toast';

const questions = [
  {
    id: 'age',
    question: 'Welche Altersgruppe entspricht Ihnen?',
    options: [
      { id: '40-50', label: '40-50 Jahre' },
      { id: '50-60', label: '50-60 Jahre' },
      { id: '60+', label: '60+ Jahre' }
    ]
  },
  {
    id: 'goal',
    question: 'Wonach suchen Sie hauptsächlich?',
    options: [
      { id: 'serious', label: 'Langfristige Beziehung' },
      { id: 'dating', label: 'Casual Dating' },
      { id: 'friendship', label: 'Freundschaft und mehr' }
    ]
  },
  {
    id: 'budget',
    question: 'Welches Budget haben Sie monatlich für eine Dating-Plattform?',
    options: [
      { id: 'low', label: 'Bis 20€' },
      { id: 'medium', label: '20-40€' },
      { id: 'high', label: '40€+' }
    ]
  }
];

const QuizModal = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  const handleAnswer = (questionId: string, answerId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };
  
  const goToNextStep = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateResult();
    }
  };
  
  const calculateResult = () => {
    // Simple algorithm to match answers with platforms
    let bestMatch = '';
    
    // Age preference
    if (answers.age === '60+') {
      bestMatch = 'silbersingles';
    } else if (answers.age === '50-60') {
      bestMatch = 'zweisam';
    } else {
      // Budget based matching
      if (answers.budget === 'high') {
        bestMatch = answers.goal === 'serious' ? 'parship' : 'elitepartner';
      } else if (answers.budget === 'medium') {
        bestMatch = 'zweisam';
      } else {
        bestMatch = 'bildkontakte';
      }
    }
    
    setResult(bestMatch);
    
    // Show toast
    toast({
      title: "Ihr persönlicher Match!",
      description: `Basierend auf Ihren Antworten haben wir die perfekte Plattform für Sie gefunden.`,
    });
  };
  
  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };
  
  const closeDialog = () => {
    setOpen(false);
    setTimeout(resetQuiz, 300);
  };
  
  const currentQuestion = questions[step];
  const getBestMatchPlatform = () => platforms.find(p => p.id === result);
  const bestMatchPlatform = getBestMatchPlatform();
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="hover:bg-muted/50 bg-white dark:bg-black border-primary text-primary hover:text-primary hover:border-primary">
          Finden Sie Ihre perfekte Plattform
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {!result ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif">{currentQuestion.question}</DialogTitle>
              <DialogDescription>
                Beantworten Sie diese kurzen Fragen, um Ihre ideale Dating-Plattform zu finden.
              </DialogDescription>
            </DialogHeader>
            
            <div className="py-4">
              <RadioGroup value={answers[currentQuestion.id] || ''} onValueChange={(value) => handleAnswer(currentQuestion.id, value)}>
                {currentQuestion.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2 py-2">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id} className="cursor-pointer">{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-muted-foreground">
                Frage {step + 1} von {questions.length}
              </span>
              
              <Button 
                onClick={goToNextStep} 
                disabled={!answers[currentQuestion.id]}
                className="ml-auto"
              >
                {step === questions.length - 1 ? 'Ergebnis anzeigen' : 'Weiter'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-center">Ihre perfekte Match!</DialogTitle>
              <DialogDescription className="text-center">
                Basierend auf Ihren Antworten empfehlen wir:
              </DialogDescription>
            </DialogHeader>
            
            <div className="py-6 flex flex-col items-center justify-center">
              {bestMatchPlatform && (
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-secondary/30 rounded-full p-2 mb-4 flex items-center justify-center">
                    <img 
                      src={bestMatchPlatform.logo} 
                      alt={bestMatchPlatform.name} 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{bestMatchPlatform.name}</h3>
                  <div className="flex justify-center mb-3">
                    {Array.from({ length: Math.floor(bestMatchPlatform.rating) }).map((_, i) => (
                      <span key={i} className="text-amber-500">★</span>
                    ))}
                    {bestMatchPlatform.rating % 1 > 0 && <span className="text-amber-500">☆</span>}
                  </div>
                  <p className="text-sm mb-4 max-w-xs mx-auto text-muted-foreground">
                    {bestMatchPlatform.description.substring(0, 120)}...
                  </p>
                  <div className="space-y-2">
                    {bestMatchPlatform.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <DialogFooter className="flex-col sm:flex-col gap-3">
              <a href={`https://${result}.de`} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full">
                  Jetzt kostenlos testen
                </Button>
              </a>
              <Button variant="outline" onClick={resetQuiz} className="w-full">
                Quiz neu starten
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuizModal;
