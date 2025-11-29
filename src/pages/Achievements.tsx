import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy, Award, Star, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      year: "2023",
      title: "State Recognition for Community Impact",
      description: "Received state government recognition for outstanding contribution to rural development and community empowerment initiatives.",
      icon: Trophy
    },
    {
      year: "2022",
      title: "National Youth Award",
      description: "Founder Shiva Kumar Gudlanaram honored with the prestigious National Youth Award for exceptional work in youth development.",
      icon: Award
    },
    {
      year: "2021",
      title: "Best NGO Award",
      description: "Recognized as Best NGO for Education by the District Education Department for innovative learning programs.",
      icon: Star
    },
    {
      year: "2020",
      title: "Women Empowerment Excellence",
      description: "Awarded for exemplary work in women's skill development and entrepreneurship programs.",
      icon: Medal
    },
  ];

  const milestones = [
    { number: "10,000+", label: "Lives Impacted", color: "primary" },
    { number: "25+", label: "Villages Served", color: "secondary" },
    { number: "15+", label: "Years of Service", color: "accent" },
    { number: "50+", label: "Programs Launched", color: "growth-green" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Achievements</h1>
          <p className="text-xl opacity-95">Celebrating milestones in our journey</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <h2 className="font-heading font-bold text-3xl mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {milestones.map((milestone, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`font-heading font-bold text-4xl mb-2 text-${milestone.color}`}>
                    {milestone.number}
                  </div>
                  <p className="text-muted-foreground">{milestone.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="font-heading font-bold text-3xl mb-8 text-center">Awards & Recognition</h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="font-heading font-bold text-2xl text-primary">{achievement.year}</span>
                        <div className="h-px flex-grow bg-border"></div>
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-3">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-light-bg p-8 rounded-lg text-center">
            <h3 className="font-heading font-bold text-2xl mb-4">Our Commitment</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              These achievements are not just awards on a shelf, but a testament to the collective effort of our team, volunteers, donors, and the communities we serve. Every recognition motivates us to continue our mission with renewed dedication and reach even more lives.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Achievements;
