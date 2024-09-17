'use client'

import { useState, useRef, useEffect } from 'react'
import HorizontalLightGrayMenu from '@/components/HorizontalLightGrayMenu'
import AnimatedImage from '@/components/animated-image'
import { ChevronDown } from 'lucide-react'

interface Section {
  id: string
  title: string
  content: string
  expandedContent: string
  imageUrls: string[]
}

const sections: Section[] = [
  // ... (sections data remains unchanged)
]

export default function CenteredSections() {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})
  const [expandedHeights, setExpandedHeights] = useState<{ [key: string]: number }>({})
  const expandedContentRefs = useRef<{ [key: string]: HTMLParagraphElement | null }>({})
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    sections.forEach(section => {
      if (expandedContentRefs.current[section.id]) {
        setExpandedHeights(prev => ({
          ...prev,
          [section.id]: expandedContentRefs.current[section.id]?.scrollHeight || 0
        }))
      }
    })
  }, [])

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      entries.forEach(entry => {
        const sectionId = entry.target.id
        if (sectionRefs.current[sectionId]) {
          sectionRefs.current[sectionId]?.style.setProperty('height', 'auto')
        }
      })
    })

    sections.forEach(section => {
      if (sectionRefs.current[section.id]) {
        observer.observe(sectionRefs.current[section.id] as Element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [expandedSections])

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="min-h-screen">
      <HorizontalLightGrayMenu />
      <div className="py-12">
        {sections.map((section, index) => (
          <section 
            key={section.id} 
            id={section.id} 
            ref={el => sectionRefs.current[section.id] = el}
            className="max-w-6xl mx-auto my-16 p-8 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg transition-all duration-500 ease-in-out"
          >
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between`}>
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <AnimatedImage imageUrls={section.imageUrls} alt={section.title} />
              </div>
              <div className="w-full md:w-1/2 md:px-8">
                <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                <p className="text-lg text-gray-700">{section.content}</p>
                <div 
                  className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                  style={{ maxHeight: expandedSections[section.id] ? expandedHeights[section.id] : 0 }}
                >
                  <p 
                    ref={el => expandedContentRefs.current[section.id] = el}
                    className="text-lg text-gray-700 mt-4"
                  >
                    {section.expandedContent}
                  </p>
                </div>
                <div 
                  className="flex items-center justify-end mt-4 text-gray-500 cursor-pointer"
                  onClick={() => toggleSection(section.id)}
                >
                  <span className="mr-2">{expandedSections[section.id] ? 'Mniej' : 'Więcej'}</span>
                  <ChevronDown 
                    className={`transform transition-transform duration-200 ${expandedSections[section.id] ? 'rotate-180' : ''}`} 
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}