import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Users, Lightbulb, TreePine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Mission = () => {
  const values = [
    { icon: Heart, title: "Compassion", description: "Approaching every challenge with empathy and understanding" },
    { icon: Users, title: "Community", description: "Building strong, resilient communities through collaboration" },
    { icon: Lightbulb, title: "Innovation", description: "Finding creative solutions to complex social problems" },
    { icon: TreePine, title: "Sustainability", description: "Creating lasting change that benefits future generations" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Mission & Vision</h1>
          <p className="text-xl opacity-95">Guiding principles that drive our work</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            <div className="bg-light-bg p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="font-heading font-bold text-3xl">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A society where every individual, especially from rural and underprivileged communities, has access to quality education, healthcare, and opportunities for sustainable livelihoods. We envision empowered communities that are self-reliant, progressive, and capable of driving their own development.
              </p>
            </div>

            <div className="bg-light-bg p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h2 className="font-heading font-bold text-3xl">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower rural youth, women, and communities through integrated development programs focusing on education, skill development, health awareness, and sustainable practices. We work at the grassroots level to create meaningful, lasting change through community participation and evidence-based interventions.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-8">Our Strategic Goals</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-heading font-semibold text-xl mb-2">Education for All</h3>
                <p className="text-muted-foreground">
                  Ensure access to quality education for every child in our target communities, with special focus on girls' education and digital literacy.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="font-heading font-semibold text-xl mb-2">Economic Empowerment</h3>
                <p className="text-muted-foreground">
                  Create sustainable livelihood opportunities through skill development, entrepreneurship training, and market linkages.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-heading font-semibold text-xl mb-2">Health & Wellness</h3>
                <p className="text-muted-foreground">
                  Promote health awareness, preventive healthcare, and ensure access to basic health services in rural communities.
                </p>
              </div>
              <div className="border-l-4 border-growth-green pl-6">
                <h3 className="font-heading font-semibold text-xl mb-2">Community Leadership</h3>
                <p className="text-muted-foreground">
                  Develop local leaders who can drive sustainable development and advocate for their communities' needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;
