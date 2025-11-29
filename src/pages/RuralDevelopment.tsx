import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sprout, Droplet, Home, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RuralDevelopment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Rural Development</h1>
          <p className="text-xl opacity-95">Building sustainable and thriving rural communities</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Our rural development programs focus on creating sustainable infrastructure and practices that improve the quality of life in rural areas while protecting the environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-growth-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sprout className="w-8 h-8 text-growth-green" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Sustainable Farming</h4>
                <p className="text-sm text-muted-foreground">Organic farming and modern techniques</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplet className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Water Management</h4>
                <p className="text-sm text-muted-foreground">Rainwater harvesting and conservation</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Infrastructure</h4>
                <p className="text-sm text-muted-foreground">Community centers and road development</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Clean Energy</h4>
                <p className="text-sm text-muted-foreground">Solar power and renewable energy</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="bg-light-bg p-8 rounded-lg">
              <h3 className="font-heading font-bold text-2xl mb-4">Agricultural Support</h3>
              <p className="text-muted-foreground mb-4">
                We provide farmers with training in modern agricultural techniques, organic farming methods, and help them access better seeds, tools, and market linkages. Our goal is to increase productivity while maintaining environmental sustainability.
              </p>
            </div>

            <div className="bg-light-bg p-8 rounded-lg">
              <h3 className="font-heading font-bold text-2xl mb-4">Water Conservation</h3>
              <p className="text-muted-foreground mb-4">
                Through rainwater harvesting systems, watershed management, and community water conservation initiatives, we help villages manage their water resources effectively throughout the year.
              </p>
            </div>

            <div className="bg-light-bg p-8 rounded-lg">
              <h3 className="font-heading font-bold text-2xl mb-4">Community Infrastructure</h3>
              <p className="text-muted-foreground mb-4">
                We work with communities to develop essential infrastructure including community centers, improved roads, sanitation facilities, and access to clean drinking water.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RuralDevelopment;
