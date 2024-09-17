import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AnimatedImage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div 
        className={`
          transform transition-all duration-1000 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        `}
      >
        <Image
          src="/images/self.jpg"
          width={300}
          height={200}
          alt="Animowany obrazek"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}