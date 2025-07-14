
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import { Cloud, Book, Users, Info } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-aws-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AWS Cloud Club</h1>
          <p className="max-w-3xl mx-auto text-xl">
            Building the next generation of cloud computing leaders at IIT Madras
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-aws-blue mb-6">Our Mission</h2>
              <p className="text-aws-darkgrey mb-6">
                The AWS Cloud Club at IIT Madras is dedicated to fostering cloud computing expertise among students 
                through practical learning experiences, industry collaboration, and a supportive community. 
                We aim to bridge the gap between academic knowledge and industry requirements by providing 
                hands-on experience with AWS services.
              </p>
              <p className="text-aws-darkgrey">
                By creating opportunities for students to engage with cloud technologies, 
                we prepare them to become future leaders in tech innovation and digital transformation.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
                alt="Students collaborating"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
                alt="Students at event"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-aws-blue mb-6">Our Vision</h2>
              <p className="text-aws-darkgrey mb-6">
                We envision a future where every student at IIT Madras has the opportunity to develop cloud computing 
                skills that enhance their career prospects and contribute to technological advancement.
              </p>
              <p className="text-aws-darkgrey">
                Our vision is to establish IIT Madras as a hub of cloud innovation, with graduates who are 
                sought after for their practical expertise in AWS technologies and their ability to architect, 
                implement, and manage cloud solutions at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-aws-blue mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-aws-blue bg-opacity-10 p-4 rounded-full inline-block mb-4">
                <Cloud className="h-6 w-6 text-aws-blue" />
              </div>
              <h3 className="text-xl font-semibold text-aws-blue mb-3">Hands-on Learning</h3>
              <p className="text-aws-darkgrey">
                We believe in learning by doing. Our workshops and projects provide real-world experience with AWS services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-aws-orange bg-opacity-10 p-4 rounded-full inline-block mb-4">
                <Book className="h-6 w-6 text-aws-orange" />
              </div>
              <h3 className="text-xl font-semibold text-aws-blue mb-3">Continuous Growth</h3>
              <p className="text-aws-darkgrey">
                We encourage continuous learning and skill development through regular workshops, hackathons, and certification programs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-600 bg-opacity-10 p-4 rounded-full inline-block mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-aws-blue mb-3">Inclusive Community</h3>
              <p className="text-aws-darkgrey">
                We welcome students from all backgrounds and disciplines, fostering a diverse and supportive community.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-600 bg-opacity-10 p-4 rounded-full inline-block mb-4">
                <Info className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-aws-blue mb-3">Innovation Focus</h3>
              <p className="text-aws-darkgrey">
                We encourage creative thinking and innovative approaches to solving real-world problems using cloud technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-aws-blue mb-12 text-center">What We Offer</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-aws-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-aws-blue mb-2">Expert-Led Workshops</h3>
                <p className="text-aws-darkgrey">
                  Regular workshops conducted by industry experts and AWS professionals covering various aspects of cloud computing, 
                  from beginner to advanced levels.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-aws-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-aws-blue mb-2">Hands-on Projects</h3>
                <p className="text-aws-darkgrey">
                  Collaborative projects that allow members to apply their knowledge to real-world problems, 
                  building a portfolio of cloud-based solutions.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-aws-blue mb-2">AWS Certification Support</h3>
                <p className="text-aws-darkgrey">
                  Resources, study groups, and guidance for members pursuing AWS certifications, 
                  enhancing their credentials in the job market.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-aws-blue mb-2">Networking Opportunities</h3>
                <p className="text-aws-darkgrey">
                  Regular interaction with industry professionals, alumni, and fellow students interested in cloud computing 
                  and related technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the AWS Cloud Club Today
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Become part of a community that's passionate about cloud computing and committed to helping each other succeed.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-aws-orange hover:bg-gray-100"
          >
            <Link to="https://forms.gle/WNhhN8ung7MmQfhJ7">Become a Member</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
