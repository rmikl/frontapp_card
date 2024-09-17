import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface AnimatedImageProps {
  imageUrls: string[] // Zmienione na tablicę obrazków
  alt: string
  slideInterval?: number // Opcjonalny interwał slajdów w ms
}

export default function AnimatedImage({ imageUrls, alt, slideInterval = 3000 }: AnimatedImageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const imgRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible && imageUrls.length > 1) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length)
      }, slideInterval)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isVisible, currentIndex, imageUrls.length, slideInterval])

  return (
    <div 
      ref={imgRef}
      className="flex items-center justify-center overflow-hidden relative"
      style={{ width: '500px', height: '300px' }} // Upewnij się, że kontener ma określone wymiary
    >
      <div 
        className={`
          absolute top-0 left-0 w-full h-full
          transform transition-opacity duration-1000 ease-out
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <Image
          src={imageUrls[currentIndex]}
          layout="fill"
          objectFit="cover"
          alt={alt}
          className="rounded-lg shadow-lg transition-transform duration-1000 ease-out transform"
        />
      </div>
      {imageUrls.length > 1 && (
        <div 
          className={`
            absolute top-0 left-0 w-full h-full
            transform transition-opacity duration-1000 ease-out
            ${isVisible ? 'opacity-100' : 'opacity-0'}
            opacity-0
          `}
        >
          <Image
            src={imageUrls[(currentIndex + 1) % imageUrls.length]}
            layout="fill"
            objectFit="cover"
            alt={alt}
            className="rounded-lg shadow-lg transition-transform duration-1000 ease-out transform"
          />
        </div>
      )}
    </div>
  )
}