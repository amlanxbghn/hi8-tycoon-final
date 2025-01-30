import React from 'react';

const VideoHand = () => {
  return (
    <div className="relative w-full min-h-[600px] bg-gradient-to-br from-orange-50/50 to-orange-200 flex justify-center items-end overflow-hidden pt-32">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center select-none">
        <span className="container mx-auto text-center font-bold text-orange-300/50 text-[45px] md:text-[120px] lg:text-[160px] xl:text-[200px]">
          Grow with us.
        </span>
      </div>
      
      {/* Phone Container */}
      <div className="relative ml-24 md:ml-36 lg:ml-44 w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px] z-10">
        <img
          src="/handPhone.png"
          alt="Hand holding phone mockup"
          className=""
        />
      </div>
    </div>
  );
};

export default VideoHand;