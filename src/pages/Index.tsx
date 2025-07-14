import HeroSection from "@/components/home/HeroSection";
import PillarsSection from "@/components/home/PillarsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import { useEffect, useRef } from "react";

const Index = () => {
  // For scroll animations
  const statsRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements with refs
    if (statsRef.current) observer.observe(statsRef.current);
    if (eventsRef.current) observer.observe(eventsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <HeroSection />
      <PillarsSection />

      {/* Upcoming Events Section */}
      <section className="bg-gray-50 py-16 md:py-24 overflow-hidden" ref={eventsRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-in-bottom">
            <h2 className="text-3xl md:text-4xl font-bold text-aws-blue mb-4">
              Upcoming Events
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-aws-darkgrey">
              Check back soon for our upcoming workshops and events.
            </p>
          </div>

          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-2xl text-gray-500">Coming Soon...</p>
          </div>

          <div className="text-center mt-12 slide-in-bottom animate-delay-400">
            <Button asChild className="bg-aws-blue hover:bg-aws-darkgrey hover-lift">
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-aws-blue text-white py-16 md:py-24" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 backdrop-blur-sm bg-white/5 rounded-lg hover-lift">
              <div className="text-4xl font-bold text-aws-orange mb-2 float">500+</div>
              <div className="mt-2">Student Members</div>
            </div>
            <div className="p-6 backdrop-blur-sm bg-white/5 rounded-lg hover-lift">
              <div className="text-4xl font-bold text-aws-orange mb-2 float">25+</div>
              <div className="mt-2">Events Hosted</div>
            </div>
            <div className="p-6 backdrop-blur-sm bg-white/5 rounded-lg hover-lift">
              <div className="text-4xl font-bold text-aws-orange mb-2 float">5+</div>
              <div className="mt-2">Industry Partners</div>
            </div>
            <div className="p-6 backdrop-blur-sm bg-white/5 rounded-lg hover-lift">
              <div className="text-4xl font-bold text-aws-orange mb-2 float">10+</div>
              <div className="mt-2">AWS Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="py-20 bg-gradient-azure text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 slide-in-bottom">
            Ready to Start Your Cloud Journey?
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 slide-in-bottom animate-delay-100">
            Join AWS Cloud Club at IIT Madras and gain access to hands-on workshops,
            certification resources, industry projects, and a community of cloud enthusiasts.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-aws-orange hover:bg-aws-lightorange text-white border-none hover-glow slide-in-bottom animate-delay-200"
          >
            <Link to="https://forms.gle/WNhhN8ung7MmQfhJ7">Join Our Community Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;