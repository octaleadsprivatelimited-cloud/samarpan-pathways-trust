import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const News = () => {
  const newsArticles = [
    {
      title: "New Education Center Opens in Rural Village",
      date: "December 15, 2023",
      excerpt: "Swamivivekananda Seva Brundam inaugurates a new learning center equipped with modern facilities and digital resources, serving over 200 students.",
      category: "Education"
    },
    {
      title: "Women Entrepreneurship Program Shows Remarkable Success",
      date: "December 1, 2023",
      excerpt: "Over 100 women have started their own businesses through our skill development and entrepreneurship training programs.",
      category: "Women Empowerment"
    },
    {
      title: "Annual Health Camp Benefits 500+ Community Members",
      date: "November 20, 2023",
      excerpt: "Free health screenings and consultations provided to rural communities, with follow-up care arrangements for those in need.",
      category: "Health"
    },
    {
      title: "Youth Leadership Program Graduates 50 New Community Leaders",
      date: "November 5, 2023",
      excerpt: "Young leaders complete comprehensive training program and commit to driving positive change in their villages.",
      category: "Youth Development"
    },
    {
      title: "Sustainable Farming Initiative Helps 200 Farmers",
      date: "October 25, 2023",
      excerpt: "Training program on organic farming techniques and modern agricultural practices shows promising results.",
      category: "Rural Development"
    },
    {
      title: "Recognition Award for Community Impact",
      date: "October 10, 2023",
      excerpt: "Swamivivekananda Seva Brundam receives state recognition for outstanding contribution to rural development and community empowerment.",
      category: "Awards"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">News & Updates</h1>
          <p className="text-xl opacity-95">Stay informed about our latest activities and achievements</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {newsArticles.map((article, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                    {article.category}
                  </span>
                  <h3 className="font-heading font-bold text-xl mb-3">{article.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="link" className="text-primary p-0">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center bg-light-bg p-8 rounded-lg">
            <h3 className="font-heading font-bold text-2xl mb-4">Stay Connected</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter to receive updates about our programs, events, and impact stories directly in your inbox.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Subscribe Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
