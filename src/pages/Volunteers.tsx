import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Volunteers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your interest! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", interests: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Become a Volunteer</h1>
          <p className="text-xl opacity-95">Join our community of changemakers</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Volunteering with Youth Service Trust is a rewarding experience that allows you to make a direct impact on rural communities. Whether you can contribute a few hours or commit to long-term involvement, we value your time and skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Make an Impact</h4>
                <p className="text-sm text-muted-foreground">Create meaningful change in communities</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Build Connections</h4>
                <p className="text-sm text-muted-foreground">Connect with like-minded individuals</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Flexible Hours</h4>
                <p className="text-sm text-muted-foreground">Volunteer on your own schedule</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-growth-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-growth-green" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Gain Experience</h4>
                <p className="text-sm text-muted-foreground">Develop valuable skills and insights</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">Volunteer Opportunities</h2>
              <div className="space-y-4">
                <div className="bg-light-bg p-4 rounded-lg">
                  <h4 className="font-heading font-semibold text-lg mb-2">Teaching & Mentoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Help students with academics, conduct workshops, or mentor young people.
                  </p>
                </div>
                <div className="bg-light-bg p-4 rounded-lg">
                  <h4 className="font-heading font-semibold text-lg mb-2">Event Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Assist in organizing health camps, awareness programs, and community events.
                  </p>
                </div>
                <div className="bg-light-bg p-4 rounded-lg">
                  <h4 className="font-heading font-semibold text-lg mb-2">Skill Training</h4>
                  <p className="text-sm text-muted-foreground">
                    Share your professional skills through training workshops and sessions.
                  </p>
                </div>
                <div className="bg-light-bg p-4 rounded-lg">
                  <h4 className="font-heading font-semibold text-lg mb-2">Administrative Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Help with documentation, communications, and project management.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">Express Your Interest</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    placeholder="Areas of Interest (e.g., Education, Health)"
                  />
                </div>
                <div>
                  <Textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about yourself and why you want to volunteer"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Volunteers;
