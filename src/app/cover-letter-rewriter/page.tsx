import Header from '@/components/header';
import RewriterForm from './rewriter-form';
import Footer from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CoverLetterRewriterPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">
                AI Cover Letter Rewriter
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground pt-2">
                Paste a section of your cover letter and the target job description to get an AI-powered rewrite tailored to the role.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RewriterForm />
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
