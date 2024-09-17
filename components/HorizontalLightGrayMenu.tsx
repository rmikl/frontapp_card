import { Button } from "@/components/ui/Button";
import { Mail, HomeIcon } from "lucide-react";
import { useState, useEffect } from 'react';

export default function HorizontalLightGrayMenu() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const buttonClass = isScrolled
    ? "hover:bg-lime-300 hover:text-white transition-colors"
    : "hover:bg-gray-300 transition-colors";

  return (
    <div className={`w-full py-2 px-4 sticky top-0 z-10 transition-colors ${isScrolled ? 'bg-lime-200' : 'bg-gray-200'}`}>
      <nav className="flex items-center justify-between">
        <div className="flex space-x-2">
          <a href="#home">
            <Button variant="ghost" size="icon" className={buttonClass} aria-label="Home">
              <HomeIcon className="h-5 w-5" />
            </Button>
          </a>
          <a href="#about">
            <Button variant="ghost" className={buttonClass}>
              Profil zawodowy
            </Button>
          </a>
          <a href="#experience">
            <Button variant="ghost" className={buttonClass}>
              Doświadczenie
            </Button>
          </a>
          <a href="#education">
            <Button variant="ghost" className={buttonClass}>
              Wykształcenie
            </Button>
          </a>
          <a href="#training">
            <Button variant="ghost" className={buttonClass}>
              Kursy i szkolenia
            </Button>
          </a>
          <a href="#support">
            <Button variant="ghost" className={buttonClass}>
              Zakres wsparcia
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
  );
}
