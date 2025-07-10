'use server';
/**
 * @fileOverview An AI agent that rewrites sections of a cover letter to tailor it to specific job descriptions.
 *
 * - rewriteCoverLetter - A function that handles the cover letter rewriting process.
 * - RewriteCoverLetterInput - The input type for the rewriteCoverLetter function.
 * - RewriteCoverLetterOutput - The return type for the rewriteCoverLetter function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewriteCoverLetterInputSchema = z.object({
  coverLetterSection: z
    .string()
    .describe('The section of the cover letter to rewrite.'),
  jobDescription: z.string().describe('The job description to tailor the cover letter section to.'),
});
export type RewriteCoverLetterInput = z.infer<typeof RewriteCoverLetterInputSchema>;

const RewriteCoverLetterOutputSchema = z.object({
  rewrittenSection: z.string().describe('The rewritten section of the cover letter.'),
});
export type RewriteCoverLetterOutput = z.infer<typeof RewriteCoverLetterOutputSchema>;

export async function rewriteCoverLetter(input: RewriteCoverLetterInput): Promise<RewriteCoverLetterOutput> {
  return rewriteCoverLetterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rewriteCoverLetterPrompt',
  input: {schema: RewriteCoverLetterInputSchema},
  output: {schema: RewriteCoverLetterOutputSchema},
  prompt: `You are an expert at writing cover letters. You will rewrite the provided cover letter section to be tailored to the job description provided.

Cover Letter Section: {{{coverLetterSection}}}

Job Description: {{{jobDescription}}}

Rewrite the cover letter section to be more tailored to the job description. Focus on highlighting skills and experiences that are relevant to the job description.`,
});

const rewriteCoverLetterFlow = ai.defineFlow(
  {
    name: 'rewriteCoverLetterFlow',
    inputSchema: RewriteCoverLetterInputSchema,
    outputSchema: RewriteCoverLetterOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
