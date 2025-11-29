import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Users, Sprout, GraduationCap, ArrowRight } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Education Initiatives",
      description: "Quality education programs, digital literacy, and learning resources for rural students.",
      link: "/education",
      color: "primary"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Health awareness camps, preventive healthcare, and nutrition programs.",
      link: "/health",
      color: "secondary"
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Skill development, entrepreneurship training, and self-help groups for women.",
      link: "/women-empowerment",
      color: "accent"
    },
    {
      icon: Sprout,
      title: "Rural Development",
      description: "Sustainable agriculture, water conservation, and community infrastructure projects.",
      link: "/rural-development",
      color: "growth-green"
    },
    {
      icon: GraduationCap,
      title: "Youth Development",
      description: "Leadership training, career guidance, and employment support for young people.",
      link: "/youth-development",
      color: "primary"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Our Programs</h1>
          <p className="text-xl opacity-95">Comprehensive initiatives for community transformation</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Our programs are designed to address the multifaceted challenges faced by rural communities. Through an integrated approach, we work to create sustainable change that empowers individuals and strengthens communities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-${program.color}/10 rounded-full flex items-center justify-center mb-6`}>
                    <program.icon className={`w-8 h-8 text-${program.color}`} />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4">{program.title}</h3>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <Button asChild variant="link" className="text-primary p-0">
                    <Link to={program.link}>
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
