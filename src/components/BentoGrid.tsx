"use client";

import React, { useState, useEffect, useRef } from "react";

const ProgressCircle = () => {
  const [progress, setProgress] = useState(0);
  const [displayedNumber, setDisplayedNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    let animationFrame: number | undefined;
    let startTime: number | undefined;
    const duration = 1500; // 1.5 seconds
    const targetProgress = 75;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentProgress = progress * targetProgress;
      setProgress(currentProgress);
      setDisplayedNumber(Math.round(currentProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (isVisible) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible]);

  return (
    <div className="relative w-32 h-32" ref={ref}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="10"
          strokeLinecap="round"
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
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          style={{
            transition: "none"
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-bold">
          {displayedNumber}%
        </span>
      </div>
    </div>
  );
};

const GrowthChart = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
  
    const path = "M0 40 C10 45, 15 30, 25 35 S35 45, 45 35 S55 20, 65 25 S75 35, 85 15 S95 10, 100 5";
  
    return (
      <div className="h-40 w-full">
        <svg className="w-full h-full" viewBox="0 0 100 50" ref={ref}>
          {/* Grid lines */}
          {[0, 10, 20, 30, 40, 50].map((y) => (
            <path
              key={y}
              d="M0 0 H100"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
              transform={`translate(0,${y})`}
            />
          ))}
          
          {/* Vertical grid lines */}
          {[0, 20, 40, 60, 80, 100].map((x) => (
            <path
              key={x}
              d="M0 0 V50"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
              transform={`translate(${x},0)`}
            />
          ))}
          
          {/* Growth line */}
          <path
            d={path}
            fill="none"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              strokeDasharray: "300",
              strokeDashoffset: isVisible ? "0" : "300",
              transition: "stroke-dashoffset 2s ease-in-out"
            }}
          />
          
          {/* Gradient fill under the line */}
          <path
            d={`${path} L100 50 L0 50 Z`}
            fill="url(#gradient)"
            opacity="0.2"
            style={{
              opacity: isVisible ? "0.2" : "0",
              transition: "opacity 2s ease-in-out"
            }}
          />
          
          {/* Define gradient */}
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
};

const BentoGrid = () => {
  return (
    <div className="container mx-auto py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left-aligned card with justified content */}
        <div className="bg-white rounded-3xl shadow-sm p-8 flex flex-col items-start justify-between h-full">
          <ProgressCircle />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tighter">
            75% of all businesses miss out on their true marketing potential.
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text">
              We're here to change that.
            </span>
          </h2>
        </div>

        <div className="bg-gradient-to-br from-[#FA9214] to-[#F90200] rounded-3xl shadow-sm">
          <div className="p-8">
            <div>
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tighter mb-4">
                Partner with Hi8 <br/>and watch your Brand soar.
              </h2>
              <p className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">Start a Project with Us</p>
            </div>
            
            <div className="mt-8">
              <GrowthChart />
            </div>
            
            <a href="mailto:info@hi8.space">
              <button className="text-white font-medium md:text-lg flex items-center group mt-8">
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
