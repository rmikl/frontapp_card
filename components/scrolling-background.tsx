import React, { ReactNode } from 'react'

interface ScrollingBackgroundProps {
  children: ReactNode
  imageUrl: string
}

export default function ScrollingBackground({ children, imageUrl }: ScrollingBackgroundProps) {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("${imageUrl}")`,
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-sm" />

      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}