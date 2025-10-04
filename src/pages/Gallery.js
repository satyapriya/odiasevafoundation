import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpeg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gauriImage from "../assets/images/cow-gauri.jpg";
import lakshmiImage from "../assets/images/cow-lakshmi.jpg";
import shyamImage from "../assets/images/cow-shyam.jpg";

const Gallery = () => {
  const images = [
    {
      src: gallery1,
      alt: "Volunteers feeding cows at the shelter",
      title: "Daily Care",
    },
    {
      src: gallery2,
      alt: "Cows with new born calf",
      title: "Newborn calf take care",
    },
    {
      src: gallery3,
      alt: "Compassionate interaction with cows",
      title: "Love & Care",
    },
    {
      src: gauriImage,
      alt: "Gauri enjoying fresh grass",
      title: "Gauri's Moment",
    },
    {
      src: lakshmiImage,
      alt: "Lakshmi resting peacefully",
      title: "Lakshmi's Peace",
    },
    {
      src: shyamImage,
      alt: "Shyam exploring the shelter",
      title: "Curious Shyam",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Life at Our Shelter
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Glimpses of daily life, care, and compassion at Odia Seva Foundation. 
              See the impact your donations make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Want to see more? Follow us on social media for daily updates
            </p>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <span>Facebook: @OdiaSevaFoundation</span>
              <span>•</span>
              <span>Instagram: @odiaseva</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
