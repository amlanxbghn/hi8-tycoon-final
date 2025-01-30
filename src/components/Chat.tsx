"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { MessageCircle } from "lucide-react";

interface AnimatedMessageProps {
  children: ReactNode;
  isUser?: boolean;
  delay?: number;
}

const AnimatedMessage: React.FC<AnimatedMessageProps> = ({ children, isUser = false, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay before starting animation
          setTimeout(() => {
            if (ref.current) {
              ref.current.classList.add("animate-in");
            }
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`flex items-start space-x-3 opacity-0 translate-y-4 transition-all duration-700 ease-out ${
        isUser ? "justify-end" : ""
      }`}
    >
      {!isUser && (
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="/api/placeholder/32/32"
            alt="Hi8"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[80%]">
        {children}
      </div>
      {isUser && (
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-gray-900" />
        </div>
      )}
    </div>
  );
};

const Chat = () => {
  // Calculate delays for each message (300ms between each)
  const messageDelay = 200;

  return (
    <div className="min-h-screen container mx-auto py-12">
      {/* Header */}
      <div className="md:px-1 max-w-2xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-2">
          Seamless Onboarding
        </h1>
        <h2 className="text-md md:text-xl font-medium text-[#FF0012]">
          Start Your Project within Minutes
        </h2>
      </div>

      {/* Chat Container */}
      <div className="max-w-3xl mx-auto space-y-6">
        {/* AI Message */}
        <AnimatedMessage delay={messageDelay * 0}>
          <p className="text-lg md:text-2xl text-gray-900">
            Hi! Welcome to Hi8 – your new creative partner in social media
            marketing. 🚀
          </p>
        </AnimatedMessage>

        {/* AI Question */}
        <AnimatedMessage delay={messageDelay * 1}>
          <p className="text-lg md:text-2xl text-gray-900">
            How's your brand's social presence today?
          </p>
        </AnimatedMessage>

        {/* User Response */}
        <AnimatedMessage isUser delay={messageDelay * 2}>
          <p className="text-lg md:text-2xl text-gray-900">Great!</p>
        </AnimatedMessage>

        {/* AI Response */}
        <AnimatedMessage delay={messageDelay * 3}>
          <p className="text-lg md:text-2xl text-gray-900">
            Awesome! That's what we love to hear.
            <br />
            📈 Social media moves fast, and we're here to make sure you stay
            ahead with content that grabs attention and drives engagement.
          </p>
        </AnimatedMessage>

        {/* User Question */}
        <AnimatedMessage isUser delay={messageDelay * 4}>
          <p className="text-lg md:text-2xl text-gray-900">
            How can we improve our content strategy?
          </p>
        </AnimatedMessage>

        {/* AI Response with Tag */}
        <AnimatedMessage delay={messageDelay * 5}>
          <div className="text-[#FF0012] text-sm mb-2">
            ✦ Based on your brand's current approach
          </div>
          <p className="text-lg md:text-2xl text-gray-900">
            We recommend integrating high-impact short-form videos, optimized
            for engagement and ...
          </p>
        </AnimatedMessage>
      </div>
    </div>
  );
};

export default Chat;
