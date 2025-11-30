import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Lightbulb, TreePine, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";
import educationImage from "@/assets/education-program.jpg";
import womenImage from "@/assets/women-empowerment.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Youth empowerment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 animate-in fade-in duration-700">
            Empowering Communities,<br />Transforming Lives
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 animate-in fade-in duration-700 delay-200">
            Building a brighter future through education, empowerment, and sustainable development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in duration-700 delay-300">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link to="/donate">Support Our Mission</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-light-bg">
        <div className="container-custom">
          <div className="grid grid-cols-4 gap-2 md:gap-6">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-3 md:pt-6 px-2 md:px-6">
                <div className="w-8 h-8 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <Users className="w-4 h-4 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-sm md:text-3xl mb-1 md:mb-2">10,000+</h3>
                <p className="text-muted-foreground text-xs md:text-base">Lives Impacted</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-3 md:pt-6 px-2 md:px-6">
                <div className="w-8 h-8 md:w-16 md:h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <Heart className="w-4 h-4 md:w-8 md:h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-sm md:text-3xl mb-1 md:mb-2">50+</h3>
                <p className="text-muted-foreground text-xs md:text-base">Programs Launched</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-3 md:pt-6 px-2 md:px-6">
                <div className="w-8 h-8 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <Lightbulb className="w-4 h-4 md:w-8 md:h-8 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-bold text-sm md:text-3xl mb-1 md:mb-2">25+</h3>
                <p className="text-muted-foreground text-xs md:text-base">Villages Served</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-3 md:pt-6 px-2 md:px-6">
                <div className="w-8 h-8 md:w-16 md:h-16 bg-growth-green rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <TreePine className="w-4 h-4 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-sm md:text-3xl mb-1 md:mb-2">15+</h3>
                <p className="text-muted-foreground text-xs md:text-base">Years of Service</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                About Swamivivekananda Seva Brundam
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded by National Youth Awardee Shiva Kumar Gudlanaram, Swamivivekananda Seva Brundam is dedicated to transforming rural communities through comprehensive development programs.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our grassroots approach focuses on empowering youth, women, and underprivileged communities through education, skill development, and sustainable livelihood initiatives.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/about">Read Our Story <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            <div className="relative">
              <img src={educationImage} alt="Education program" className="rounded-lg shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Highlight */}
      <section className="section-padding bg-light-bg">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Key Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive initiatives designed to create lasting impact in communities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <img src={educationImage} alt="Education" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3">Education Initiatives</h3>
                <p className="text-muted-foreground mb-4">
                  Providing quality education and learning resources to rural children and youth.
                </p>
                <Button asChild variant="link" className="text-primary p-0">
                  <Link to="/education">Learn More <ArrowRight className="ml-1 w-4 h-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <img src={womenImage} alt="Women Empowerment" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3">Women Empowerment</h3>
                <p className="text-muted-foreground mb-4">
                  Skill development and entrepreneurship programs for rural women.
                </p>
                <Button asChild variant="link" className="text-primary p-0">
                  <Link to="/women-empowerment">Learn More <ArrowRight className="ml-1 w-4 h-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-gradient-to-br from-accent to-growth-green rounded-lg mb-4 flex items-center justify-center">
                  <Users className="w-20 h-20 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">Youth Development</h3>
                <p className="text-muted-foreground mb-4">
                  Leadership training and career guidance for young people in rural areas.
                </p>
                <Button asChild variant="link" className="text-primary p-0">
                  <Link to="/youth-development">Learn More <ArrowRight className="ml-1 w-4 h-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom text-center text-white">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Your support can transform lives and build stronger communities. Together, we can create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
              <Link to="/volunteers">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
