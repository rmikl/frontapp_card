'use client'

import { useState, useRef, useEffect } from 'react'
import HorizontalLightGrayMenu from '@/components/HorizontalLightGrayMenu'
import AnimatedImage from '@/components/animated-image'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface Section {
  id: string
  title: string
  content: string
  expandedContent: string
  imageUrls: string[]
}

const sections: Section[] = [
  {
    id: 'about',
    title: 'Profil Zawodowy',
    content: 'Jestem doświadczonym specjalistą w zakresie interwencji kryzysowej i terapii psychologicznej. Posiadam szeroką wiedzę i umiejętności w zakresie pracy z osobami dotkniętymi przemocą, problemami emocjonalnymi oraz kryzysami psychologicznymi.',
    expandedContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrls: ['/images/self1.jpg', '/images/self2.jpg', '/images/self3.jpg'],
  },
  {
    id: 'experience',
    title: 'Doświadczenie Zawodowe',
    content: 'Moje doświadczenie obejmuje pracę jako konsultant ds. psychoprofilaktyki w wojsku, kierownik Ośrodka Interwencji Kryzysowej w Inowrocławiu, psycholog w Programie Pomocy Osobom Pokrzywdzonym Przestępstwem, oraz wsparcie dla policjantów w województwie kujawsko-pomorskim.',
    expandedContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrls: ['/images/handshake.jpg'],
  },
  {
    id: 'education',
    title: 'Wykształcenie',
    content: 'Ukończyłam studia psychologiczne w Szkole Wyższej Psychologii Społecznej w Warszawie, a także studia podyplomowe na Uniwersytecie Mikołaja Kopernika w Toruniu, Uniwersytecie im. Adama Mickiewicza w Poznaniu, Uniwersytecie Gdańskim i Uniwersytecie Wrocławskim.',
    expandedContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrls: ['/images/books.jpg'],
  },
  {
    id: 'training',
    title: 'Kursy i Szkolenia',
    content: 'Uczestniczyłam w licznych kursach i szkoleniach, w tym z terapii przetwarzania poznawczego dla osób z PTSD, terapii traumy, terapii schematów, oraz wielu innych z zakresu psychologii, uzależnień i interwencji kryzysowej.',
    expandedContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrls: ['/images/training.jpg'],
  },
  {
    id: 'support',
    title: 'Zakres Prowadzonego Wsparcia',
    content: 'Oferuję wsparcie w zakresie interwencji kryzysowej, terapii traumy, terapii poznawczo-behawioralnej, pracy z młodzieżą, prowadzenia szkoleń i warsztatów, oraz superwizji indywidualnych i grupowych.',
    expandedContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrls: ['/images/support.jpg'],
  },
]
export default function CenteredSections() {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})
  const expandedContentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const updateHeights = () => {
      sections.forEach(section => {
        if (expandedContentRefs.current[section.id]) {
          expandedContentRefs.current[section.id]!.style.maxHeight = expandedSections[section.id]
            ? `${expandedContentRefs.current[section.id]!.scrollHeight}px`
            : '0px'
        }
      })
    }

    updateHeights()
    window.addEventListener('resize', updateHeights)
    return () => window.removeEventListener('resize', updateHeights)
  }, [expandedSections])

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <HorizontalLightGrayMenu />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        {sections.map((section, index) => (
          <section 
            key={section.id} 
            id={section.id} 
            className="max-w-6xl mx-auto my-16 p-8 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start justify-between p-8`}>
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <AnimatedImage imageUrls={section.imageUrls} alt={section.title} />
              </div>
              <div className="w-full md:w-1/2 md:px-8">
                <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                <p className="text-lg text-gray-700 mb-4">{section.content}</p>
                <div 
                  ref={el => expandedContentRefs.current[section.id] = el}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: '0px' }}
                >
                  <p className="text-lg text-gray-700 mt-4">{section.expandedContent}</p>
                </div>
                <Button 
                  variant="ghost"
                  className="flex items-center justify-center mt-4 text-blue-600 cursor-pointer w-full"
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={expandedSections[section.id]}
                  aria-controls={`expanded-content-${section.id}`}
                >
                  <span className="mr-2">{expandedSections[section.id] ? 'Mniej' : 'Więcej'}</span>
                  <ChevronDown 
                    className={`transform transition-transform duration-500 ${expandedSections[section.id] ? 'rotate-180' : ''}`} 
                  />
                </Button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}