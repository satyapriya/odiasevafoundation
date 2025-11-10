import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Heart, HandHeart, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/images/logo.png";
import banner from "../assets/images/group.jpg";
import activity1 from "../assets/images/activity1.jpg";
import activity2 from "../assets/images/activity2.jpg";
import activity3 from "../assets/images/activity3.jpg";
import activity4 from "../assets/images/activity4.jpg";
import activity5 from "../assets/images/activity5.jpg";
import activity6 from "../assets/images/activity6.jpg";
const activities = [
    {
      title: "Foundation Aniversary Puja",
      date: "Oct 2, 2025",
      description: "Foundation Aniversary Puja",
      image: activity1
    },
    {
      title: "Community Visit",
      date: "March 12, 2025",
      description: "Community Visit and Feed grass to cows",
      image: activity2
    },
    {
      title: "Monthly meeting",
      date: "March 10, 2025",
      description: "Monthly meeting and discussion about new shed",
      image: activity3
    },
    {
      title: "Independence Day",
      date: "Aug 15, 2025",
      description: "Independence day celebration",
      image: activity4
    },
    {
      title: "Nandi Maharaja",
      date: "Jul 13, 2025",
      description: "Last ritual of Nandi Maharaja",
      image: activity5
    },
    {
      title: "Shelter Expansion",
      date: "Jul 5, 2025",
      description: "Cow shed expansion to adopt new cows",
      image: activity6
    }
  ];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="absolute inset-0">
          <img
            src={banner}
            alt="Odia Seva Foundation"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white">
            Odia Seva Foundation
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto font-light text-white">
            Serving and protecting our sacred cows with love and care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="text-lg px-8">
                Donate Now
              </Button>
            </Link>
            <Link to="/our-cows">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Meet Our Cows
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Odia Seva Foundation, we are dedicated to providing comprehensive shelter, nutritious food, and expert medical care to 20 sacred cows in Mumbai. Our mission is rooted in the ancient tradition of cow protection and reverence, recognizing these gentle beings as symbols of compassion and selfless giving. With your generous support, we ensure every cow receives daily attention, proper nutrition, veterinary care, and a safe, loving environment where they can thrive. We believe that every cow deserves dignity, respect, and protection throughout their lives. Our foundation operates with complete transparency, ensuring that every contribution directly benefits the well-being of our cows. Through dedicated care, modern facilities, and compassionate volunteers, we create a sanctuary where these sacred animals can live peacefully, free from harm, surrounded by love and devotion. Join us in this noble mission of cow protection and experience the joy of making a meaningful difference in their lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Compassionate Care
              </h3>
              <p className="text-muted-foreground">
                Daily feeding, medical attention, and loving care for every cow
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Transparent Giving
              </h3>
              <p className="text-muted-foreground">
                Every rupee goes directly to cow care and shelter maintenance
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Visit Us
              </h3>
              <p className="text-muted-foreground">
                Come meet our cows and see how your donations make a difference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Every Cow Deserves Love
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your support provides food, shelter, and medical care. Join us in protecting these sacred beings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="text-lg px-8">
                Support Our Mission
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Visit Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Activities Carousel */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Activities
            </h2>
            <p className="text-lg text-muted-foreground">
              See what's happening at our shelter
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {activities.map((activity, index) => (
                <div key={index} className="flex-none w-80 snap-center">

                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img
                      src={activity.image}
                      alt={`Activity ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 bg-card">
                      <h3 className="font-semibold text-foreground mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/activity">
              <Button variant="outline" size="lg">
                View All Activities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;