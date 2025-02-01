import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { href: '/careers', label: 'Careers' },
    { href: '/privacy-policy', label: 'Privacy policy' },
    { href: '/money-back-policy', label: 'Money-back policy' },
    { href: '/terms', label: 'Terms of use' },
  ];

  return (
    <footer className="w-full px-4 py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between text-gray-500">
          <div className="flex items-center space-x-6">
            <span>{currentYear} © Hi8 Agency</span>
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-gray-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="bg-gradient-to-br from-[#FA9214] via-[#F90200] to-[#F90200] text-transparent bg-clip-text">
            Made with love by Hi8
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col space-y-3 text-gray-500">
          <Link
            href="https://sovrn.co/1q82a87"
            className="text-gray-500 hover:text-gray-700"
          >
            https://sovrn.co/1q82a87
          </Link>
          
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-gray-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          <span>{currentYear} © Hi8 Agency</span>
          
          <div className="bg-gradient-to-br from-[#FA9214] via-[#F90200] to-[#F90200] text-transparent bg-clip-text">
            Made with love by Hi8
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
