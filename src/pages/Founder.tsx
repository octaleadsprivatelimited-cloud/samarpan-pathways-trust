import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Heart, Users } from "lucide-react";
import founderImage from "@/assets/founder-portrait.jpg";

const Founder = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Our Founder</h1>
          <p className="text-xl opacity-95">Visionary leader and National Youth Awardee</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <img 
                src={founderImage} 
                alt="Shiva Kumar Gudlanaram" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="mt-6 bg-light-bg p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6 text-secondary" />
                  <h3 className="font-heading font-bold text-xl">National Youth Awardee</h3>
                </div>
                <p className="text-muted-foreground">
                  Recognized by the Government of India for outstanding contribution to youth development and social service.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Shiva Kumar Gudlanaram
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founder & Director, Youth Service Trust
              </p>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Shiva Kumar Gudlanaram is a passionate social entrepreneur and youth leader dedicated to rural development and community empowerment. His journey in social service began over 15 years ago with a simple mission: to bridge the gap between rural and urban India through education and skill development.
                </p>
                <p>
                  As a National Youth Awardee, Shiva Kumar has been recognized for his exceptional contributions to youth empowerment and community development. His innovative approaches to grassroots problem-solving have transformed thousands of lives across rural communities.
                </p>
                <p>
                  Under his leadership, Youth Service Trust has grown from a small local initiative to a comprehensive development organization, implementing programs in education, health, women empowerment, and sustainable livelihoods across multiple villages and districts.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 p-4 bg-light-bg rounded-lg">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-semibold mb-2">Community First Approach</h4>
                    <p className="text-sm text-muted-foreground">
                      Believes in empowering communities to become self-reliant through education and skill development.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-light-bg rounded-lg">
                  <Users className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-semibold mb-2">Youth Leadership</h4>
                    <p className="text-sm text-muted-foreground">
                      Focuses on developing young leaders who can drive positive change in their communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Founder;
