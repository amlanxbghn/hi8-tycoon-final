import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { href: '/careers', label: 'Careers' },
    { href: '/privacy-policy', label: 'Privacy policy' },
    { href: '/terms', label: 'Terms of use' },
  ];

  return (
    <footer className="container py-4">
      <div className="">
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
          <div className="flex items-center space-x-2 bg-gradient-to-br from-[#FA9214] via-[#F90200] to-[#F90200] text-transparent bg-clip-text">
            <span>Made with love by</span>
            <img src="/hi8Logo.svg" alt="hi8 Logo" className='w-12 h-auto'/>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col space-y-3 text-gray-500">
          <Link
            href="https://www.hi8.space/"
            className="text-gray-500 hover:text-gray-700"
          >
            https://www.hi8.space/
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
          
          <div className="flex items-center space-x-2 bg-gradient-to-br from-[#FA9214] via-[#F90200] to-[#F90200] text-transparent bg-clip-text">
            <span>Made with love by</span>
            <img src="/hi8Logo.svg" alt="hi8 Logo" className='w-10 h-auto'/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
