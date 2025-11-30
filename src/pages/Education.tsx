import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Laptop, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import educationImage from "@/assets/education-program.jpg";

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Education Initiatives</h1>
          <p className="text-xl opacity-95">Building futures through quality education</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">Transforming Lives Through Education</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Education is the foundation of our work at Swamivivekananda Seva Brundam. We believe that quality education is the most powerful tool for breaking the cycle of poverty and creating opportunities for rural youth.
              </p>
              <p className="text-lg text-muted-foreground">
                Our education programs focus on providing access to quality learning resources, digital literacy, and supplementary education support to students in rural areas who lack basic educational infrastructure.
              </p>
            </div>
            <div>
              <img src={educationImage} alt="Education program" className="rounded-lg shadow-xl w-full" />
            </div>
          </div>

          <h3 className="font-heading font-bold text-2xl mb-8 text-center">Program Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Learning Centers</h4>
                <p className="text-sm text-muted-foreground">Community learning spaces with libraries and study materials</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Laptop className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Digital Literacy</h4>
                <p className="text-sm text-muted-foreground">Computer training and internet access for rural students</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Teacher Training</h4>
                <p className="text-sm text-muted-foreground">Capacity building for local teachers and educators</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-growth-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-growth-green" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Scholarships</h4>
                <p className="text-sm text-muted-foreground">Financial support for deserving students</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-light-bg p-8 rounded-lg">
            <h3 className="font-heading font-bold text-2xl mb-6">Impact & Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-heading font-bold text-4xl text-primary mb-2">5,000+</div>
                <p className="text-muted-foreground">Students Supported</p>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-4xl text-secondary mb-2">15+</div>
                <p className="text-muted-foreground">Learning Centers</p>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-4xl text-accent mb-2">100+</div>
                <p className="text-muted-foreground">Teachers Trained</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;
