import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";

const Activity = () => {
  const activities = [
    {
      title: "Daily Feeding Session",
      date: "March 15, 2024",
      description: "Morning feeding session with fresh fodder for all 20 cows",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Veterinary Check-up",
      date: "March 12, 2024",
      description: "Monthly health check-up completed for all cows",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Shelter Maintenance",
      date: "March 10, 2024",
      description: "Completed repairs and cleaning of shelter facilities",
      image: "/api/placeholder/400/300"
    },
    {
      title: "New Cow Rescue",
      date: "March 5, 2024",
      description: "Rescued and welcomed a new cow to our shelter",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Community Visit",
      date: "March 1, 2024",
      description: "Local school children visited to learn about cow care",
      image: "/api/placeholder/400/300"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Our Activities
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Stay updated with our daily activities and shelter events
            </p>

            <div className="space-y-8">
              {activities.map((activity, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-semibold text-foreground">
                            {activity.title}
                          </h3>
                          <span className="text-sm text-muted-foreground">{activity.date}</span>
                        </div>
                        <p className="text-muted-foreground">{activity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Activity;
