
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  className?: string;
}

const BlogCard = ({
  id,
  title,
  excerpt,
  date,
  author,
  image,
  className,
}: BlogCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-md card-hover",
        className
      )}
    >
      <Link to={`/blog/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center text-sm text-aws-darkgrey mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>By {author}</span>
        </div>
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-bold text-aws-blue mb-2 hover:text-aws-orange transition-colors duration-300">
            {title}
          </h3>
        </Link>
        <p className="text-aws-darkgrey mb-4 line-clamp-3">{excerpt}</p>
        <Link
          to={`/blog/${id}`}
          className="inline-block text-aws-orange hover:text-aws-blue transition-colors duration-300 font-medium group"
        >
          Read More <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
