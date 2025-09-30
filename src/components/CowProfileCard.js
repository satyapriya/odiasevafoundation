import { Heart } from "lucide-react";

const CowProfileCard = ({ name, story, image }) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={`Photo of ${name}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Heart className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">{name}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{story}</p>
      </div>
    </div>
  );
};

export default CowProfileCard;
