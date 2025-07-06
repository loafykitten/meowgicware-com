import { Zain } from 'next/font/google';
import React from 'react';

const zain = Zain({
    weight: ['400', '800'],
    variable: '--font-zain',
    subsets: ['latin'],
    display: 'swap'
})

interface TexturedHeaderProps {
  title: string;
}

const TexturedHeader: React.FC<TexturedHeaderProps> = ({ title }) => {
  return (
    <div className={[zain.className, "relative w-full h-64 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 pt-20"].join(' ')}>
      <h1 className="relative z-10 text-5xl font-extrabold text-white text-center font-zain">
        {title}
      </h1>
    </div>
  );
};

export default TexturedHeader;
