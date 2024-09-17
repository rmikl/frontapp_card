'use client'

import { useState, useEffect } from 'react'
import ScrollingBackground from '@/components/scrolling-background'
import ContactSection from '@/components/contact-section'
import CenteredSections from '@/components/centered-sections'
import WelcomeScreen from '@/components/WelcomeScreen'

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 6000) // 6 seconds

    return () => clearTimeout(timer)
  }, [])

  if (showWelcome) {
    return <WelcomeScreen />
  }

  return (
    <>
      <div id="home"></div>
      <ScrollingBackground imageUrl="/images/tlo.jpg">
        <div className="relative z-10">
          <CenteredSections />
          <div className="min-h-screen pb-[footer-height]">
            <section id="contact">
              <ContactSection />
            </section>
          </div>
        </div>
      </ScrollingBackground>
    </>
  )
}