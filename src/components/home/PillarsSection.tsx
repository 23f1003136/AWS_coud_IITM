
import { Cloud, Brain, Code } from "lucide-react";

const PillarsSection = () => {
  const pillars = [
    {
      title: "Cloud Computing",
      description:
        "Master AWS services, architecture, and best practices through hands-on labs, projects, and training sessions.",
      icon: <Cloud className="h-12 w-12 text-aws-orange mb-4" />,
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      delay: "animate-delay-100",
    },
    {
      title: "AI/ML",
      description:
        "Explore machine learning models, datasets, and AI services on AWS to build intelligent applications.",
      icon: <Brain className="h-12 w-12 text-aws-orange mb-4" />,
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
      delay: "animate-delay-200",
    },
    {
      title: "DevOps",
      description:
        "Learn CI/CD pipelines, infrastructure as code, and automated deployment strategies on AWS.",
      icon: <Code className="h-12 w-12 text-aws-orange mb-4" />,
      color: "bg-gradient-to-br from-green-50 to-green-100",
      delay: "animate-delay-300",
    },
  ];

  return (
    <section className="py-16 md:py-24 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-in-bottom">
          <h2 className="text-3xl md:text-4xl font-bold text-aws-blue mb-4">
            Our Focus Areas
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-aws-darkgrey">
            We focus on three pillars of modern cloud technology to prepare students for 
            the future of tech innovation and leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`${pillar.color} rounded-lg p-8 shadow-lg card-hover slide-in-bottom ${pillar.delay}`}
            >
              <div className="text-center">
                <div className="mx-auto inline-block">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-aws-blue mb-4">{pillar.title}</h3>
                <p className="text-aws-darkgrey">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
