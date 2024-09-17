'use client'; // Użycie deklaracji klienta

import { useState, useEffect } from 'react';
import HorizontalLightGrayMenu from '@/components/HorizontalLightGrayMenu';
import Image from 'next/image';
import ScrollingBackground from '@/components/scrolling-background';
import ContactSection from '@/components/contact-section';
import AnimatedImage from '@/components/animated-image';
import CenteredSections from '@/components/centered-sections';

export default function Home() {
  return (
    <><div id="home">
    </div><ScrollingBackground imageUrl="/images/tlo.jpg">
        <div className="relative z-10">
          <CenteredSections />
          <div className="min-h-screen pb-[footer-height]">
            <section id="contact">
              <ContactSection />
            </section>
          </div>
        </div>
      </ScrollingBackground></>
);
}
