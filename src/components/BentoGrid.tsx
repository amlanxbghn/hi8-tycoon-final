"use client";

import React, { useState, useEffect } from "react";

const ProgressCircle = () => {
  const [progress, setProgress] = useState(0);
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(50);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="10"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#4ade80"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
          style={{
            transition: "stroke-dashoffset 1.5s ease-in-out",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-bold">{Math.round(progress)}%</span>
      </div>
    </div>
  );
};

const StockChart = () => (
  <svg className="w-full h-12 mt-auto" viewBox="0 0 100 30">
    <path
      d="M0 15 L10 12 L20 18 L30 15 L40 20 L50 16 L60 25 L70 8 L80 18 L90 15 L100 20"
      fill="none"
      stroke="rgba(255,255,255,0.5)"
      strokeWidth="2"
    />
  </svg>
);

const BentoGrid = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hero Section - Full Width */}
        <div className="md:col-span-2 bg-blue-500 rounded-3xl p-8 h-72"></div>

        {/* Two Column Section */}
        <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center">
          <ProgressCircle />
          <h2 className="mt-8 text-5xl font-semibold leading-tight md:max-w-lg mx-auto">
            50% of all businesses miss out on their true marketing potential.
            <br />
            <span className="text-4xl text-emerald-500">
              We're here to change that.
            </span>
          </h2>
        </div>

        <div className="bg-[#FA9214] rounded-3xl p-8 flex flex-col h-full">
          <div className="flex flex-col h-full">
            <h2 className="text-white text-5xl font-semibold leading-tight mb-4">
              Partner with Hi8 and watch your brand soar.
            </h2>
            <p className="text-white text-xl mb-2">Start a Project with Us</p>
            <StockChart />
            <div className="mt-auto">
              <button className="text-white text-xl flex items-center group">
                Contact Us
                <svg
                  className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Full Width */}
        <div className="md:col-span-2 bg-purple-500 rounded-3xl p-8 h-80"></div>
      </div>
    </div>
  );
};

export default BentoGrid;
