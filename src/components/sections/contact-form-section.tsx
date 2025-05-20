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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(50, "Name must be 50 characters or less."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must be 500 characters or less."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Mock server action
async function submitContactForm(data: ContactFormValues): Promise<{ success: boolean; message: string }> {
  console.log("Form data submitted:", data);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  // Simulate random success/failure
  if (Math.random() > 0.2) {
    return { success: true, message: "Your message has been sent successfully! We'll be in touch soon." };
  } else {
    return { success: false, message: "Something went wrong. Please try again later." };
  }
}


export default function ContactFormSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16">
      <Card className="max-w-2xl mx-auto bg-card text-card-foreground shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">Get In Touch</CardTitle>
          <CardDescription className="text-card-foreground/80">
            Have a project in mind or just want to say hi? Fill out the form below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-card-foreground/90">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-background/50 border-border focus:bg-background text-foreground placeholder:text-muted-foreground" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-card-foreground/90">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background/50 border-border focus:bg-background text-foreground placeholder:text-muted-foreground" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-card-foreground/90">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project or inquiry..."
                        rows={5}
                        {...field}
                        className="bg-background/50 border-border focus:bg-background text-foreground placeholder:text-muted-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Send className="mr-2 h-4 w-4" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
