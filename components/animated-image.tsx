'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface AnimatedImageProps {
  imageUrls: string[]
  alt: string
  interval?: number // czas w milisekundach między zmianami obrazów
}

export default function AnimatedImage({ imageUrls, alt, interval = 5000 }: AnimatedImageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (imageUrls.length <= 1) return // Nie uruchamiaj interwału, jeśli jest tylko jeden obraz lub mniej

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length)
    }, interval)

    return () => clearInterval(intervalId) // Czyszczenie interwału przy odmontowaniu komponentu
  }, [imageUrls, interval])

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
      {imageUrls.map((url, index) => (
        <Image
          key={url}
          src={url}
          alt={`${alt} ${index + 1}`}
          fill
          style={{
            objectFit: 'cover',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        />
      ))}
    </div>
  )
}