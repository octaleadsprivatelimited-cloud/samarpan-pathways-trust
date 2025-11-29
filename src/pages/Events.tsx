import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Health Camp",
      date: "January 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Village Community Center",
      description: "Free health check-ups and consultations for all community members."
    },
    {
      title: "Women Entrepreneurship Workshop",
      date: "January 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Training Center, Main Village",
      description: "Skill development workshop for aspiring women entrepreneurs."
    },
    {
      title: "Youth Leadership Summit",
      date: "February 5, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "District Hall",
      description: "Leadership training and networking event for rural youth."
    },
  ];

  const pastEvents = [
    {
      title: "Annual Fundraiser Gala",
      date: "December 10, 2023",
      description: "Successfully raised funds for education programs."
    },
    {
      title: "Rural Education Fair",
      date: "November 20, 2023",
      description: "Distributed learning materials to 500+ students."
    },
    {
      title: "Community Awareness Drive",
      date: "October 15, 2023",
      description: "Health and sanitation awareness campaign across 10 villages."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Events</h1>
          <p className="text-xl opacity-95">Join us in making a difference</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <h2 className="font-heading font-bold text-3xl mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-4">{event.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="font-heading font-bold text-3xl mb-8">Past Events</h2>
          <div className="space-y-4">
            {pastEvents.map((event, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
