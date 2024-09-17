'use client'; // Użycie deklaracji klienta

import { useState, useEffect } from 'react';
import HorizontalLightGrayMenu from '@/components/HorizontalLightGrayMenu';
import Image from 'next/image';
import ScrollingBackground from '@/components/scrolling-background';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <ScrollingBackground imageUrl="/images/tlo.jpg">
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
        </div>
      </div>
      <div className="min-h-screen pb-[footer-height]">
      <section id="contact">
        <ContactSection />
      </section>
    </div>
    </ScrollingBackground>
  );
}
