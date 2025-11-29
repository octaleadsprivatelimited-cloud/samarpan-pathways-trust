import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, BookOpen, Users, Sprout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Donate = () => {
  const donationOptions = [
    {
      icon: BookOpen,
      title: "Support Education",
      description: "Help us provide quality education, learning materials, and digital resources to rural students.",
      amount: "₹5,000"
    },
    {
      icon: Users,
      title: "Empower Women",
      description: "Enable women through skill training and entrepreneurship programs.",
      amount: "₹3,000"
    },
    {
      icon: Heart,
      title: "Health Initiatives",
      description: "Support health camps and wellness programs in rural communities.",
      amount: "₹4,000"
    },
    {
      icon: Sprout,
      title: "Rural Development",
      description: "Contribute to sustainable farming and community infrastructure projects.",
      amount: "₹6,000"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Support Our Mission</h1>
          <p className="text-xl opacity-95">Your donation creates lasting change</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Every contribution, regardless of size, makes a real difference in the lives of people in rural communities. Your support helps us expand our programs and reach more families in need.
            </p>
            <div className="bg-light-bg p-6 rounded-lg">
              <p className="font-heading font-semibold text-lg mb-2">Tax Benefits</p>
              <p className="text-muted-foreground">
                Donations to Youth Service Trust are eligible for tax deductions under Section 80G of the Income Tax Act.
              </p>
            </div>
          </div>

          <h2 className="font-heading font-bold text-3xl mb-8 text-center">Choose Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {donationOptions.map((option, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-heading font-bold text-xl mb-2">{option.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                      <p className="font-heading font-semibold text-lg text-primary">{option.amount}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12">
            <h3 className="font-heading font-bold text-2xl mb-6 text-center">Make Your Donation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <button className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary">
                <p className="font-heading font-bold text-3xl mb-2">₹1,000</p>
                <p className="text-sm text-muted-foreground">One-time donation</p>
              </button>
              <button className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary">
                <p className="font-heading font-bold text-3xl mb-2">₹5,000</p>
                <p className="text-sm text-muted-foreground">One-time donation</p>
              </button>
              <button className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary">
                <p className="font-heading font-bold text-3xl mb-2">₹10,000</p>
                <p className="text-sm text-muted-foreground">One-time donation</p>
              </button>
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Donate Now
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Secure payment processing powered by trusted payment partners
              </p>
            </div>
          </div>

          <div className="bg-light-bg p-8 rounded-lg">
            <h3 className="font-heading font-bold text-2xl mb-4 text-center">Bank Transfer Details</h3>
            <div className="max-w-2xl mx-auto space-y-3 text-center">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Account Name:</strong> Youth Service Trust
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Bank:</strong> [Bank Name]
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Account Number:</strong> [Account Number]
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">IFSC Code:</strong> [IFSC Code]
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Please email your transaction details to info@ysvsb.org for tax receipt
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="font-heading font-bold text-2xl mb-4">Questions About Donating?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us at <a href="mailto:info@ysvsb.org" className="text-primary hover:underline">info@ysvsb.org</a> or call{" "}
              <a href="tel:+919966395037" className="text-primary hover:underline">+91 99663 95037</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
