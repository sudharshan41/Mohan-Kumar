import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Speech, Handshake, BrainCircuit, ClipboardList, PenSquare, ThumbsUp, Search, BarChart, PieChart, AreaChart } from "lucide-react";

const skills = [
  { name: "Communication", icon: Speech },
  { name: "Interpersonal Skills", icon: Handshake },
  { name: "Analytical Thinking", icon: BrainCircuit },
  { name: "Project Management", icon: ClipboardList },
  { name: "Content Creation", icon: PenSquare },
  { name: "Social Media Management", icon: ThumbsUp },
  { name: "SEO", icon: Search },
  { name: "Data Analytics", icon: BarChart },
  { name: "Data Visualization", icon: PieChart },
  { name: "Power BI Proficiency", icon: AreaChart },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">About Me</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            MBA student with hands-on HR and digital marketing experience, skilled in analytics and communication, driven to contribute to organizational success.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3 space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              I’m Mohan Kumar, currently pursuing my Master of Business Administration at Bengaluru City University, with a strong foundation in commerce and finance from the University of Mysore. My academic journey has been complemented by practical experiences through internships in HR and digital marketing, where I developed skills in recruitment, social media management, SEO, and content creation.
            </p>
            <p>
              I thrive on opportunities to grow and contribute meaningfully to organizations. My skillset spans communication, analytical thinking, project management, and data analytics, including proficiency in Power BI and data visualization.
            </p>
            <p>
              Outside work, I’m actively involved in social work and love exploring new places, engaging in sports, and participating in community initiatives like NCC, NSS, and the Red Cross. I’m eager to leverage my diverse skills and experiences to make a positive impact in the professional world.
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
