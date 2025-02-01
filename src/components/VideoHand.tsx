"use client";
import React, { useState, useEffect, useRef } from "react";
import { Bell } from "lucide-react";

const VideoHand = () => {
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const phoneRef = useRef(null);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "50px 0px"
      }
    );

    if (phoneRef.current) {
      observer.observe(phoneRef.current);
    }

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  const notifications = [
    {
      id: 1,
      title: "New Message",
      message: "10k new audience in last 30 days."
    },
    {
      id: 2,
      title: "Calendar",
      message: "Hi8 reaching you in 30 minutes"
    }
  ];
  
  return (
    <div className="px-4 py-16 lg:py-24">
      <div className="relative w-full bg-gradient-to-br from-[#FA9214] to-[#F90200] flex justify-center items-end overflow-hidden pt-16 rounded-3xl shadow-sm">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center select-none">
          <span className="container mx-auto text-center font-bold text-white/75 text-[45px] md:text-[120px] lg:text-[160px] xl:text-[200px]">
            Grow with us.
          </span>
        </div>
        
        {/* Phone Container */}
        <div 
          ref={phoneRef}
          className="relative mr-6 md:mr-8 lg:mr-12 w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px] z-10"
        >
          {/* Clock and Date Overlay */}
          <div className="absolute top-[18%] left-3 md:left-5 lg:left-6 right-0 z-20 flex flex-col items-center">
            <div className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
              {formatTime(time)}
            </div>
            <div className="text-white text-[6px] md:text-[8px] lg:text-[10px]">
              {formatDate(time)}
            </div>
            
            {/* Notification Cards */}
            <div className="ml-[122px] md:ml-[170px] lg:ml-[210px] space-y-2 w-[80%]">
              {notifications.map((notification, index) => (
                <div
                  key={notification.id}
                  className={`
                    mt-2 bg-white/20 backdrop-blur-sm rounded-lg p-2 shadow-lg
                    transition-all duration-1000 hover:bg-white/30
                    max-w-[95px] md:max-w-[135px] lg:max-w-[173px]
                    transform
                    ${isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                    }
                  `}
                  style={{
                    transitionDelay: `${index * 500}ms`
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Bell size={8} className="text-white" />
                    <div>
                      <p className="text-white text-[6px] md:text-[8px] lg:text-[10px] font-medium">
                        {notification.title}
                      </p>
                      <p className="text-white/80 text-[5px] md:text-[6px] lg:text-[8px]">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Media Icons - No Animation */}
              <div className="flex gap-2 md:gap-4 pt-8 md:pt-[110px] lg:pt-[148px] pl-[14px] md:pl-[20px] lg:pl-[22px]">
                <a 
                  href="https://instagram.com/hi8.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <img 
                    src="/instagram.svg" 
                    alt="Instagram"
                    className="w-4 md:w-5 lg:w-8 h-4 md:h-5 lg:h-8"
                  />
                </a>
                <a 
                  href="https://in.linkedin.com/company/hi8agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <img 
                    src="/linkedin.svg" 
                    alt="LinkedIn"
                    className="w-4 md:w-5 lg:w-8 h-4 md:h-5 lg:h-8"
                  />
                </a>
                <a 
                  href="mailto:info@hi8.space"
                  className="transition-transform hover:scale-110"
                >
                  <img 
                    src="/mail.svg" 
                    alt="Email"
                    className="w-4 md:w-5 lg:w-8 h-4 md:h-5 lg:h-8"
                  />
                </a>
              </div>
            </div>
          </div>
          
          <img
            src="/handPhone.svg"
            alt="Hand holding phone mockup"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default VideoHand;
