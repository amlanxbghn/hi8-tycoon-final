import React from "react";

const SecurityPage = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-12">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-8 items-center">
          {/* Mascot Section */}
          <div className="flex justify-center mt-12 md:mt-0">
            <div className="relative w-64 h-64">
              {/* Cloud background */}
              <div className="absolute inset-0 bg-blue-100 rounded-full"></div>

              {/* Mascot face */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-300 rounded-lg">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex flex-col items-center">
                    <div className="flex space-x-4 mb-2">
                      <div className="w-2 h-1 bg-gray-800 rounded-full"></div>
                      <div className="w-2 h-1 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="w-4 h-2 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Security icons */}
              <div className="absolute top-4 left-4">
                <div className="w-6 h-6 bg-blue-300 rounded-full"></div>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 bg-blue-300 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="text-blue-500 text-lg">Empower Your Brand.</div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Unstoppable Growth.
              <br />
              Complete Control.
            </h1>

            <p className="text-gray-700 text-lg">
              At hi8, we believe in giving you full autonomy over your digital
              presence. Your brand, your data, your vision—secure and
              self-managed. We work with you to amplify your identity, providing
              tools and strategies to drive unstoppable growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-blue-500 text-lg">Self-Sovereignty</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-blue-500 text-lg">No Boundaries</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-blue-500 text-lg">No Commitments</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-blue-500 text-lg">Full Transparency</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-blue-500 text-lg">Complete Control</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
