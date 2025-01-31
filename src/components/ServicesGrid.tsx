import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  featured: boolean;
  backgroundColor: string;
  textColor: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServicesGrid = () => {
  const services: Service[] = [
    {
      title: 'EXPLORE OUR\nSERVICES',
      description: '',
      featured: true,
      backgroundColor: 'bg-white',
      textColor: 'text-black'
    },
    {
      title: 'BRAND IDENTITY\nCREATION',
      description: 'CRAFTING UNIQUE AND\nMEMORABLE BRAND IDENTITIES',
      featured: false,
      backgroundColor: 'bg-white',
      textColor: 'text-black'
    },
    {
      title: 'WEB DESIGN\n& DEVELOPMENT',
      description: 'CRAFTING UNIQUE AND\nMEMORABLE BRAND IDENTITIES',
      featured: false,
      backgroundColor: 'bg-gradient-to-br from-[#FA9214] to-[#F90200]',
      textColor: 'text-white'
    },
    {
      title: 'CONTENT\nMARKETING',
      description: 'ENSURING INTUITIVE AND\nDELIGHTFUL USER EXPERIENCES',
      featured: false,
      backgroundColor: 'bg-white',
      textColor: 'text-black'
    }
  ];

  const AbstractImage = () => (
    <div className="absolute bottom-0 right-0 w-64 h-64 opacity-30">
      <div className="absolute w-32 h-32 rounded-full bg-white/10 bottom-8 right-8" />
    </div>
  );

  const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
    <div
      className={`relative overflow-hidden p-8 rounded-3xl h-full ${service.backgroundColor}`}
    >
      <div className={`h-full flex flex-col ${service.textColor}`}>
        <h2 className="text-2xl lg:text-4xl font-semibold tracking-tight leading-tight whitespace-pre-line mb-4">
          {service.title}
        </h2>
        {service.description && (
          <div className="flex justify-between items-center mt-auto">
            <p className="text-sm md:text-base whitespace-pre-line max-w-[80%]">
              {service.description}
            </p>
            <ArrowUpRight className="w-12 h-12 flex-shrink-0" />
          </div>
        )}
      </div>
      {service.featured && <AbstractImage />}
    </div>
  );

  return (
    <div className="container mx-auto px-4">
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
    </div>
  );
};

export default ServicesGrid;