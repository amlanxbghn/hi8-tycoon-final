import React from "react";
import { CheckCircle } from "lucide-react";

const PocketHero = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8 lg:p-12">
      <div className="bg-gray-50 rounded-3xl shadow-sm max-w-6xl w-full p-8 md:p-12 lg:p-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content - Now full width on mobile/tablet */}
          <div className="flex-1 w-full text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="bg-green-100 p-2 rounded-lg">
                <div className="text-green-500 font-semibold flex items-center gap-2">
                  <div className="h-6 w-6 rounded border-2 border-green-500"></div>
                  Always with You.
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Simple. Secure. Effortless.
            </h1>

            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-0">
              Manage your brand’s presence with ease. With just an email or
              phone number, you’re set to take full control of your digital
              assets. No complexity. No hassle. Just a seamless way to stay
              connected and empowered.{" "}
            </p>
          </div>

          {/* Illustration - Now below text on mobile/tablet */}
          <div className="flex-1 relative w-full">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Floating Elements */}
              <div className="absolute inset-0">
                {/* Wallet Icon */}
                <div className="absolute top-1/4 left-1/4 bg-green-500 w-12 h-12 rounded-lg transform -rotate-12">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-yellow-200 rounded-full"></div>
                </div>

                {/* ETH Icon */}
                <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-yellow-200 transform rotate-45"></div>

                {/* Card */}
                <div className="absolute top-1/4 right-1/4 w-16 h-12 bg-white rounded-lg shadow-sm transform rotate-12">
                  <div className="w-full h-2 bg-green-500 mt-2"></div>
                  <div className="absolute bottom-2 right-2 text-yellow-200">
                    ♥
                  </div>
                </div>

                {/* Check Icon */}
                <div className="absolute bottom-1/3 left-1/3">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>

                {/* Coins */}
                <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-yellow-200 rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-yellow-200 rounded-full"></div>
              </div>

              {/* Main Character */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-32 bg-yellow-200 rounded-3xl relative">
                  <div className="absolute bottom-0 w-full flex justify-center">
                    <div className="w-2 h-8 bg-black rounded-full"></div>
                    <div className="w-2 h-8 bg-black rounded-full ml-2"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    </div>
                    <div className="mt-2 w-4 h-1 border-t-2 border-black rounded-full transform rotate-12"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <div className="w-32 h-2 bg-green-500 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PocketHero;
