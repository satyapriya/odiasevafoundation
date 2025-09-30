import Navbar from "./Navbar";
import Footer from "./Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Expenses = () => {
  const expenses = [
    {
      type: "Daily",
      perCow: "₹206",
      forTwenty: "₹4,120",
    },
    {
      type: "Monthly",
      perCow: "₹6,180",
      forTwenty: "₹1,23,600",
    },
    {
      type: "Yearly",
      perCow: "₹75,190",
      forTwenty: "₹15,03,800",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Transparent Care Costs
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in complete transparency. Here's exactly how your donations 
              help care for our 20 cows.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Expense Breakdown</CardTitle>
              <CardDescription>
                Complete breakdown of costs for food, medical care, and shelter maintenance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold text-base">Expense Type</TableHead>
                      <TableHead className="font-semibold text-base">Per Cow</TableHead>
                      <TableHead className="font-semibold text-base">For 20 Cows</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {expenses.map((expense) => (
                      <TableRow key={expense.type}>
                        <TableCell className="font-medium">{expense.type}</TableCell>
                        <TableCell className="text-primary font-semibold">{expense.perCow}</TableCell>
                        <TableCell className="text-primary font-semibold">{expense.forTwenty}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Note:</strong> Every rupee goes directly towards 
                  food, medical treatment, and shelter maintenance for our cows. Our expenses cover:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Fresh fodder and nutritious feed</li>
                  <li>• Clean drinking water systems</li>
                  <li>• Veterinary care and medicines</li>
                  <li>• Shelter maintenance and repairs</li>
                  <li>• Caretaker salaries</li>
                  <li>• Bedding and cleaning supplies</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Your contribution, no matter the size, makes a real difference
            </p>
            <Link to="/donate">
              <Button size="lg" className="text-lg px-8">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Expenses;
