import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const DonationTierCard = ({ tierName, amount, covers, description, featured }) => {
  return (
    <Card className={`relative ${featured ? 'ring-2 ring-primary shadow-lg' : 'shadow-md'}`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{tierName}</CardTitle>
        <div className="text-3xl font-bold text-primary mt-2">{amount}</div>
        <CardDescription className="text-sm">{covers}</CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <p className="text-muted-foreground text-sm">{description}</p>
        <Button className="w-full" size="lg">
          Donate Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default DonationTierCard;
