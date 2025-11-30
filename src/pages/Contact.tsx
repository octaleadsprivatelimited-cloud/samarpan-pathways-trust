import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import qrImage from "@/assets/qr-payment.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-xl opacity-95">Get in touch with our team</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-light-bg rounded-lg">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Email</h3>
                    <a href="mailto:info@ysvsb.org" className="text-muted-foreground hover:text-primary transition-colors">
                      info@ysvsb.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-light-bg rounded-lg">
                  <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Phone</h3>
                    <a href="tel:+917013570447" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 70135 70447
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-light-bg rounded-lg">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      H No 6-113, Gandhinagar Kalwakurthy Village & Mandal<br />
                      Nagarkurnool District, Telangana State<br />
                      Pincode: 509324
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-light-bg rounded-lg">
                  <Wallet className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="w-full">
                    <h3 className="font-heading font-semibold text-lg mb-2">UPI Payment</h3>
                    <p className="text-muted-foreground mb-3">
                      Scan the QR code or use UPI ID to make a donation:
                    </p>
                    <div className="mb-3">
                      <p className="font-semibold text-foreground mb-1">UPI ID:</p>
                      <p className="text-primary font-mono text-lg">swamivivekanandasevabrundam@ybl</p>
                    </div>
                    <div className="mt-4 flex justify-center">
                      <img src={qrImage} alt="UPI Payment QR Code" className="w-48 h-48 object-contain border border-border rounded-lg p-2 bg-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/10 border-l-4 border-primary rounded">
                <h3 className="font-heading font-semibold text-lg mb-2">Need Immediate Assistance?</h3>
                <p className="text-muted-foreground mb-4">
                  For urgent inquiries or support, please call us directly during office hours.
                </p>
                <Button asChild variant="outline">
                  <a href="tel:+917013570447">Call Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
