'use client'

import { Button } from "./ui/Button"
import { Mail, HomeIcon, Menu } from "lucide-react"
import { useState, useEffect } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet"

export default function ResponsiveMenu() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const buttonClass = isScrolled
    ? "hover:bg-lime-300 hover:text-white transition-colors"
    : "hover:bg-gray-300 transition-colors"

  const menuItems = [
    { href: "#about", label: "Profil zawodowy" },
    { href: "#experience", label: "Doświadczenie" },
    { href: "#education", label: "Wykształcenie" },
    { href: "#training", label: "Kursy i szkolenia" },
    { href: "#support", label: "Zakres wsparcia" },
  ]

  const MenuItems = ({ onClick = () => {} }) => (
    <>
      {menuItems.map((item) => (
        <a key={item.href} href={item.href} onClick={onClick}>
          <Button variant="ghost" className={buttonClass}>
            {item.label}
          </Button>
        </a>
      ))}
    </>
  )

  return (
    <div className={`w-full py-2 px-4 sticky top-0 z-10 transition-colors ${isScrolled ? 'bg-lime-200' : 'bg-gray-200'}`}>
      <nav className="flex items-center justify-between">
        <div className="flex space-x-2">
          <a href="#home">
            <Button variant="ghost" size="icon" className={buttonClass} aria-label="Home">
              <HomeIcon className="h-5 w-5" />
            </Button>
          </a>
          <div className="hidden md:flex space-x-2">
            <MenuItems />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <a href="#contact">
            <Button variant="ghost" size="icon" className={buttonClass} aria-label="Kontakt">
              <Mail className="h-5 w-5" />
            </Button>
          </a>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`${buttonClass} md:hidden`} aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col space-y-4 mt-6">
                <MenuItems onClick={() => setIsOpen(false)} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  )
}