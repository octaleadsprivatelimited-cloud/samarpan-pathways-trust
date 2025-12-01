import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Heart, Users, Gift, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GetInvolved = () => {
  const ways = [
    {
      icon: Heart,
      title: "Donate",
      description: "Your financial contributions help us expand our programs and reach more communities in need.",
      action: "Make a Donation",
      link: "/donate",
      color: "primary"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Contribute your time and skills to directly impact the lives of people in rural communities.",
      action: "Become a Volunteer",
      link: "/volunteers",
      color: "secondary"
    },
    {
      icon: Gift,
      title: "Partner with Us",
      description: "Corporate partnerships and collaborations help us scale our impact and create sustainable solutions.",
      action: "Explore Partnerships",
      link: "/contact",
      color: "accent"
    },
    {
      icon: Share2,
      title: "Spread Awareness",
      description: "Help us reach more people by sharing our story and mission on social media and with your network.",
      action: "Share Our Mission",
      link: "/about",
      color: "growth-green"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Get Involved</h1>
          <p className="text-xl opacity-95">Be part of the change you want to see</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            There are many ways you can support our mission and contribute to creating positive change in rural communities. Every contribution, whether big or small, makes a significant difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {ways.map((way, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-${way.color}/10 rounded-full flex items-center justify-center mb-6`}>
                    <way.icon className={`w-8 h-8 text-${way.color}`} />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4">{way.title}</h3>
                  <p className="text-muted-foreground mb-6">{way.description}</p>
                  <Button asChild className={`w-full ${way.link === "/donate" ? "bg-orange-500 hover:bg-orange-600 text-white" : "bg-primary hover:bg-primary/90"}`}>
                    <Link to={way.link}>{way.action}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-light-bg p-8 rounded-lg">
            <h3 className="font-heading font-bold text-2xl mb-6 text-center">Other Ways to Help</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-heading font-semibold text-lg mb-2">Organize Fundraisers</h4>
                <p className="text-sm text-muted-foreground">
                  Host events in your community to raise funds and awareness for our cause.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-heading font-semibold text-lg mb-2">Sponsor Programs</h4>
                <p className="text-sm text-muted-foreground">
                  Directly sponsor specific programs like education centers or health camps.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-heading font-semibold text-lg mb-2">Legacy Giving</h4>
                <p className="text-sm text-muted-foreground">
                  Include Swamivivekananda Seva Brundam in your estate planning for lasting impact.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="font-heading font-bold text-2xl mb-4">Have Questions?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're here to help you find the best way to get involved. Reach out to us to discuss how you can contribute to our mission.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;
