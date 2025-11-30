import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wallet, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import qrImage from "@/assets/qr-payment.png";
import { useState } from "react";
import { toast } from "sonner";

const Donate = () => {
  const [copied, setCopied] = useState(false);
  const upiId = "swamivivekanandasevabrundam@ybl";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    toast.success("UPI ID copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

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
          <div className="mb-8">
            <h3 className="font-heading font-bold text-3xl mb-8 text-center">Make a Donation</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* UPI ID Section */}
              <Card className="border-2 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Wallet className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-heading font-bold text-xl">UPI Payment</h4>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    Use the UPI ID below to make a quick donation through any UPI app:
                  </p>
                  
                  <div className="bg-light-bg p-4 rounded-lg mb-4">
                    <label className="text-sm font-semibold text-muted-foreground mb-2 block">UPI ID</label>
                    <div className="flex items-center gap-3">
                      <p className="text-primary font-mono text-lg font-semibold flex-grow break-all">
                        {upiId}
                      </p>
                      <Button
                        onClick={copyToClipboard}
                        variant="outline"
                        size="sm"
                        className="flex-shrink-0"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> After payment, please email your transaction details to{" "}
                      <a href="mailto:info@ysvsb.org" className="text-primary hover:underline">info@ysvsb.org</a> for tax receipt.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* QR Code Section */}
              <Card className="border-2 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Wallet className="w-6 h-6 text-secondary" />
                    </div>
                    <h4 className="font-heading font-bold text-xl">Scan QR Code</h4>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-center">
                    Scan this QR code with any UPI app to make a donation:
                  </p>
                  
                  <div className="flex justify-center">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-border">
                      <img 
                        src={qrImage} 
                        alt="UPI Payment QR Code" 
                        className="w-64 h-64 object-contain" 
                      />
                    </div>
                  </div>
                  
                  <p className="text-center text-sm text-muted-foreground mt-6">
                    Works with Google Pay, PhonePe, Paytm, and all UPI apps
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-light-bg p-8 rounded-lg">
            <h3 className="font-heading font-bold text-2xl mb-4 text-center">Bank Transfer Details</h3>
            <div className="max-w-2xl mx-auto space-y-3 text-center">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Account Name:</strong> Swamivivekananda Seva Brundam
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
              <a href="tel:+917013570447" className="text-primary hover:underline">+91 70135 70447</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
