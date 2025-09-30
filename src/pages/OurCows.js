import CowProfileCard from "../components/CowProfileCard";
import gauriImage from "../assets/images/cow-gauri.jpg";
import lakshmiImage from "../assets/images/cow-lakshmi.jpg";
import shyamImage from "../assets/images/cow-shyam.jpg";
import radhaImage from "../assets/images/cow-radha.jpg";
import krishnaImage from "../assets/images/cow-krishna.jpg";
import nandiImage from "../assets/images/cow-nandi.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const OurCows = () => {
  const cows = [
    {
      name: "Gauri",
      story: "Rescued from the streets, Gauri loves fresh grass and being around people. Her gentle nature brings peace to everyone at the shelter.",
      image: gauriImage,
    },
    {
      name: "Lakshmi",
      story: "Named after the goddess of prosperity, Lakshmi has a regal presence. She enjoys her daily baths and is often seen resting under the mango tree.",
      image: lakshmiImage,
    },
    {
      name: "Shyam",
      story: "Playful and curious, Shyam loves exploring every corner of the shelter. His spotted coat makes him easy to recognize from afar.",
      image: shyamImage,
    },
    {
      name: "Radha",
      story: "The mother figure of our herd, Radha watches over the younger cows with care. She has the kindest eyes and loves being hand-fed.",
      image: radhaImage,
    },
    {
      name: "Krishna",
      story: "Strong and healthy with a glossy coat, Krishna is always the first to greet visitors. His friendly nature makes him a favorite among volunteers.",
      image: krishnaImage,
    },
    {
      name: "Nandi",
      story: "Our youngest member, Nandi is full of energy and playfulness. He loves running in the meadow and following the caretakers around.",
      image: nandiImage,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Sacred Cows
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each cow has a unique personality and story. Get to know the beautiful souls 
              you'll be helping when you donate to Odia Seva Foundation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cows.map((cow) => (
              <CowProfileCard
                key={cow.name}
                name={cow.name}
                story={cow.story}
                image={cow.image}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6 text-lg">
              And 14 more wonderful cows living safely at our shelter
            </p>
            <p className="text-foreground font-medium text-xl">
              Every cow deserves love, care, and protection
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurCows;