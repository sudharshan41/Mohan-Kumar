import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "Email", icon: Mail, url: "mailto:hello@example.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/yourprofile" },
  { name: "GitHub", icon: Github, url: "https://github.com/yourprofile" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mt-4">
            I&apos;m currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out. Let&apos;s create something amazing together!
          </p>
          <div className="mt-8 flex justify-center gap-4">
            {socialLinks.map((link) => (
              <Button key={link.name} asChild variant="outline" size="icon" className="w-12 h-12 rounded-full">
                <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-6 w-6" />
                </Link>
              </Button>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild size="lg" variant="accent">
              <a href="mailto:hello@example.com">
                Send me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
