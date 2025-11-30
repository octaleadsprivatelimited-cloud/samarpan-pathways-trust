import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">About Us</h1>
          <p className="text-xl opacity-95">Empowering communities for over 15 years</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-3xl mb-6">Our Story</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Swamivivekananda Seva Brundam was established with a vision to create meaningful change in rural communities across India. Founded by National Youth Awardee Shiva Kumar Gudlanaram, our organization has been at the forefront of grassroots development for over 15 years.
            </p>
            <p>
              What started as a small initiative to support rural education has grown into a comprehensive development organization, touching the lives of thousands through our various programs in education, health, women empowerment, and sustainable development.
            </p>
            <p>
              Our work is guided by the belief that every individual, regardless of their background, deserves access to opportunities that can help them realize their full potential. Through community-driven approaches and sustainable solutions, we continue to build a more equitable society.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-light-bg p-8 rounded-lg">
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground">
                A society where every individual, especially from rural and underprivileged communities, has access to quality education, healthcare, and opportunities for sustainable livelihoods.
              </p>
            </div>
            <div className="bg-light-bg p-8 rounded-lg">
              <h3 className="font-heading font-bold text-2xl mb-4 text-secondary">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower rural youth, women, and communities through integrated development programs focusing on education, skill development, health awareness, and sustainable practices.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/founder">Meet Our Founder <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
