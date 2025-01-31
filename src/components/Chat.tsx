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
        <div className="w-10 h-10 rounded-full bg-[#FA9214] shadow-md flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
      )}
      <div className="bg-white rounded-2xl p-4 shadow-md max-w-[80%]">
        {children}
      </div>
      {isUser && (
        <div className="w-10 h-10 rounded-full bg-gray-200 shadow-md flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-gray-900" />
        </div>
      )}
    </div>
  );
};

const Chat = () => {
  const messageDelay = 100;

  return (
    <div className="min-h-screen container mx-auto py-12">
      <div className="max-w-3xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
          Seamless Onboarding
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight bg-gradient-to-br from-[#FA9214] via-orange-500 to-[#FF0012] text-transparent bg-clip-text">
          Start Your Project within Minutes.
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <AnimatedMessage delay={messageDelay * 0}>
          <p className="text-lg md:text-2xl font-medium text-gray-900">
            Hi! Welcome to Hi8 – your new creative partner in social media
            marketing. 🚀
          </p>
        </AnimatedMessage>

        <AnimatedMessage delay={messageDelay * 1}>
          <p className="text-lg md:text-2xl font-medium text-gray-900">
            How's your brand's social presence today?
          </p>
        </AnimatedMessage>

        <AnimatedMessage isUser delay={messageDelay * 2}>
          <p className="text-lg md:text-2xl font-medium text-gray-900">Great!</p>
        </AnimatedMessage>

        <AnimatedMessage delay={messageDelay * 3}>
          <p className="text-lg md:text-2xl font-medium text-gray-900">
            Awesome! That's what we love to hear.
            <br />
            📈 Social media moves fast, and we're here to make sure you stay
            ahead with content that grabs attention and drives engagement.
          </p>
        </AnimatedMessage>

        <AnimatedMessage isUser delay={messageDelay * 4}>
          <p className="text-lg md:text-2xl font-medium text-gray-900">
            How can we improve our content strategy?
          </p>
        </AnimatedMessage>

        <AnimatedMessage delay={messageDelay * 5}>
          <div className="text-[#FF0012] font-medium mb-2">
            ✦ Based on your brand's current approach
          </div>
          <p className="text-lg md:text-2xl font-medium text-gray-900">
            We recommend integrating high-impact short-form videos, optimized
            for engagement and ...
          </p>
        </AnimatedMessage>
      </div>
    </div>
  );
};

export default Chat;
