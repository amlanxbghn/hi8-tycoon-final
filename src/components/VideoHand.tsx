import React from "react";

const VideoHand = () => {
  return (
    <div className="px-4">
      <div className="relative w-full bg-gradient-to-br from-[#FA9214] to-[#F90200] flex justify-center items-end overflow-hidden pt-16 rounded-3xl">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center select-none">
          <span className="container mx-auto text-center font-bold text-white/75 text-[45px] md:text-[120px] lg:text-[160px] xl:text-[200px]">
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
    </div>
  );
};

export default VideoHand;
