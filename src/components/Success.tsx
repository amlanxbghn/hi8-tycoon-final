"use client";

import React, { useState, useEffect, useRef } from "react";

const SuccessPage = () => {
  const metrics = [
    {
      number: 30,
      label: "SUCCESSFUL PROJECTS",
    },
    {
      number: 20,
      label: "PRODUCT LAUNCHES",
    },
    {
      number: 10,
      label: "BRANDS HELPED",
    },
  ];

  const AnimatedNumber = ({ number }: { number: number }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const duration = 1000;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;

        if (progress < duration) {
          const currentCount = Math.floor((progress / duration) * number);
          setCount(currentCount);
          requestAnimationFrame(animate);
        } else {
          setCount(number);
        }
      };

      const animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, [number, isVisible]);

    return (
      <div ref={elementRef} className="flex items-center">
        {count}
        <span className="text-[#FF0012]">+</span>
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 pb-12">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-3xl p-6">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="text-3xl md:text-4xl lg:text-6xl font-medium leading-tight">
                <AnimatedNumber number={metric.number} />
              </div>
              <div className="text-gray-900 font-bold">
                {metric.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessPage;
