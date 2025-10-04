import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import activity1 from "../assets/images/activity1.jpg";
import activity2 from "../assets/images/activity2.jpg";
import activity3 from "../assets/images/activity3.jpg";
import activity4 from "../assets/images/activity4.jpg";
import activity5 from "../assets/images/activity5.jpg";
import activity6 from "../assets/images/activity6.jpg";

const Activity = () => {
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
