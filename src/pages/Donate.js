import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonationTierCard from "../components/DonationTierCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

const Donate = () => {
  const donationTiers = [
    {
      tierName: "Feed a Cow for a Day",
      amount: "₹206",
      covers: "1 cow for 1 day",
      description: "Provide food & basic care for one cow for a single day.",
    },
    {
      tierName: "Cow Guardian (Monthly)",
      amount: "₹6,180",
      covers: "1 cow for 1 month",
      description: "Support a cow's full monthly needs — fodder, water, shelter, and medical care.",
      featured: true,
    },
    {
      tierName: "Cow Protector (Yearly)",
      amount: "₹75,190",
      covers: "1 cow for 1 year",
      description: "Adopt a cow for a full year and cover all her needs.",
    },
    {
      tierName: "Shelter Supporter (Daily Herd)",
      amount: "₹4,120",
      covers: "20 cows for 1 day",
      description: "Feed and care for all 20 cows for one day.",
    },
    {
      tierName: "Shelter Supporter (Monthly Herd)",
      amount: "₹1,23,600",
      covers: "20 cows for 1 month",
      description: "Support the entire shelter's monthly expenses.",
      featured: true,
    },
    {
      tierName: "Shelter Patron (Yearly Herd)",
      amount: "₹15,03,800",
      covers: "20 cows for 1 year",
      description: "Become a patron by sponsoring all cows for the entire year.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Be Their Guardian
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a way to help our sacred cows. Every contribution provides 
              food, shelter, and medical care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {donationTiers.map((tier) => (
              <DonationTierCard
                key={tier.tierName}
                tierName={tier.tierName}
                amount={tier.amount}
                covers={tier.covers}
                description={tier.description}
                featured={tier.featured}
              />
            ))}
          </div>

          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Bank Details</CardTitle>
              <CardDescription>
                Transfer directly to our account or contact us for other payment methods
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-6 bg-muted rounded-lg space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-muted-foreground">Account Name:</span>
                  <span className="font-medium text-foreground">Odia Seva Foundation</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-muted-foreground">Account Number:</span>
                  <span className="font-medium text-foreground">XXXX XXXX XXXX</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-muted-foreground">IFSC Code:</span>
                  <span className="font-medium text-foreground">XXXXXXX</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-muted-foreground">Bank Name:</span>
                  <span className="font-medium text-foreground">XXXX Bank</span>
                </div>
              </div>

              <div className="p-6 bg-muted rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">UPI Payment</h3>
                <p className="text-muted-foreground text-sm mb-2">Scan QR code or use UPI ID:</p>
                <p className="font-medium text-foreground">odiaseva@upi</p>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  For international donations via PayPal or to receive a donation receipt, 
                  please contact us.
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:contact@odiaseva.org">Contact Us</a>
                </Button>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
                <p className="text-sm text-foreground font-medium mb-2">
                  🎁 Adopt-a-Cow Program
                </p>
                <p className="text-sm text-muted-foreground">
                  Monthly or yearly donors receive a digital certificate with their 
                  adopted cow's photo and story!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
