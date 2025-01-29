import React from 'react';
import { Shield, Code, Megaphone, Users, LucideIcon } from 'lucide-react';

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col space-y-4">
    <div className="w-8 h-8">
      <Icon className="w-full h-full stroke-[1.5]" />
    </div>
    <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: Code,
      title: "Open source",
      description: "Status is a community project. Anyone can build, contribute to and fork its source code."
    },
    {
      icon: Users,
      title: "Decentralised",
      description: "Communities are exclusively powered by their members running the Status desktop app."
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Self-custodial keys safeguard your wallets and messages via elliptic curve cryptography."
    },
    {
      icon: Users,
      title: "Community driven",
      description: "SNT holders can influence future developments and governance decisions."
    },
    {
      icon: Megaphone,
      title: "Permissionless",
      description: "Nobody can stop you chatting with your friends because nobody controls Status' p2p network."
    },
    {
      icon: Shield,
      title: "Free and ad-free",
      description: "No ads. No paid tier. No imposed limits. It's just free."
    }
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-16">Built different</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;