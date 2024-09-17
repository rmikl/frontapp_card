import { Mail, Phone, MapPin } from 'lucide-react'

export default function Component() {
  return (
    <footer className="bottom-0 left-0 right-0 bg-lime-200 text-primary-foreground p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <a href="mailto:kontakt@example.com" className="hover:underline">kontakt@example.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <a href="tel:+48123456789" className="hover:underline">+48 123 456 789</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>ul. Przykładowa 123, 00-000 Warszawa</span>
          </div>
        </div>
      </div>
    </footer>
  )
}