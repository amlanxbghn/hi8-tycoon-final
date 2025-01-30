import React from "react";
import { MessageCircle } from "lucide-react";

const Chat = () => {
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
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/api/placeholder/32/32"
              alt="Hi8"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[80%]">
            <p className="text-md md:text-2xl text-gray-900">
              Hi! Welcome to Hi8 – your new creative partner in social media
              marketing. 🚀
            </p>
          </div>
        </div>

        {/* AI Question */}
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/api/placeholder/32/32"
              alt="Hi8"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[80%]">
            <p className="text-md md:text-2xl text-gray-900">
              How's your brand's social presence today?
            </p>
          </div>
        </div>

        {/* User Response */}
        <div className="flex items-start space-x-3 justify-end">
          <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[80%]">
            <p className="text-md md:text-2xl text-gray-900">Great!</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-gray-900" />
          </div>
        </div>

        {/* AI Response */}
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/api/placeholder/32/32"
              alt="Hi8"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[80%]">
            <p className="text-md md:text-2xl text-gray-900">
              Awesome! That's what we love to hear.
              <br />
              📈 Social media moves fast, and we're here to make sure you stay
              ahead with content that grabs attention and drives engagement.
            </p>
          </div>
        </div>

        {/* User Question */}
        <div className="flex items-start space-x-3 justify-end">
          <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[80%]">
            <p className="text-md md:text-2xl text-gray-900">
              How can we improve our content strategy?
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-gray-900" />
          </div>
        </div>

        {/* AI Response with Tag */}
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/api/placeholder/32/32"
              alt="Hi8"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[80%]">
            <div className="text-[#FF0012] text-sm mb-2">
              ✦ Based on your brand's current approach
            </div>
            <p className="text-md md:text-2xl text-gray-900">
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
