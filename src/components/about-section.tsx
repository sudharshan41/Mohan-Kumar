import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, GitMerge, Figma, Wind, Database, Smartphone } from "lucide-react";

const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-cyan-500">
    <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="10" ry="4.5"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

const NextJsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 128 128" className="w-4 h-4">
        <path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm30.6 100.2L65.8 44.4h-7.2v39.2h-9V44.4H42.4V34.6h38.2l26.2 55.6H94.6z"></path>
    </svg>
);

const skills = [
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextJsIcon },
  { name: "TypeScript", icon: Code },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Figma", icon: Figma },
  { name: "Git & GitHub", icon: GitMerge },
  { name: "SQL & NoSQL", icon: Database },
  { name: "Responsive Design", icon: Smartphone },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">About Me</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            A passionate developer and designer with a knack for creating engaging user experiences.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3 space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              I am a creative and detail-oriented professional with a strong foundation in web development and user interface design. My journey in tech began with a curiosity for how things work, which quickly evolved into a passion for building elegant and efficient solutions to complex problems.
            </p>
            <p>
              With experience in both frontend and backend technologies, I enjoy bringing ideas to life, from the initial wireframes in Figma to a fully deployed application. I thrive in collaborative environments and am always eager to learn new skills and technologies to stay at the forefront of the industry.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new hiking trails, experimenting with new recipes in the kitchen, or getting lost in a good book.
            </p>
          </div>
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">My Skillset</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill.name} variant="outline" className="py-2 px-3 text-sm">
                      <skill.icon className="mr-2 h-4 w-4" />
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
