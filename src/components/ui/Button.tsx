'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ variant = 'primary', href, children, className = '', onClick }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold transition-all duration-200 text-base';
  
  const variants = {
    primary: 'bg-[#067cfd] text-white hover:bg-[#5A90CC] shadow-sm hover:shadow-md',
    secondary: 'bg-white text-gray-900 border-2 border-gray-200 hover:border-[#6FB3FF] hover:text-[#6FB3FF]'
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
};

export default Button;