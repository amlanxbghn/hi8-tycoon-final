import React from "react";
import { MessageCircle } from "lucide-react";

const Chat = () => {
  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl lg:text-6xl font-medium leading-tight text-gray-900 mb-2">
          Seamless Onboarding
        </h1>
        <h2 className="text-2xl lg:text-4xl font-semibold text-[#FF0012]/50">
          Always at Your Service
        </h2>
      </div>

      {/* Chat Container */}
      <div className="max-w-2xl mx-auto space-y-6">
        {/* AI Message */}
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#FF0012]/50 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[80%]">
            <p className="text-2xl text-gray-800">
              Hi! Welcome to Hi8 – your new creative partner in social media
              marketing. 🚀
            </p>
          </div>
        </div>

        {/* AI Question */}
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#FF0012]/50 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[80%]">
            <p className="text-2xl text-gray-800">
              How’s your brand’s social presence today?
            </p>
          </div>
        </div>

        {/* User Response */}
        <div className="flex items-start space-x-3 justify-end">
          <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[80%]">
            <p className="text-2xl text-gray-800">Great!</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="/api/placeholder/32/32"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* AI Response */}
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#FF0012]/50 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[80%]">
            <p className="text-2xl text-gray-800">
              Awesome! That’s what we love to hear.
              <br />
              📈 Social media moves fast, and we’re here to make sure you stay
              ahead with content that grabs attention and drives engagement.
            </p>
          </div>
        </div>

        {/* User Question */}
        <div className="flex items-start space-x-3 justify-end">
          <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[80%]">
            <p className="text-2xl text-gray-800">
              How can we improve our content strategy?
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="/api/placeholder/32/32"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* AI Response with Tag */}
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#FF0012]/50 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[80%]">
            <div className="text-blue-500 text-sm mb-2">
              ✦ Based on your brand’s current approach
            </div>
            <p className="text-2xl text-gray-800">
              We recommend integrating high-impact short-form videos, optimized
              for engagement and ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
