import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">My Work</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Currently working at HR Recruiter.
          </p>
        </div>
        {/* Project cards have been removed as per your request */}
        <div className="mt-16 text-center">
          <Button asChild size="lg" variant="accent">
            <a href="/MK@24.pdf" download="MK@24.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
