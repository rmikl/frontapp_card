'use client'

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
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
          <Button variant="ghost" className={buttonClass}>
            Strona główna
          </Button>
          <Button variant="ghost" className={buttonClass}>
            O nas
          </Button>
          <Button variant="ghost" className={buttonClass}>
            Usługi
          </Button>
          <Button variant="ghost" className={buttonClass}>
            Portfolio
          </Button>
          <Button variant="ghost" className={buttonClass}>
            Kontakt
          </Button>
        </div>
        <Button variant="ghost" size="icon" className={buttonClass} aria-label="Kontakt">
          <Mail className="h-5 w-5" />
        </Button>
      </nav>
    </div>
  )
}