import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.15 14.24c-.18-.28-.66-1.32-1.3-1.6-.64-.28-1.11-.28-1.29-.18s-.66.66-.84 1.11c-.18.46-.37.55-.66.28-.28-.28-1.2-1.11-2.28-2.19-.84-.84-1.48-1.85-1.66-2.19-.18-.37-.02-.55.16-.73.17-.17.37-.46.55-.64.18-.18.28-.37.18-.64s-.66-1.57-.93-2.19c-.28-.64-.55-.55-.73-.55h-.55c-.18 0-.46.09-.73.37-.28.28-.93.93-1.11 2.19s-.18 2.59.09 3.51c.28.93 1.11 2.49 2.68 4.05 1.57 1.57 2.96 2.03 4.14 2.19 1.18.18 2.28.09 3.05-.37.78-.46 1.38-1.38 1.57-1.85.18-.46.09-.84-.09-1.11z" />
  </svg>
);


const socialLinks = [
  { name: "Email", icon: Mail, url: "mailto:mohankumarh278@gmail.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/mohankumar-h-0279192a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "GitHub", icon: Github, url: "https://github.com/yourprofile" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/mohan.gowda.dee?igsh=bG9paHExcmVyZWM2" },
  { name: "WhatsApp", icon: WhatsAppIcon, url: "https://wa.me/yournumber" },
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
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
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
              <a href="mailto:mohankumarh278@gmail.com">
                Send me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
