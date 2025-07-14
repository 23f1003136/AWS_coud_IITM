
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cloud, Code, Server, Database, Settings, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-tech text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated cloud decorations */}
      <div className="absolute top-20 left-10 opacity-10 float-slow">
        <Cloud size={120} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 float">
        <Cloud size={90} />
      </div>
      <div className="absolute top-40 right-20 opacity-10 float-fast">
        <Server size={70} />
      </div>
      <div className="absolute bottom-40 left-20 opacity-10 float">
        <Code size={70} />
      </div>
      <div className="absolute top-1/3 left-1/4 opacity-10 float-slow">
        <Database size={60} />
      </div>
      <div className="absolute bottom-1/3 right-1/4 opacity-10 float-fast">
        <Settings size={80} />
      </div>
      <div className="absolute top-1/2 right-1/3 opacity-10 float">
        <Globe size={100} />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-aws-orange text-white px-4 py-1 rounded-full mb-6 slide-in-bottom">
            Welcome to AWS Cloud Club – IIT Madras
          </div>
          
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 slide-in-bottom animate-delay-100 leading-tight">
            Empowering Future <span className="text-aws-orange">Tech Leaders</span> at IIT Madras
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 slide-in-bottom animate-delay-200 max-w-3xl mx-auto">
            Building cloud expertise through hands-on learning, expert-led workshops,
            and collaborative projects with AWS technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 slide-in-bottom animate-delay-300">
            <Button asChild size="lg" className="bg-aws-orange hover:bg-aws-lightorange text-white border-none hover-lift">
              <Link to="https://forms.gle/WNhhN8ung7MmQfhJ7">Join Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent hover:bg-white/10 text-white border-white hover-lift">
              <Link to="/events">Explore Events</Link>
            </Button>
          </div>
          
          {/* Added feature badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-4 slide-in-bottom animate-delay-400">
            <div className="py-2 px-5 bg-white/10 backdrop-blur-sm rounded-full text-sm flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400"></span>
              Expert-Led Workshops
            </div>
            <div className="py-2 px-5 bg-white/10 backdrop-blur-sm rounded-full text-sm flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-400"></span>
              Hands-on Projects
            </div>
            <div className="py-2 px-5 bg-white/10 backdrop-blur-sm rounded-full text-sm flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-400"></span>
              AWS Certifications
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced curved wave bottom shape with animation */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="animate-pulse w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,85.3C96,75,192,53,288,64C384,75,480,117,576,117.3C672,117,768,75,864,69.3C960,64,1056,96,1152,106.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
