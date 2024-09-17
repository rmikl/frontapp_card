'use client';

import { useState, useEffect } from 'react';

export default function WelcomeScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000); // Delay the text reveal
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes revealChar {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-reveal {
          animation: revealChar 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
          transform: translateY(100%);
        }
      `}</style>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <h1
          className={`text-6xl font-bold transition-opacity duration-3000 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="inline-block overflow-hidden">
            {'Witaj'.split('').map((char, index) => (
              <span
                key={index}
                className="inline-block animate-reveal"
                style={{ animationDelay: `${index * 0.4 + 1}s` }}
              >
                {char}
              </span>
            ))}
          </span>
        </h1>
      </div>
    </>
  );
}
