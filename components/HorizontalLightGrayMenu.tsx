'use client'

import { Button } from "@/components/ui/Button"
import { Mail,HomeIcon } from "lucide-react"
import { useState, useEffect } from 'react'

export default function MenuZmianaKoloruPrzyPrzewijaniu() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const buttonClass = isScrolled
    ? "hover:bg-lime-300 hover:text-white transition-colors"
    : "hover:bg-gray-300 transition-colors"

  return (
    <div className={`w-full py-2 px-4 sticky top-0 z-10 transition-colors ${isScrolled ? 'bg-lime-200' : 'bg-gray-200'}`}>
      <nav className="flex items-center justify-between">
        <div className="flex space-x-2">
        <a href="#home">    
            <Button variant="ghost" size="icon" className="hover:bg-gray-300 transition-colors" aria-label="Home">
              <HomeIcon className="h-5 w-5" />
            </Button>
          </a>
          <a href="#about">
          <Button variant="ghost" className={buttonClass}>
            O nas
          </Button>
          </a>
          <a href="#services">
          <Button variant="ghost" className={buttonClass}>
            Usługi
          </Button>
          </a>
          <a href="#portfolio">
          <Button variant="ghost" className={buttonClass}>
            Portfolio
          </Button>
        </a>
        </div>
        <a href="#contact">
        <Button variant="ghost" size="icon" className={buttonClass} aria-label="Kontakt">
          <Mail className="h-5 w-5" />
        </Button>
        </a>
      </nav>
    </div>
  )
}