import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Shiva Kumar Gudlanaram",
      role: "Founder & Director",
      bio: "National Youth Awardee with 15+ years of experience in social development.",
      email: "info@ysvsb.org"
    },
    {
      name: "Program Director",
      role: "Programs & Operations",
      bio: "Leading program implementation and community outreach initiatives.",
      email: "programs@ysvsb.org"
    },
    {
      name: "Education Coordinator",
      role: "Education Programs",
      bio: "Managing educational initiatives and learning center operations.",
      email: "education@ysvsb.org"
    },
    {
      name: "Women Empowerment Lead",
      role: "Women's Programs",
      bio: "Coordinating skill development and entrepreneurship programs for women.",
      email: "women@ysvsb.org"
    },
    {
      name: "Health Program Officer",
      role: "Health & Wellness",
      bio: "Organizing health camps and wellness initiatives in rural areas.",
      email: "health@ysvsb.org"
    },
    {
      name: "Youth Development Officer",
      role: "Youth Programs",
      bio: "Managing youth leadership training and career guidance programs.",
      email: "youth@ysvsb.org"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Our Team</h1>
          <p className="text-xl opacity-95">Dedicated professionals driving change</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Our team comprises passionate individuals committed to creating meaningful change in rural communities. With diverse expertise and a shared vision, we work together to empower communities and transform lives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="font-heading font-bold text-white text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      <Mail size={20} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center bg-light-bg p-8 rounded-lg">
            <h3 className="font-heading font-bold text-2xl mb-4">Join Our Team</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference. If you're interested in joining our mission, we'd love to hear from you.
            </p>
            <a href="mailto:info@ysvsb.org" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
