import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { href: 'https://www.linkedin.com/company/hi8agency/jobs/', label: 'Careers' },
    { href: 'https://docs.google.com/document/d/1GDwbOInZubLNVc2-4gL4EhTN5-sGCLTYuF99WQfTm3o/edit?usp=sharing', label: 'Privacy policy' },
    { href: 'https://docs.google.com/document/d/1IXTa0Lkyhvizqc8a7RH3caOajPy1LQV9-mPUzn4GPTI/edit?usp=sharing', label: 'Terms of use' },
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
                target="_blank"
                rel="noopener noreferrer"
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
              target="_blank"
              rel="noopener noreferrer"
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
