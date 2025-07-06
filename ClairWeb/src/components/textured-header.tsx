import { Zain } from 'next/font/google';
import React from 'react';
import styles from './textured-header.module.css';

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
    <div className={[zain.className, "relative w-full h-64 flex items-center justify-center pt-20", styles.background].join(' ')}>
        <h1 className="text-6xl font-bold text-white text-center">{title}</h1>
    </div>
  );
};

export default TexturedHeader;
