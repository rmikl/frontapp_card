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
    content: 'Jestem doświadczonym specjalistą w zakresie interwencji kryzysowej i terapii psychologicznej.',
    expandedContent: 'Posiadam szeroką wiedzę i umiejętności w zakresie pracy z osobami dotkniętymi przemocą, problemami emocjonalnymi oraz kryzysami psychologicznymi.',
    imageUrls: ['/images/self1.jpg', '/images/self2.jpg', '/images/self3.jpg'],
  },
  {
    id: 'experience',
    title: 'Doświadczenie Zawodowe',
    content: 'Doświadczenie zawodowe zdobywałam pracując z różnorodnymi grupami zawodowym oraz osobami, które miały kłopoty w wielu obszarach.',
    expandedContent: 'Byłam zatrudniona w wojsku jako konsultant dowódcy jednostki ds. psychoprofilaktyki. Tworzyłam i kierowałam Ośrodkiem Interwencji Kryzysowej w Inowrocławiu. W 2010 r. pozyskałam środki z Ministerstwa Sprawiedliwości na pomoc osobom pokrzywdzonym przestępstwem w kujawsko-pomorskim, świadkom i ich rodzinom, gdzie pracowałam, jako psycholog do 2023 r. Od 12 lat prowadzę zajęcia i konsultacje indywidualne w CIS w Łojewie oraz Ośrodku Pomocy Społecznej w Jeziorach Wielkich, udzielając wsparcia osobom, podopiecznym ośrodka oraz prowadząc grupy wsparcia. Pomagam osobom z niepełnosprawnościami ze Środowiskowego Domu Samopomocy w Wonorzu, Kruszwicy oraz Żalinowie. Od 4 lat wspieram policjantów z województwa kujawsko-pomorskiego, zrzeszonych w NSZZ Policjantów Województwa Kujawsko-Pomorskiego. Współpracuję z jednostkami samorządowymi, organizacjami pozarządowymi udzielając wsparcia psychologicznego oraz prowadząc grupy wsparcia, psychoedukację i szkolenia. W 2010 r. uzyskałam certyfikowanym superwizorem interwencji kryzysowej rekomendowanym przez PTP. Prowadzę superwizje indywidualne i grupowe.',
    imageUrls: ['/images/handshake.jpg'],
  },
  {
    id: 'education',
    title: 'Wykształcenie',
    content: 'Ukończyłam studia psychologiczne w Szkole Wyższej Psychologii Społecznej w Warszawie, a także studia podyplomowe na Uniwersytecie Mikołaja Kopernika w Toruniu, Uniwersytecie im. Adama Mickiewicza w Poznaniu, Uniwersytecie Gdańskim i Uniwersytecie Wrocławskim.',
    expandedContent: '• Szkoła Wyższa Psychologii Społecznej w Warszawie; kierunek: psychologia\n• Uniwersytet Mikołaja Kopernika w Toruniu; Studium Podyplomowe Organizacji Pomocy Społecznej\n• Uniwersytet im. Adama Mickiewicza w Poznaniu; Studia Podyplomowe w zakresie Pomocy Psychologicznej\n• Uniwersytet Gdański; Studia Podyplomowe z zakresu pedagogiki specjalnej\n• Uniwersytet Wrocławski; kierunek: resocjalizacja',
    imageUrls: ['/images/books.jpg'],
  },
  {
    id: 'training',
    title: 'Kursy i Szkolenia',
    content: 'Uczestniczyłam w licznych kursach i szkoleniach, w tym z terapii przetwarzania poznawczego dla osób z PTSD, terapii traumy, terapii schematów, oraz wielu innych z zakresu psychologii, uzależnień i interwencji kryzysowej.',
    expandedContent: '• Terapia przetwarzania poznawczego dla osób z PTSD (16h), Patricia Resick\n• Kurs terapii traumy oparty o neurobiologię interpersonalną (80 h), Sabina Sadecka\n• Zorientowana na traumę terapia poznawczo-behawioralna(16 h), Lazurowa Terapia Poznawczo-Behawioralna\n• Szkolenie z terapii schematów (100 h), Phanari, Toruń\n• 4 letnie Podyplomowe Studium Psychoterapii, AMiE, Warszawa\n• Szkoła Trenerów i Doradców Personalnych (300 godzin) Dialog Plus Bydgoszcz\n• Warsztaty trenerów – edukatorów w zakresie interwencji kryzysowej (150 godzin)\n• Kurs zaawansowany „Warsztatów interwencji kryzysowej" (150 godzin)\n• Seminar on Trauma and Recovery, Mooli Lahad\n• Szkolenie „Interwencja kryzysowa: podstawy profesjonalnej praktyki, przemoc seksualna wobec dzieci" (80 h)\n• Szkolenie w zakresie udzielania pomocy osobom będącym w kryzysie psychologicznym (400 godzin)\n• oraz wiele innych szkoleń i warsztatów z zakresu psychologii, uzależnień i interwencji kryzysowej oraz terapii traumy.',
    imageUrls: ['/images/training.jpg'],
  },
  {
    id: 'support',
    title: 'Zakres Prowadzonego Wsparcia',
    content: 'Specjalizuję się w szerokim zakresie wsparcia psychologicznego i terapeutycznego.',
    expandedContent: '• Interwencja kryzysowa: Pomoc osobom w sytuacjach kryzysowych, takich jak utrata bliskiej osoby, przemoc domowa, traumy i inne nagłe wydarzenia życiowe.\n• Terapia traumy: Praca z osobami dotkniętymi traumą, oferowanie wsparcia w procesie zdrowienia i odzyskiwania równowagi psychicznej.\n• Terapia poznawczo-behawioralna (CBT): Praca z klientami nad zmianą negatywnych wzorców myślenia i zachowania, które wpływają na ich samopoczucie i życie codzienne.\n• Praca z młodzieżą: Wsparcie psychologiczne dla młodzieży, w tym pomoc w radzeniu sobie z trudnościami emocjonalnymi, problemami szkolnymi i rozwojowymi.\n• Prowadzenie szkoleń i warsztatów: Organizacja i prowadzenie szkoleń z zakresu interwencji kryzysowej, profilaktyki uzależnień, radzenia sobie ze stresem, umiejętności społecznych i innych tematów związanych z zdrowiem psychicznym.\n• Superwizje indywidualne i grupowe.',
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
    <div className="min-h-screen bg-transparent">
      <HorizontalLightGrayMenu />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        {sections.map((section, index) => (
          <section 
            key={section.id} 
            id={section.id} 
            className="max-w-6xl mx-auto my-16 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:bg-opacity-90"
          >
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start justify-between p-8`}>
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <AnimatedImage imageUrls={section.imageUrls} alt={section.title} />
              </div>
              <div className="w-full md:w-1/2 md:px-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">{section.title}</h2>
                <p className="text-lg text-gray-700 mb-4">{section.content}</p>
                <div 
                  ref={el => expandedContentRefs.current[section.id] = el}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: '0px' }}
                >
                  <p className="text-lg text-gray-700 mt-4 whitespace-pre-line">{section.expandedContent}</p>
                </div>
                <Button 
                  variant="ghost"
                  className="flex items-center justify-center mt-4 text-blue-600 cursor-pointer w-full hover:bg-blue-50 transition-colors duration-300"
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