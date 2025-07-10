import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Working with them was an absolute pleasure. Their attention to detail and commitment to quality is unparalleled. They delivered a product that exceeded all our expectations.",
    name: "Jane Doe",
    title: "CEO, Tech Solutions Inc.",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "woman portrait"
  },
  {
    quote: "Their design sense is incredible. They transformed our outdated interface into a modern, user-friendly experience that our customers love. Highly recommended!",
    name: "John Smith",
    title: "Product Manager, Innovate Co.",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "man portrait"
  },
  {
    quote: "A true professional and a talented developer. They are a problem-solver who can tackle any challenge thrown their way. A valuable asset to any team.",
    name: "Emily White",
    title: "Lead Engineer, DevWorks",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "woman professional"
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">What Others Say</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            Testimonials from colleagues and clients I&apos;ve worked with.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center text-center justify-center p-6 gap-4">
                      <p className="italic text-foreground/80">&quot;{testimonial.quote}&quot;</p>
                      <div className="flex items-center gap-4 mt-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint}/>
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
