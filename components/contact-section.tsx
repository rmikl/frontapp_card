import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7783525796113!2d21.012228776687614!3d52.23082037198037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97552d0abf165!2sPa%C5%82ac%20Kultury%20i%20Nauki!5e0!3m2!1spl!2spl!4v1686665754093!5m2!1spl!2spl"
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
              <span>ul. Przykładowa 123, 00-000 Warszawa</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              <span>Signal: +48 123 456 789</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp: +48 123 456 789</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6" />
              <a href="mailto:kontakt@example.com" className="hover:underline">kontakt@example.com</a>
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Signal
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
