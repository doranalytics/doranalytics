'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface DropdownProps {
  title: string;
  items: Array<{ label: string; href: string }>;
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-white hover:text-gray-300 focus:outline-none"
      >
        {title}
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
          {items.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const socials = [
    { label: 'ig', href: 'https://instagram.com/doranalytics' },
    { label: 'tt', href: 'https://tiktok.com/@doranalytics' },
    { label: 'x', href: 'https://twitter.com/doranalytics' },
    { label: 'li', href: 'https://www.linkedin.com/in/brian-doran-438ab1102' },
    { label: 'git', href: 'https://github.com/doranalytics' },
    { label: 'food ig', href: 'https://instagram.com/chateau_brian_d' },
  ];
  const podcast = [
    { label: 'pod yt', href: 'https://www.youtube.com/@modernleveragepodcast' },
    { label: 'pod sptfy', href: 'https://open.spotify.com/show/2Dfs6yVIsD2A6UmvkAfkKK' },
    { label: 'pod ig', href: 'https://www.instagram.com/modernleveragepodcast' },
    { label: 'pod tt', href: 'https://tiktok.com/@modernleveragepodcast' },
  ];

  const videos = ['dahome.mp4', 'daplane.mp4', 'dapres.mp4', 'dahero.mp4'];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error: Error) => console.log('Autoplay was prevented:', error.message));
    }
  }, [currentVideoIndex]);

  const changeBackgroundVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <main className="relative min-h-screen">
      <video
        ref={videoRef}
        key={videos[currentVideoIndex]}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={`/${videos[currentVideoIndex]}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex min-h-screen">
        <div className="bg-black bg-opacity-50 p-8 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl italic text-white">
            doran<sup className="text-2xl">alytics</sup>
          </h1>
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-xs text-white">Founded:</p>
              <Link 
                href="https://www.contentsquared.ai" 
                className="inline-block font-semibold text-white bg-white bg-opacity-20 px-3 py-1 rounded transition-all duration-300 hover:bg-opacity-30 hover:text-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                [content]<sup>squared</sup>
              </Link>
            </div>
            <Link 
              href="/consulting" 
              className="block text-white hover:text-gray-300"
            >
              consulting
            </Link>
            <Link 
              href="https://doranalytics.substack.com" 
              className="block text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              substack
            </Link>
          </div>
          <Dropdown title="socials" items={socials} />
          <Dropdown title="modern leverage pod" items={podcast} />
          <button 
            onClick={changeBackgroundVideo}
            className="bg-white text-black py-2 px-4 rounded hover:bg-slate-300 transition-colors"
          >
            change video
          </button>
        </div>
      </div>
    </main>
  );
}