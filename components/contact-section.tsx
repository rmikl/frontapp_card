import { Mail, Phone, MapPin, MessageCircle, PhoneIncoming } from 'lucide-react'
import { Button } from './ui/Button'

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Inne elementy strony */}
      </main>
      <footer className="bg-lime-200 text-primary-foreground p-8 shadow-lg">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2412.520091835772!2d18.25775747645126!3d52.79496137213448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703508b5f31c1db%3A0xbf77c694daf36455!2sSzeroka%201%2C%2088-100%20Inowroc%C5%82aw!5e0!3m2!1spl!2spl!4v1726585577730!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              <span>ul. Szeroka 1 88-100 Inowrocław, pokój 116, I piętro</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIncoming className="w-6 h-6" />
              <span>Telefon: +48 691 688 911</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              <span>Signal: +48 691 688 911</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp: +48 691 688 911</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6" />
              <a href="mailto:krybami@wp.pl" className="hover:underline">krybami@wp.pl</a>
            </div>
            <div className="flex gap-4 mt-4">
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}