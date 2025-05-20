import BioGeneratorForm from '@/components/bio-generator-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function BioGeneratorPage() {
  return (
    <div className="py-12">
      <Card className="max-w-3xl mx-auto bg-card text-card-foreground shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center mb-4">
            <Sparkles className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-4xl font-bold">AI-Powered Bio Generator</CardTitle>
          <CardDescription className="text-card-foreground/80 text-lg mt-2">
            Craft a compelling personal statement or summary. Provide your keywords, experiences, and optional context, and let our AI weave them into an engaging narrative.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BioGeneratorForm />
        </CardContent>
      </Card>
    </div>
  );
}
