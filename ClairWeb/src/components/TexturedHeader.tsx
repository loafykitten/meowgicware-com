import React from 'react';

interface TexturedHeaderProps {
  title: string;
}

const TexturedHeader: React.FC<TexturedHeaderProps> = ({ title }) => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 pt-20">
      <h1 className="relative z-10 text-5xl font-extrabold text-white text-center">
        {title}
      </h1>
    </div>
  );
};

export default TexturedHeader;
