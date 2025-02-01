"use client";

import React from "react";

const Hero = () => {
  const handleViewWorks = () => {
    window.open('https://www.instagram.com/hi8.agency', '_blank');
  };

  const handleScheduleCall = () => {
    window.open('https://calendly.com/sub-hi8/30min', '_blank');
  };

  return (
    <div className="px-4">
      <div className="bg-white rounded-3xl shadow-sm">
        <div className="container mx-auto pt-8 pb-4 flex flex-col">
          {/* Main Heading - Centered on tablet */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tighter mb-8 md:text-center lg:text-left">
            Infinity Starts at Hi,
            <br />
            and we take you <span className="bg-gradient-to-br from-[#FA9214] via-[#F90200] to-[#F90200] text-transparent bg-clip-text">Higher</span>
          </h1>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Column - Full width on mobile/tablet, 1/4 on desktop */}
            <div className="lg:w-1/4 flex flex-col justify-between gap-4">
              <div>
                <p className="font-medium md:text-lg leading-tighter mb-11 md:text-center lg:text-left">
                  Our professional team is always ready to make your brand
                  visible, audible, and noticeable
                </p>
                {/* Buttons - Stacked on mobile/desktop, side-by-side and centered on tablet */}
                <div className="flex flex-col md:flex-row lg:flex-col gap-4 mb-8 md:justify-center lg:justify-start">
                  <button 
                    onClick={handleViewWorks}
                    className="px-6 py-4 font-medium md:text-lg rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
                  >
                    View Previous Works
                  </button>
                  <button 
                    onClick={handleScheduleCall}
                    className="px-6 py-4 font-medium md:text-lg rounded-xl bg-[#F90200] text-white hover:bg-[#e00200] transition-colors"
                  >
                    Schedule a Call
                  </button>
                </div>
              </div>

              {/* Video */}
              <div className="rounded-3xl overflow-hidden aspect-video w-full">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/heroVideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right Column - Full width on mobile/tablet, 3/4 on desktop */}
            <div className="lg:w-3/4 flex flex-col justify-between">
              <div className="rounded-3xl overflow-hidden aspect-video w-full">
                <img
                  src="/heroImage.jpg"
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
