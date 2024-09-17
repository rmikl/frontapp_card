'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

export default function RODOPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('rodoConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('rodoConsent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-md z-50">
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-700 mb-4 md:mb-0 md:mr-4">
          Ta strona używa plików cookie, aby zapewnić najlepszą jakość korzystania z naszej witryny. 
          Korzystając z tej strony, zgadzasz się na użycie plików cookie zgodnie z naszą Polityką Prywatności.
        </p>
        <Button onClick={handleAccept} className="bg-lime-500 hover:bg-lime-600 text-white" variant={undefined}>
          Akceptuję
        </Button>
      </div>
    </div>
  )
}