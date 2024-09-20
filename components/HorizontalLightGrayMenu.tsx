'use client'

import { Button } from "@/components/ui/Button"
import { Mail, HomeIcon, Menu, X } from "lucide-react"
import { useState, useEffect } from 'react'

export default function HorizontalLightGrayMenu() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const buttonClass = isScrolled
  ? "hover:bg-lime-300 hover:text-white transition-colors text-black"
  : "hover:bg-gray-300 transition-colors text-black"

  const menuItems = [
    { href: "#about", text: "Profil zawodowy" },
    { href: "#experience", text: "Doświadczenie" },
    { href: "#education", text: "Wykształcenie" },
    { href: "#training", text: "Kursy i szkolenia" },
    { href: "#support", text: "Zakres wsparcia" },
  ]

  return (
    <div className={`w-full py-2 px-4 sticky top-0 z-10 transition-colors ${isScrolled ? 'bg-lime-200' : 'bg-gray-200'}`}>
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="#home">
            <Button variant="ghost" size="icon" className={buttonClass} aria-label="Home">
              <HomeIcon className="h-5 w-5" />
            </Button>
          </a>
          <div className="hidden md:flex space-x-2">
            {menuItems.map((item, index) => (
              <a key={index} href={item.href}>
                <Button variant="ghost" className={buttonClass}>
                  {item.text}
                </Button>
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <a href="#contact">
            <Button variant="ghost" size="icon" className={buttonClass} aria-label="Kontakt">
              <Mail className="h-5 w-5" />
            </Button>
          </a>
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${buttonClass}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className="block">
              <Button variant="ghost" className={`w-full text-left ${buttonClass}`} onClick={() => setIsMenuOpen(false)}>
                {item.text}
              </Button>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}