import React from 'react';

const VideoHand = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-50 to-pink-100 flex justify-center items-center">
      <div className="
        ml-24 md:ml-40 lg:ml-52
        w-[400px] md:w-[500px] lg:w-[600px]
      ">
        <img 
          src="/handPhone.png" 
          alt="Hand holding phone mockup"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default VideoHand;