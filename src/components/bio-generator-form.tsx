"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { generateBioAction } from "@/app/actions/generateBioAction";
import type { GenerateBioOutput } from "@/ai/flows/generate-bio";
import { Loader2, Wand2 } from "lucide-react";

const bioFormSchema = z.object({
  keywords: z.string().min(3, "Please provide some keywords (e.g., innovative, leadership, creative)."),
  experiences: z.string().min(20, "Describe your experiences in at least 20 characters."),
  context: z.string().optional(),
});

type BioFormValues = z.infer<typeof bioFormSchema>;

export default function BioGeneratorForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedBio, setGeneratedBio] = useState<GenerateBioOutput | null>(null);

  const form = useForm<BioFormValues>({
    resolver: zodResolver(bioFormSchema),
    defaultValues: {
      keywords: "",
      experiences: "",
      context: "",
    },
  });

  async function onSubmit(data: BioFormValues) {
    setIsSubmitting(true);
    setGeneratedBio(null);
    try {
      const result = await generateBioAction(data);
      if (result.success && result.data) {
        setGeneratedBio(result.data);
        toast({
          title: "Bio Generated!",
          description: "Your AI-enhanced bio is ready below.",
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to generate bio.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="keywords"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-card-foreground/90 text-lg">Keywords</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., innovative, leadership, problem-solver, web development" {...field} className="bg-background/50 border-border focus:bg-background text-foreground placeholder:text-muted-foreground" />
                </FormControl>
                <FormDescription className="text-muted-foreground">
                  Comma-separated keywords that best describe you or your skills.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experiences"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-card-foreground/90 text-lg">Experiences</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your key experiences, achievements, and relevant history. The more detail, the better!"
                    rows={6}
                    {...field}
                    className="bg-background/50 border-border focus:bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </FormControl>
                 <FormDescription className="text-muted-foreground">
                  Share your journey, accomplishments, and what makes you unique.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="context"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-card-foreground/90 text-lg">Context (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., LinkedIn summary, conference speaker intro, personal website" {...field} className="bg-background/50 border-border focus:bg-background text-foreground placeholder:text-muted-foreground" />
                </FormControl>
                <FormDescription className="text-muted-foreground">
                  Where will this bio be used? This helps tailor the tone and focus.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-5 w-5" />
            )}
            {isSubmitting ? "Generating..." : "Generate My Bio"}
          </Button>
        </form>
      </Form>

      {generatedBio && (
        <div className="mt-12 p-6 border border-dashed border-accent rounded-lg bg-background/30">
          <h3 className="text-2xl font-semibold mb-4 text-accent">Your Luminous Bio:</h3>
          <Textarea
            readOnly
            value={generatedBio.bio}
            rows={8}
            className="bg-background/50 border-border focus:bg-background text-foreground placeholder:text-muted-foreground w-full text-base leading-relaxed"
          />
           <Button 
            onClick={() => {
              navigator.clipboard.writeText(generatedBio.bio);
              toast({ title: "Copied!", description: "Bio copied to clipboard." });
            }}
            variant="outline"
            className="mt-4 border-accent text-accent hover:bg-accent/10"
            >
            Copy Bio
          </Button>
        </div>
      )}
    </>
  );
}
