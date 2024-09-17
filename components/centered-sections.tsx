import Image from 'next/image'

interface Section {
  id: string
  title: string
  content: string
  imageUrl: string
}

const sections: Section[] = [
  {
    id: '#about',
    title: 'Profil Zawodowy',
    content: 'Jestem doświadczonym specjalistą w zakresie interwencji kryzysowej i terapii psychologicznej. Posiadam szeroką wiedzę i umiejętności w zakresie pracy z osobami dotkniętymi przemocą, problemami emocjonalnymi oraz kryzysami psychologicznymi.',
    imageUrl: '/images/profil-zawodowy.jpg',
  },
  {
    id: '#experience',
    title: 'Doświadczenie Zawodowe',
    content: 'Moje doświadczenie obejmuje pracę jako konsultant ds. psychoprofilaktyki w wojsku, kierownik Ośrodka Interwencji Kryzysowej w Inowrocławiu, psycholog w Programie Pomocy Osobom Pokrzywdzonym Przestępstwem, oraz wsparcie dla policjantów w województwie kujawsko-pomorskim.',
    imageUrl: '/images/doswiadczenie.jpg',
  },
  {
    id: '#education',
    title: 'Wykształcenie',
    content: 'Ukończyłam studia psychologiczne w Szkole Wyższej Psychologii Społecznej w Warszawie, a także studia podyplomowe na Uniwersytecie Mikołaja Kopernika w Toruniu, Uniwersytecie im. Adama Mickiewicza w Poznaniu, Uniwersytecie Gdańskim i Uniwersytecie Wrocławskim.',
    imageUrl: '/images/wyksztalcenie.jpg',
  },
  {
    id: '#training',
    title: 'Kursy i Szkolenia',
    content: 'Uczestniczyłam w licznych kursach i szkoleniach, w tym z terapii przetwarzania poznawczego dla osób z PTSD, terapii traumy, terapii schematów, oraz wielu innych z zakresu psychologii, uzależnień i interwencji kryzysowej.',
    imageUrl: '/images/kursy.jpg',
  },
  {
    id: '#support',
    title: 'Zakres Prowadzonego Wsparcia',
    content: 'Oferuję wsparcie w zakresie interwencji kryzysowej, terapii traumy, terapii poznawczo-behawioralnej, pracy z młodzieżą, prowadzenia szkoleń i warsztatów, oraz superwizji indywidualnych i grupowych.',
    imageUrl: '/images/wsparcie.jpg',
  },
]

export default function CenteredSections() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {sections.map((section, index) => (
        <section key={section.id} className="max-w-6xl mx-auto my-16 p-8 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src={section.imageUrl}
                alt={section.title}
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-lg text-gray-700">{section.content}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}