import React from "react";

const Hero = () => {
  return (
    <section className="container py-16 lg:py-24">
      <div className="mx-auto bg-white rounded-3xl p-4 md:p-8">
        <div className="flex flex-col items-center text-center">
          {/* Two-line heading instead of three */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl tracking-tight leading-tight font-medium max-w-4xl mb-8">
            Elevate your story <br/>to new Heightsss
          </h1>

          {/* Subheading with correct styling */}
          <p className="text-lg md:text-[23px] text-gray-600 mb-10">
            Bringing your Brand to Life, One Platform at a Time
          </p>

          {/* Button Group with exact styling */}
          <div className="flex flex-wrap justify-center gap-2">
            <button className="w-50 px-8 py-2.5 rounded-xl bg-white text-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
              View Works
            </button>
            <button className="w-50 px-8 py-2.5 rounded-xl bg-[#FF0012] text-white text-lg font-medium hover:bg-[#C4321F] transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto relative">
        <div className="rounded-3xl overflow-hidden">
          <video
            className="w-full h-auto"
            autoPlay
            muted
            loop
            playsInline
            poster="/api/placeholder/1280/720"
          >
            <source src="/heroVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
