import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Briefcase, Trophy, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const YouthDevelopment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Youth Development</h1>
          <p className="text-xl opacity-95">Nurturing tomorrow's leaders today</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Our youth development programs are designed to equip young people with the skills, confidence, and opportunities they need to become successful professionals and community leaders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Leadership Training</h4>
                <p className="text-sm text-muted-foreground">Developing future community leaders</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Career Guidance</h4>
                <p className="text-sm text-muted-foreground">Professional counseling and placement support</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Skill Development</h4>
                <p className="text-sm text-muted-foreground">Technical and soft skills training</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-growth-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-growth-green" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Mentorship</h4>
                <p className="text-sm text-muted-foreground">One-on-one guidance from professionals</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="bg-light-bg p-8 rounded-lg">
              <h3 className="font-heading font-bold text-2xl mb-4">Leadership Development</h3>
              <p className="text-muted-foreground">
                We organize leadership camps, workshops, and training programs that help young people develop critical thinking, problem-solving, and decision-making skills essential for leadership roles.
              </p>
            </div>

            <div className="bg-light-bg p-8 rounded-lg">
              <h3 className="font-heading font-bold text-2xl mb-4">Career Counseling & Placement</h3>
              <p className="text-muted-foreground">
                Our career guidance programs help youth identify their strengths, explore career options, and connect with employment opportunities through job fairs, skill training, and industry partnerships.
              </p>
            </div>

            <div className="bg-light-bg p-8 rounded-lg">
              <h3 className="font-heading font-bold text-2xl mb-4">Youth Clubs & Forums</h3>
              <p className="text-muted-foreground">
                We support the formation of youth clubs where young people can collaborate on community projects, discuss social issues, and develop initiatives that benefit their villages and society.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-primary/10 p-8 rounded-lg">
            <h3 className="font-heading font-bold text-2xl mb-6 text-center">Impact Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-heading font-bold text-4xl text-primary mb-2">3,000+</div>
                <p className="text-muted-foreground">Youth Trained</p>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-4xl text-secondary mb-2">500+</div>
                <p className="text-muted-foreground">Jobs Facilitated</p>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-4xl text-accent mb-2">100+</div>
                <p className="text-muted-foreground">Youth Leaders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default YouthDevelopment;
