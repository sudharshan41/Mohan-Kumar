import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline text-primary tracking-tighter">
              Hi, I&apos;m an MOHAN KUMAR H, HR Recruiter 
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in managing financial operations and human resources to ensure organizational efficiency and growth. With a passion for accuracy and team development, I help businesses thrive.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl w-full max-w-sm lg:max-w-md">
              <Image
                src="/pic.jpg"
                alt="Professional photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="accent">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
