import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const PopularCourses = () => {
  return (
    <div className="bg-pink-50 rounded-3xl">
      <div className="container mx-auto py-6">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-medium">Most popular</h2>
            <div className="hidden md:block">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
                See all content →
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-col lg:flex-row gap-4">
            {/* First Card */}
            <div className="bg-white rounded-3xl p-6 flex-1">
              <div className="space-y-4">
                <h3 className="text-3xl font-medium">
                  Design + code your first website
                </h3>
                <p className="text-gray-600">
                  Try our free course: Plan, Design + Code Your First Website. Get from idea to up-and-running, plus learn how to work with clients, project plans, wireframes, hosting, and more.
                </p>
                <button className="mt-4 flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
                  <span>Your first website</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Second Card */}
            <div className="bg-green-500 rounded-3xl p-6 text-white flex-1">
              <div className="space-y-4">
                <h3 className="text-3xl font-medium">
                  Learn to code from scratch
                </h3>
                <p className="text-white/90">
                  Everything you need to know to create websites from scratch. By the end, you'll be comfortable in making your own websites with the best Javascript libraries, animation, and responsive design.
                </p>
                <button className="mt-4 flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-full">
                  <span>Learn to code</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Third Card */}
            <div className="bg-orange-500 rounded-3xl p-6 text-white flex-1">
              <div className="space-y-4">
                <h3 className="text-3xl font-medium">
                  Become a digital designer
                </h3>
                <p className="text-white/90">
                  Learn responsive web design, from layouts and visual hierarchy to branding, color, type, and so much more. This is our fundamental design course, Visual Design + Branding.
                </p>
                <button className="mt-4 flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-full">
                  <span>Digital design</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default PopularCourses;