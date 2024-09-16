'use client';

import { useState, useEffect } from 'react';
import HorizontalLightGrayMenu from '@/components/HorizontalLightGrayMenu';
import WelcomeScreen from '@/components/WelcomeScreen';
import Image from 'next/image';

export default function Home() {
  return (
  <div 
    className="relative min-h-screen bg-cover bg-center" 
    style={{ 
      backgroundImage: 'url("/images/tlo.jpg")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} 
  >
  {/* Optional glass effect overlay */}
  <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-sm"></div>

      <div className="relative z-10">
        <HorizontalLightGrayMenu />
        <div className="p-8">
          {/* Główna sekcja - Strona główna */}
          <section id="home" className="min-h-screen">
            <h2 className="text-4xl font-bold mb-4">Strona Główna</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Image
              src="/images/home.jpg"
              alt="Home"
              width={600}
              height={400}
              className="mt-4"
              position="center"
            />
          </section>

          {/* Sekcja - O nas */}
          <section id="about" className="min-h-screen">
            <h2 className="text-4xl font-bold mb-4">O nas</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Image
              src="/images/about.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="mt-4"
            />
          </section>

          {/* Sekcja - Usługi */}
          <section id="services" className="min-h-screen">
            <h2 className="text-4xl font-bold mb-4">Usługi</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Image
              src="/images/services.jpg"
              alt="Services"
              width={600}
              height={400}
              className="mt-4"
            />
          </section>

          {/* Sekcja - Portfolio */}
          <section id="portfolio" className="min-h-screen">
            <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Image
              src="/images/portfolio.jpg"
              alt="Portfolio"
              width={600}
              height={400}
              className="mt-4"
            />
          </section>

          {/* Sekcja - Kontakt */}
          <section id="contact" className="min-h-screen">
            <h2 className="text-4xl font-bold mb-4">Kontakt</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Image
              src="/images/contact.jpg"
              alt="Contact"
              width={600}
              height={400}
              className="mt-4"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
