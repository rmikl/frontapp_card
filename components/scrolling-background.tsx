import React, { ReactNode } from 'react'

interface ScrollingBackgroundProps {
  children: ReactNode
  imageUrl: string
}

export default function ScrollingBackground({ children, imageUrl }: ScrollingBackgroundProps) {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${imageUrl}")`,
          backgroundAttachment: 'scroll'
        }}
      />

      {/* Gray overlay */}
      <div className="absolute inset-0 bg-gray-500 bg-opacity-50" />

      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-sm" />

      {/* Content container */}
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  )
}