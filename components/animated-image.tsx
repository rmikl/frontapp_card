import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface AnimatedImageProps {
  imageUrl: string
  alt: string
}

export default function AnimatedImage({ imageUrl, alt }: AnimatedImageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

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

  return (
    <div 
      ref={imgRef}
      className="flex items-center justify-center overflow-hidden"
    >
      <div 
        className={`
          transform transition-all duration-1000 ease-out
          ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
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