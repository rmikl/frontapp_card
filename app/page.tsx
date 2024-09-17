'use client';
import ScrollingBackground from '@/components/scrolling-background';
import ContactSection from '@/components/contact-section';
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