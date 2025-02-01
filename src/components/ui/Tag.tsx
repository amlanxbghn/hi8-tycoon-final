import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'purple' | 'blue' | 'lime' | 'orange' | 'pink' | 'gray' | 'reverse' | 'light';
  icon?: React.ReactNode;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ 
  children, 
  variant = 'purple',
  icon,
  className = '' 
}) => {
  const variants = {
    purple: 'bg-purple-100 text-purple-600',
    blue: 'bg-blue-100 text-blue-600',
    lime: 'bg-lime-100 text-lime-600',
    orange: 'bg-orange-100 text-[#FF0012]',
    pink: 'bg-pink-100 text-pink-600',
    gray: 'bg-gray-200 text-[#333333]',
    reverse: 'bg-[#333333] text-white',
    light: 'bg-[#FAFAFA] text-[#333333]'
  };

  return (
    <div className={`
      inline-flex items-center gap-2 px-4 py-2 
      rounded-full
      ${variants[variant]}
      ${className}
    `}>
      {icon}
      {children}
    </div>
  );
};

export default Tag;