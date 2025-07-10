"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { handleRewrite } from "./actions";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

const formSchema = z.object({
  coverLetterSection: z.string().min(50, {
    message: "Cover letter section must be at least 50 characters.",
  }),
  jobDescription: z.string().min(50, {
    message: "Job description must be at least 50 characters.",
  }),
});

export default function RewriterForm() {
  const [isPending, startTransition] = useTransition();
  const [rewrittenText, setRewrittenText] = useState("");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coverLetterSection: "",
      jobDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setRewrittenText("");
    startTransition(async () => {
      const result = await handleRewrite(values);
      if (result.error) {
        toast({
          variant: "destructive",
          title: "An error occurred",
          description: result.error,
        });
      } else if (result.rewrittenSection) {
        setRewrittenText(result.rewrittenSection);
        toast({
          title: "Success!",
          description: "Your cover letter has been rewritten.",
        });
      }
    });
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="coverLetterSection"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Your Cover Letter Section</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste a paragraph from your cover letter here..."
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Target Job Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste the relevant parts of the job description here..."
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending} size="lg" variant="accent">
            {isPending ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-5 w-5" />
            )}
            Rewrite with AI
          </Button>
        </form>
      </Form>

      {(isPending || rewrittenText) && (
        <Card className="mt-8 bg-secondary">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">
              AI-Powered Result
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none text-foreground/90 whitespace-pre-wrap font-body">
            {isPending ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : (
              rewrittenText
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
