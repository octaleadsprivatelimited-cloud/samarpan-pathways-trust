import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, GraduationCap, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import womenImage from "@/assets/women-empowerment.jpg";

const WomenEmpowerment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Women Empowerment</h1>
          <p className="text-xl opacity-95">Empowering women to become agents of change</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={womenImage} alt="Women empowerment" className="rounded-lg shadow-xl w-full" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">Building Self-Reliant Women</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our women empowerment programs focus on providing rural women with the skills, knowledge, and resources they need to become economically independent and socially empowered.
              </p>
              <p className="text-lg text-muted-foreground">
                Through vocational training, entrepreneurship development, and self-help groups, we enable women to start their own businesses, contribute to family income, and take leadership roles in their communities.
              </p>
            </div>
          </div>

          <h3 className="font-heading font-bold text-2xl mb-8 text-center">Program Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Skill Training</h4>
                <p className="text-sm text-muted-foreground">Vocational courses in tailoring, handicrafts, and more</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Entrepreneurship</h4>
                <p className="text-sm text-muted-foreground">Business development and market linkages</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Self-Help Groups</h4>
                <p className="text-sm text-muted-foreground">Community support and microfinance access</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-growth-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-growth-green" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Financial Literacy</h4>
                <p className="text-sm text-muted-foreground">Money management and savings programs</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-light-bg p-8 rounded-lg">
            <h3 className="font-heading font-bold text-2xl mb-6">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-heading font-bold text-4xl text-primary mb-2">2,000+</div>
                <p className="text-muted-foreground">Women Trained</p>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-4xl text-secondary mb-2">500+</div>
                <p className="text-muted-foreground">Businesses Started</p>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-4xl text-accent mb-2">50+</div>
                <p className="text-muted-foreground">Self-Help Groups</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WomenEmpowerment;
