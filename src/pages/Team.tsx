import { Linkedin, Github, Mail } from "lucide-react";
import Footer from "@/components/layout/Footer";

const Team = () => {
  // Complete team data with all 9 members
  const teamData = [
    {
      id: "sujit",
      name: "Sujit Laware",
      role: "Secretary",
      image: "./src/images/sujit.jpg",
      linkedin: "https://www.linkedin.com/in/sujit-laware?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/sujitlaware1809",
    },
    {
      id: "tarun",
      name: "Tarun Gandmare",
      role: "Deputy Secretary",
      image: "./src/images/tarun.jpg",
      linkedin: "https://www.linkedin.com/in/tarungangwar08",
      github: "https://github.com/23f3004491",
    },
    {
      id: "ankit",
      name: "Ankit Kumar",
      role: "Event Coordinator & WebOps Lead",
      image: "./src/images/ankitkumar.jpg",
      linkedin: "https://www.linkedin.com/in/ankit-kumar-098a3a255/",
      github: "https://github.com/23f1003136",
    },
    {
      id: "sagar",
      name: "Sagar Chaudhary",
      role: "Content Lead",
      image: "./src/images/sagar.jpg",
      linkedin: "https://www.linkedin.com/in/sagar-k-chaudhary-5a1203299/",
      github: "https://github.com/23f2002523",
    },
    {
      id: "tanushree",
      name: "Tanushree",
      role: "Graphic Designer",
      image: "./src/images/tanushree.jpg",
      linkedin: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
      github: "https://github.com/Tanushree2806",
    },
    {
      id: "subhanshu",
      name: "Subhanshu Mishra",
      role: "Social Media Manager",
      image: "./src/images/shubhanshu.jpg",
      linkedin: "https://www.linkedin.com/in/shubhanshu-mishra-499180311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com",
    },
    {
      id: "parth",
      name: "Parth Chitranshi",
      role: "Content Writer",
      image: "./src/images/parth.jpg",
      linkedin: "https://www.linkedin.com/in/parth-chitranshi-8bbb77244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/22f2000552",
    },
    {
      id: "parmanand",
      name: "Parmanand ",
      role: "Outreach Coordinator",
      image: "",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      id: "riya",
      name: "Riya Saini",
      role: "Graphic Designer",
      image: "",
      linkedin: "https://www.linkedin.com/in/riyasaini05",
      github: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-aws-blue text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="max-w-3xl mx-auto text-xl">
            Meet the passionate individuals driving the AWS Cloud Club at IIT Madras
          </p>
        </div>
      </section>

      {/* Main Team Container Card */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            {/* Team Grid - All 9 members displayed */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamData.map((member) => (
                <div
                  key={member.id}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-gray-200 flex flex-col items-center"
                >
                  {/* Circular Profile Photo */}
                  <div className="relative h-40 w-40 mb-6 overflow-hidden rounded-full border-4 border-white shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Member Details */}
                  <div className="text-center flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-aws-blue font-medium mb-4">{member.role}</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 mt-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-100"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-gradient-to-r from-aws-blue to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to be part of our team?
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            You can apply to join our core team below.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 md:p-10">
            <h2 className="text-3xl font-bold text-aws-blue mb-8 text-center">Application Form</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">First Name*</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aws-blue focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Last Name*</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aws-blue focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email*</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aws-blue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Why do you want to join?*</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aws-blue focus:border-transparent"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Relevant Experience</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aws-blue focus:border-transparent"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-aws-orange hover:bg-aws-darkorange text-white py-3 rounded-lg font-medium">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;