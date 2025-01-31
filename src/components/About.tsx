import React from "react";

const About = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto pt-12">
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
          <div className="sm:w-1/4">
            <h2 className="lg:text-2xl font-bold text-gray-900">
              ABOUT US
            </h2>
          </div>

          <div className="sm:w-3/4">
            <div className="space-y-12 bg-gradient-to-br from-[#FA9214] via-orange-500 to-[#F90200] text-transparent bg-clip-text pb-12">
              <p className="text-3xl md:text-4xl lg:text-6xl font-medium leading-tighter">
                Hi8 is a marketing agency driven by young-creatives transforming
                how brands connect with consumers. We blend creativity and
                digital expertise to engage with the new generation.
              </p>

              <p className="text-3xl md:text-4xl lg:text-6xl font-medium leading-tighter">
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

export default About;
