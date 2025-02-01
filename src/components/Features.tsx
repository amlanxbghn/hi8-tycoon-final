import React from "react";

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-start space-y-2">
    <div>
      <img src={icon} alt={title} className="w-16 h-16 text-gray-700" />
    </div>
    <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
    <p className="text-lg text-gray-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: "/1.svg",
      title: "Tailored Strategies",
      description:
        "Innovative marketing strategies designed to elevate your brand in a crowded digital space.",
    },
    {
      icon: "/5.svg",
      title: "Unrestricted Creativity",
      description:
        "We offer limitless creative solutions to ensure your brand connects with the right audience.",
    },
    {
      icon: "/4.svg",
      title: "Data-Driven Solutions",
      description:
        "Our campaigns leverage data and tools for a flexible, goal-aligned approach.",
    },
    {
      icon: "/3.svg",
      title: "Community-Focused Approach",
      description:
        "We build strong partnerships and encourage feedback to co-create impactful strategies.",
    },
    {
      icon: "/6.svg",
      title: "Brand Protection",
      description:
        "We safeguard your brand and data with advanced security measures to ensure privacy.",
    },
    {
      icon: "/2.svg",
      title: "Transparency and Collaboration",
      description:
        "We share insights and collaborate closely with clients to drive growth together.",
    },
  ];

  return (
    <div id="advantages" className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="md:text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            Unmatched Expertise
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight bg-gradient-to-br from-[#FA9214] via-[#F90200] to-[#F90200] text-transparent bg-clip-text pb-4">
            The Advantages of Choosing Us
          </h1>
          <p className="text-lg md:text-2xl text-gray-900 max-w-4xl mx-auto">
            Our team brings cutting-edge strategies and personalized care to
            every project ensuring exceptional results with every detail.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <Feature
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
