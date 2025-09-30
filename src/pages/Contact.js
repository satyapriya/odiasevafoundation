import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Visit Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Come meet our cows and see how your donations make a difference. 
              We welcome visitors, volunteers, and supporters.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  Reach out to us for visits, volunteering, or any questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone & WhatsApp</h3>
                    <a href="tel:+91XXXXXXXXXX" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 XXXX XXXXXX
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Available 9 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:contact@odiaseva.org" className="text-muted-foreground hover:text-primary transition-colors">
                      contact@odiaseva.org
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Odia Seva Foundation<br />
                      Village Road, District Name<br />
                      Odisha, India - 751XXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Visiting Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-sm text-accent mt-2">Please call ahead to schedule your visit</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full" asChild>
                    <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                      Message on WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Location Map</CardTitle>
                <CardDescription>
                  Find us on the map
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.7353533833934!2d85.82458931490292!3d20.296058486393597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Odia Seva Foundation Location"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Located in the peaceful countryside of Odisha
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Interested in Volunteering?
              </h3>
              <p className="text-muted-foreground mb-6">
                We welcome volunteers who want to help care for our cows. 
                Whether it's feeding, cleaning, or spending time with them, 
                every helping hand makes a difference.
              </p>
              <Button variant="default" asChild>
                <a href="mailto:contact@odiaseva.org?subject=Volunteering Inquiry">
                  Become a Volunteer
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
