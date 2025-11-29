import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import educationImage from "@/assets/education-program.jpg";
import womenImage from "@/assets/women-empowerment.jpg";
import heroImage from "@/assets/hero-home.jpg";

const Gallery = () => {
  const images = [
    { src: educationImage, alt: "Education program", category: "Education" },
    { src: womenImage, alt: "Women empowerment", category: "Women Empowerment" },
    { src: heroImage, alt: "Community gathering", category: "Events" },
    { src: educationImage, alt: "Learning center", category: "Education" },
    { src: womenImage, alt: "Skill training", category: "Women Empowerment" },
    { src: heroImage, alt: "Health camp", category: "Health" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Gallery</h1>
          <p className="text-xl opacity-95">Moments that define our journey</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm mb-2">
                      {image.category}
                    </span>
                    <p className="text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              These images capture the essence of our work and the impact we're creating in communities. Each photograph tells a story of hope, transformation, and empowerment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
