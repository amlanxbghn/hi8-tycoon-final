import React from 'react';

const CTAImage = () => {
  return (
    <div id='contact' className="flex flex-col max-w-3xl mx-auto">
      <div className="w-full pb-6 pt-16 lg:pt-24">
        <img src="/appleTogether.svg" alt="Apple Together" className="w-full" />
      </div>
      <div className="pb-16 lg:pb-24">
        <p className="font-medium md:text-lg leading-tight flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F90200] animate-pulse"></span>
          Available for Projects
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
          info@hi8.space
        </h1>
      </div>
    </div>
  );
};

export default CTAImage;