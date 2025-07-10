"use server";

import { rewriteCoverLetter } from '@/ai/flows/cover-letter-rewriter';
import type { RewriteCoverLetterInput } from '@/ai/flows/cover-letter-rewriter';

export async function handleRewrite(input: RewriteCoverLetterInput): Promise<{
  rewrittenSection?: string;
  error?: string;
}> {
  try {
    const result = await rewriteCoverLetter(input);
    return { rewrittenSection: result.rewrittenSection };
  } catch (e) {
    console.error("AI rewrite failed:", e);
    const errorMessage = e instanceof Error ? e.message : "An unexpected error occurred during the AI rewrite process.";
    return { error: errorMessage };
  }
}
