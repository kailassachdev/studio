'use server';

import { generateBio, type GenerateBioInput, type GenerateBioOutput } from '@/ai/flows/generate-bio';
import { z } from 'zod';

const GenerateBioActionInputSchema = z.object({
  keywords: z.string().min(1, "Keywords are required."),
  experiences: z.string().min(1, "Experiences are required."),
  context: z.string().optional(),
});

export async function generateBioAction(
  input: z.infer<typeof GenerateBioActionInputSchema>
): Promise<{ success: boolean; data?: GenerateBioOutput; error?: string }> {
  const validatedInput = GenerateBioActionInputSchema.safeParse(input);

  if (!validatedInput.success) {
    return { success: false, error: validatedInput.error.errors.map(e => e.message).join(', ') };
  }

  try {
    const result = await generateBio(validatedInput.data as GenerateBioInput);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error generating bio:", error);
    return { success: false, error: "Failed to generate bio. Please try again." };
  }
}
