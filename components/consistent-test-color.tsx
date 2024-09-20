import React from 'react'

export default function Component() {
  return (
    <div className="p-4 bg-white">
      <p className="text-black text-opacity-100 text-base leading-normal">
        This text should appear black on all devices, including iOS.
      </p>
      <p className="text-[#000000] text-opacity-100 text-base leading-normal mt-4">
        This is an alternative approach using a hex color value.
      </p>
      <style jsx global>{`
        /* iOS-specific CSS fix */
        html {
          -webkit-text-size-adjust: 100%;
        }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  )
}