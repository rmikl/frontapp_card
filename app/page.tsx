'use client'; // Użycie deklaracji klienta

import { useState, useEffect } from 'react';
import HorizontalLightGrayMenu from '@/components/HorizontalLightGrayMenu';
import Image from 'next/image';
import ScrollingBackground from '@/components/scrolling-background';
import ContactSection from '@/components/contact-section';
import AnimatedImage from '@/components/animated-image';

export default function Home() {
  return (
    <ScrollingBackground imageUrl="/images/tlo.jpg">
      <div className="relative z-10">
        <HorizontalLightGrayMenu />
        <div className="p-8">
          {/* Główna sekcja - Strona główna */}
          <section id="home" className="min-h-screen flex flex-col items-center justify-center">
            <AnimatedImage />
            <h1 className="text-5xl font-bold mb-4">Krystyna Miklas</h1>
            <h2 className="text-3xl mb-6">Psycholog, Specjalista ds. Interwencji Kryzysowej</h2>
            <p className="text-lg text-center max-w-2xl">
              Witaj na mojej stronie! Oferuję profesjonalne wsparcie psychologiczne i interwencję kryzysową dla osób
              potrzebujących pomocy w trudnych chwilach życia.
            </p>
          </section>

          {/* Sekcja - Profil zawodowy */}
          <section id="about" className="min-h-screen py-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Profil Zawodowy</h2>
            <div className="max-w-4xl mx-auto">
              <p className="mb-4">
                Jestem doświadczonym specjalistą w zakresie interwencji kryzysowej i terapii psychologicznej. Posiadam
                szeroką wiedzę i umiejętności w zakresie pracy z osobami dotkniętymi przemocą, problemami emocjonalnymi
                oraz kryzysami psychologicznymi.
              </p>
              <Image
                src="/images/profil-zawodowy.jpg"
                alt="Profil Zawodowy"
                width={600}
                height={400}
                className="mt-4 rounded"
              />
            </div>
          </section>

          {/* Sekcja - Doświadczenie */}
          <section id="experience" className="min-h-screen py-16 bg-gray-100">
            <h2 className="text-4xl font-bold mb-8 text-center">Doświadczenie Zawodowe</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-2xl font-semibold">Konsultant ds. Psychoprofilaktyki w Wojsku</h3>
                <p className="text-gray-700">Praca z różnorodnymi grupami zawodowymi oraz osobami z kłopotami w wielu obszarach.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Kierownik Ośrodka Interwencji Kryzysowej w Inowrocławiu</h3>
                <p className="text-gray-700">Tworzenie i kierowanie ośrodkiem wspierającym osoby w sytuacjach kryzysowych.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Psycholog w Programie Pomocy Osobom Pokrzywdzonym Przestępstwem</h3>
                <p className="text-gray-700">Pomoc osobom pokrzywdzonym przestępstwem, świadkom i ich rodzinom w województwie kujawsko-pomorskim (2010-2023).</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Wsparcie dla Policjantów w Kujawsko-Pomorskim</h3>
                <p className="text-gray-700">Od 4 lat wspieram policjantów zrzeszonych w NSZZ Policjantów Województwa Kujawsko-Pomorskiego.</p>
              </div>
            </div>
          </section>

          {/* Sekcja - Wykształcenie */}
          <section id="education" className="min-h-screen py-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Wykształcenie</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-2xl font-semibold">Szkoła Wyższa Psychologii Społecznej w Warszawie</h3>
                <p className="text-gray-700">Kierunek: Psychologia</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Uniwersytet Mikołaja Kopernika w Toruniu</h3>
                <p className="text-gray-700">Studium Podyplomowe Organizacji Pomocy Społecznej</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Uniwersytet im. Adama Mickiewicza w Poznaniu</h3>
                <p className="text-gray-700">Studia Podyplomowe w zakresie Pomocy Psychologicznej</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Uniwersytet Gdański</h3>
                <p className="text-gray-700">Studia Podyplomowe z zakresu Pedagogiki Specjalnej</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Uniwersytet Wrocławski</h3>
                <p className="text-gray-700">Kierunek: Resocjalizacja</p>
              </div>
            </div>
          </section>

          {/* Sekcja - Kursy i szkolenia */}
          <section id="training" className="min-h-screen py-16 bg-gray-100">
            <h2 className="text-4xl font-bold mb-8 text-center">Kursy i Szkolenia</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Terapia przetwarzania poznawczego dla osób z PTSD (16h), Patricia Resick</li>
                <li>Kurs terapii traumy oparty o neurobiologię interpersonalną (80 h), Sabina Sadecka</li>
                <li>Zorientowana na traumę terapia poznawczo-behawioralna (16 h), Lazurowa Terapia Poznawczo-Behawioralna</li>
                <li>Szkolenie z terapii schematów (100 h), Phanari, Toruń</li>
                <li>4-letnie Podyplomowe Studium Psychoterapii, AMiE, Warszawa</li>
                <li>Szkoła Trenerów i Doradców Personalnych (300 godzin) Dialog Plus Bydgoszcz</li>
                <li>Warsztaty trenerów – edukatorów w zakresie interwencji kryzysowej (150 godzin)</li>
                <li>Kurs zaawansowany „Warsztatów interwencji kryzysowej” (150 godzin)</li>
                <li>Seminar on Trauma and Recovery, Mooli Lahad</li>
                <li>Szkolenie „Interwencja kryzysowa: podstawy profesjonalnej praktyki, przemoc seksualna wobec dzieci” (80 h)</li>
                <li>Szkolenie w zakresie udzielania pomocy osobom będącym w kryzysie psychologicznym (400 godzin)</li>
                <li>I wiele innych szkoleń i warsztatów z zakresu psychologii, uzależnień i interwencji kryzysowej oraz terapii traumy.</li>
              </ul>
            </div>
          </section>

          {/* Sekcja - Zakres wsparcia */}
          <section id="support" className="min-h-screen py-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Zakres Prowadzonego Wsparcia</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Interwencja kryzysowa:</strong> Pomoc osobom w sytuacjach kryzysowych, takich jak utrata bliskiej osoby, przemoc domowa, traumy i inne nagłe wydarzenia życiowe.</li>
                <li><strong>Terapia traumy:</strong> Praca z osobami dotkniętymi traumą, oferowanie wsparcia w procesie zdrowienia i odzyskiwania równowagi psychicznej.</li>
                <li><strong>Terapia poznawczo-behawioralna (CBT):</strong> Praca z klientami nad zmianą negatywnych wzorców myślenia i zachowania, które wpływają na ich samopoczucie i życie codzienne.</li>
                <li><strong>Praca z młodzieżą:</strong> Wsparcie psychologiczne dla młodzieży, w tym pomoc w radzeniu sobie z trudnościami emocjonalnymi, problemami szkolnymi i rozwojowymi.</li>
                <li><strong>Prowadzenie szkoleń i warsztatów:</strong> Organizacja i prowadzenie szkoleń z zakresu interwencji kryzysowej, profilaktyki uzależnień, radzenia sobie ze stresem, umiejętności społecznych i innych tematów związanych ze zdrowiem psychicznym.</li>
                <li><strong>Superwizje indywidualne i grupowe:</strong> Prowadzenie superwizji dla innych specjalistów w zakresie psychologii i interwencji kryzysowej.</li>
              </ul>
            </div>
          </section>
        </div>
        <div className="min-h-screen pb-[footer-height]">
          <section id="contact">
            <ContactSection />
          </section>
        </div>
      </div>
    </ScrollingBackground>
);
}
