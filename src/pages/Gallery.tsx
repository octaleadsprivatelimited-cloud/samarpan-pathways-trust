import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  // Use Vite's glob import to get all gallery images
  const imageModules = import.meta.glob('@/assets/gallery/Swamivivekananda Seva Brundam*.jpg', { eager: true });
  
  // Convert to array and sort by filename
  const galleryImages = Object.entries(imageModules)
    .map(([path, module]: [string, any]) => {
      const filename = path.split('/').pop() || '';
      const match = filename.match(/(\d+)/);
      const order = match ? parseInt(match[1]) : 0;
      return {
        src: module.default || module,
        alt: `Seva Activities - ${filename}`,
        category: "Seva Activities",
        order
      };
    })
    .sort((a, b) => a.order - b.order);

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
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
              >
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

          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none">
              {selectedImage && (
                <div className="relative">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>

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
