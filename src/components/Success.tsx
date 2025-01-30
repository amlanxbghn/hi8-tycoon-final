import React from 'react';
import { Check } from 'lucide-react';

const SuccessPage = () => {
  const successes = [
    "Captivating, 24/7 exposure",
    "Amplifies digital campaigns, seamless",
    "High visibility, massive reach"
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-12">
        {successes.map((text, index) => (
          <div 
            key={index} 
            className="bg-white rounded-3xl p-6"
          >
            <div className="flex flex-col gap-4">
              <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
                <Check className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-xl text-gray-900">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessPage;