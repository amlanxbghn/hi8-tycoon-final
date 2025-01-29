import React from "react";

const ResponsiveText = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-12">
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
          <div className="sm:w-1/4">
            <h2 className="text-2xl lg:text-4xl font-semibold text-gray-900 mb-8 sm:mb-0">
              About us
            </h2>
          </div>
          
          <div className="sm:w-3/4">
            <div className="space-y-16 bg-gradient-to-br from-orange-400 to-orange-600 text-transparent bg-clip-text pb-8">
              <p className="text-4xl lg:text-6xl font-medium leading-tight">
                Hi8 is a youth-driven marketing agency transforming how brands
                connect with consumers. We blend creativity and digital expertise
                to engage the next generation.
              </p>
              
              <p className="text-4xl lg:text-6xl font-medium leading-tight">
                Our disruptive campaigns help brands stand out, lead in their
                industries, and stay ahead in a fast-changing digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveText;