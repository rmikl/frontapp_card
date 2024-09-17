'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/Button";
import { Mail, Home as HomeIcon } from "lucide-react";

export default function HorizontalLightGrayMenu() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Dodaj event listener na scroll i zmieniaj stan isScrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Jeśli użytkownik przewinie więcej niż 50px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Wyczyszczenie event listenera
    };
  }, []);

  return (
    <div className={`w-full py-2 px-4 sticky top-0 z-10 transition-colors duration-300 ${isScrolled ? 'bg-lime-700' : 'bg-gray-200'}`}>
      <nav className="flex items-center justify-between">
        <div className="flex space-x-2">
          <a href="#home">
            <Button variant="ghost" size="icon" className="hover:bg-gray-300 transition-colors" aria-label="Home">
              <HomeIcon className="h-5 w-5" />
            </Button>
          </a>
          <a href="#about">
            <Button variant="ghost" className="hover:bg-gray-300 transition-colors">
              U mnie
            </Button>
          </a>
          <a href="#services">
            <Button variant="ghost" className="hover:bg-gray-300 transition-colors">
              Usługi
            </Button>
          </a>
          <a href="#portfolio">
            <Button variant="ghost" className="hover:bg-gray-300 transition-colors">
              Portfolio
            </Button>
          </a>
        </div>
        <a href="#contact">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-300 transition-colors"
            aria-label="Kontakt"
          >
            <Mail className="h-5 w-5" />
          </Button>
        </a>
      </nav>
    </div>
  );
}
