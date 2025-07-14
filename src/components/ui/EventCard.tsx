
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  tags?: string[];
  className?: string;
}

const EventCard = ({
  id,
  title,
  date,
  description,
  image,
  tags = [],
  className,
}: EventCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-lg card-hover",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 bg-aws-blue bg-opacity-80 text-white px-4 py-2 flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-aws-blue mb-2 transition-colors duration-300 hover:text-aws-orange">{title}</h3>
        <p className="text-aws-darkgrey mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-aws-darkgrey transition-colors duration-300 hover:bg-aws-orange hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link 
          to={`/events/${id}`} 
          className="inline-block text-aws-orange hover:text-aws-blue transition-colors font-medium group"
        >
          Learn More <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
