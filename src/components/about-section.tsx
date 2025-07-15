import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Speech, Handshake, BrainCircuit, ClipboardList, PenSquare, ThumbsUp, Search, BarChart, PieChart, AreaChart } from "lucide-react";

const skills = [
  { name: "Communication", icon: Speech },
  { name: "Interpersonal Skills", icon: Handshake },
  { name: "Analytical Thinking", icon: BrainCircuit },
  { name: "Sourcing", icon: ClipboardList },
  
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
