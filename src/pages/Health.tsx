import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Stethoscope, Baby, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Health = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Health & Wellness</h1>
          <p className="text-xl opacity-95">Promoting healthy communities through awareness and care</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Our health and wellness programs focus on preventive healthcare, health education, and ensuring access to basic health services in rural communities where medical facilities are limited.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Health Camps</h4>
                <p className="text-sm text-muted-foreground">Free medical check-ups and screenings</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Preventive Care</h4>
                <p className="text-sm text-muted-foreground">Health education and awareness programs</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Maternal Care</h4>
                <p className="text-sm text-muted-foreground">Support for mothers and newborns</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-growth-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-growth-green" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Nutrition</h4>
                <p className="text-sm text-muted-foreground">Nutritional awareness and support programs</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-light-bg p-8 rounded-lg">
            <h3 className="font-heading font-bold text-2xl mb-6">Our Health Initiatives</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Regular Health Camps:</strong> Organizing medical camps in partnership with healthcare professionals to provide free check-ups, consultations, and basic treatments.
              </p>
              <p>
                <strong className="text-foreground">Sanitation & Hygiene:</strong> Promoting proper sanitation practices and hygiene awareness to prevent diseases in rural communities.
              </p>
              <p>
                <strong className="text-foreground">Health Education:</strong> Conducting workshops on nutrition, disease prevention, and healthy lifestyle practices.
              </p>
              <p>
                <strong className="text-foreground">Eye Care Programs:</strong> Providing vision screening and distributing reading glasses to those in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Health;
