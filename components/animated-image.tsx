import { useState, useEffect } from 'react'
import Image from 'next/image'

interface AnimatedImageProps {
  imageUrl: string
  alt: string
}

export default function AnimatedImage({ imageUrl, alt }: AnimatedImageProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex items-center justify-center">
      <div 
        className={`
          transform transition-all duration-1000 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        `}
      >
        <Image
          src={imageUrl}
          width={500}
          height={300}
          alt={alt}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}