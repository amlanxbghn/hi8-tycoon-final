// import React from 'react';

// interface FeatureCardProps {
//   title: string;
//   description: string;
// }

// const FeatureCard = ({ title, description }: FeatureCardProps) => (
//   <div className="mb-8">
//     <h2 className="text-[#F12C00] text-lg font-semibold mb-2">{title}</h2>
//     <p className="text-gray-700 text-base lg:text-lg">{description}</p>
//   </div>
// );

// const FeaturesGrid = () => {
//   const features = [
//     {
//       title: "Lead the Pack. Shape the Future.",
//       description: "At hi8, we’re a next-gen agency that brings fresh ideas and bold strategies to the digital world. We work with visionary brands who want to disrupt the status quo and shape the future. Ready to make your mark?"
//     },
//     {
//       title: "Culture-First Campaigns",
//       description: "We build more than just campaigns—we create cultural moments. From viral content to immersive experiences, we connect your brand to what’s relevant, authentic, and trending, making sure it resonates with the people who matter most."
//     },
//     {
//       title: "Data-Driven, Human-Centered",
//       description: "Data and creativity go hand-in-hand. At hi8, we blend smart analytics with real human insight to craft campaigns that drive action. It’s about more than just numbers—it’s about making real connections and creating lasting impact."
//     },
//     {
//       title: "AI-Enhanced Creativity",
//       description: "AI is the future of marketing, and we’re embracing it. We leverage cutting-edge AI tools to create smarter, more personalized campaigns that adapt in real time, allowing your brand to stay relevant and ahead of the curve. Creativity meets technology for results that matter."
//     },
//     {
//       title: "Creative that Pops. Results that Stick.",
//       description: "At hi8, we don’t just create visually stunning campaigns—we make sure they deliver. Our creative sparks attention and our strategies drive measurable results. We push boundaries to make sure your brand stands out and stays top-of-mind."
//     },
//     {
//       title: "Collaborative, Transparent, Always Evolving",
//       description: "We believe in the power of collaboration. At hi8, your feedback is key. We work alongside you, evolving strategies to stay ahead of the curve and create meaningful, long-lasting change. Together, we build the future."
//     }
//   ];

//   return (
//     <div className="container mx-auto py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
//         {features.map((feature, index) => (
//           <FeatureCard
//             key={index}
//             title={feature.title}
//             description={feature.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturesGrid;
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <div className="mb-8 lg:mb-0">
    <h2 className="text-[#F90200] text-lg font-medium mb-2">{title}</h2>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);

const FeaturesGrid = () => {
  const features = [
    {
      title: "Lead the Pack. Shape the Future.",
      description:
        "At hi8, we’re a next-gen agency that brings fresh ideas and bold strategies to the digital world. We work with visionary brands who want to disrupt the status quo and shape the future. Ready to make your mark?",
    },
    {
      title: "Culture-First Campaigns",
      description:
        "We build more than just campaigns—we create cultural moments. From viral content to immersive experiences, we connect your brand to what’s relevant, authentic, and trending, making sure it resonates with the people who matter most.",
    },
    {
      title: "Data-Driven, Human-Centered",
      description:
        "Data and creativity go hand-in-hand. At hi8, we blend smart analytics with real human insight to craft campaigns that drive action. It’s about more than just numbers—it’s about making real connections and creating lasting impact.",
    },
    {
      title: "AI-Enhanced Creativity",
      description:
        "AI is the future of marketing, and we’re embracing it. We leverage cutting-edge AI tools to create smarter, more personalized campaigns that adapt in real time, allowing your brand to stay relevant and ahead of the curve. Creativity meets technology for results that matter.",
    },
    {
      title: "Creative that Pops. Results that Stick.",
      description:
        "At hi8, we don’t just create visually stunning campaigns—we make sure they deliver. Our creative sparks attention and our strategies drive measurable results. We push boundaries to make sure your brand stands out and stays top-of-mind.",
    },
    {
      title: "Collaborative, Transparent, Always Evolving",
      description:
        "We believe in the power of collaboration. At hi8, your feedback is key. We work alongside you, evolving strategies to stay ahead of the curve and create meaningful, long-lasting change. Together, we build the future.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
