import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  featured: boolean;
  backgroundColor: string;
  textColor: string;
  textStyle?: string;
}

interface ServiceCardProps {
  service: Service;
}

const features = [
  "Social Media Management",
  "SEO Optimization",
  "Email Marketing",
  "PPC Campaigns",
  "Marketing Analytics",
  "Content Strategy",
  "Lead Generation",
];

const ServicesGrid = () => {
  const services: Service[] = [
    {
      title: 'Explore Our Services',
      description: '',
      featured: true,
      backgroundColor: 'bg-white',
      textColor: 'text-gray-900',
      textStyle: 'text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-center mx-auto',
    },
    {
      title: 'Brand Identity\nCreation',
      description: 'Crafting Unique and Memorable Brand Identities',
      featured: false,
      backgroundColor: 'bg-white',
      textColor: 'text-black',
      textStyle: '',
    },
    {
      title: 'Web Design\n& Development',
      description: 'Ensuring Intuitive and Delightful User Experiences',
      featured: false,
      backgroundColor: 'bg-gradient-to-br from-[#FA9214] to-[#F90200]',
      textColor: 'text-white',
      textStyle: '',
    },
    {
      title: 'Content\nMarketing',
      description: 'Delivering Engaging and Effective Content Strategies',
      featured: false,
      backgroundColor: 'bg-white',
      textColor: 'text-black',
      textStyle: '',
    },
  ];

  const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
    <div
      className={`relative overflow-hidden rounded-3xl h-full ${service.backgroundColor}`}
    >
      <div className={`h-full flex flex-col ${service.textColor}`}>
        <div className="px-4 md:px-8 pt-4 md:pt-8">
          <h2 className={`text-2xl lg:text-4xl font-semibold tracking-tight leading-tight whitespace-pre-line ${service.textStyle || ''}`}>
            {service.title === 'Explore Our Services' ? (
              <>
                <span>Explore Our </span>
                <span className="bg-gradient-to-br from-[#FA9214] via-[#F90200] to-[#F90200] text-transparent bg-clip-text">Services</span>
              </>
            ) : (
              service.title
            )}
          </h2>
        </div>
        {service.title === 'Explore Our Services' && (
          <img src="/studio.png" alt="Studio" className="w-full h-auto" />
        )}
        {service.description && (
          <div className="p-4 md:p-8 flex justify-between items-center gap-4">
            <p className="font-medium md:text-lg flex-1">
              {service.description}
            </p>
            <div className="relative w-8 h-8 md:w-12 md:h-12 group overflow-hidden cursor-pointer flex-shrink-0">
              <div className="transition-transform duration-300 absolute inset-0 translate-y-full group-hover:translate-y-0">
                <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              <div className="transition-transform duration-300 absolute inset-0 group-hover:-translate-y-full">
                <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-full">
          <ServiceCard service={services[0]} />
        </div>
        <div className="flex flex-col gap-4">
          {services.slice(1).map((service, index) => (
            <div key={index} className="flex-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        {features.map((feature) => (
          <div
            key={feature}
            className="bg-white border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
          >
            <span className="bg-gradient-to-br from-[#FA9214] to-[#F90200] text-white size-7 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
              ✦
            </span>
            <span className="font-medium md:text-lg">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
