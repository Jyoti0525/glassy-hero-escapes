
'use client'

import { useRef } from "react"
import { ImageTrail } from "@/components/ui/image-trail"

const HeroImageTrail = () => {
  const ref = useRef<HTMLDivElement>(null)

  // Vacation rental themed images from Unsplash
  const images = [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b", // Luxury villa
    "https://images.unsplash.com/photo-1566073771259-6a8506099945", // Beautiful hotel
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa", // Mountain cabin
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d", // Beach house
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", // Modern apartment
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9", // Cozy cottage
  ].map(url => `${url}?auto=format&fit=crop&w=300&q=80`)

  return (
    <div className="absolute inset-0 w-full h-full" ref={ref}>
      <ImageTrail containerRef={ref} interval={150}>
        {images.map((url, index) => (
          <div
            key={index}
            className="flex relative overflow-hidden w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-2xl border-2 border-orange-400/30"
          >
            <img
              src={url}
              alt={`Vacation rental ${index + 1}`}
              className="object-cover absolute inset-0 hover:scale-110 transition-transform"
            />
          </div>
        ))}
      </ImageTrail>
    </div>
  )
}

export { HeroImageTrail }
