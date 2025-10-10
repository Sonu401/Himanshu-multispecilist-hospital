"use client"

import { useState } from "react"

const images = Array.from({ length: 9 }).map((_, i) => ({
  src: `/placeholder.svg?height=640&width=960&query=hospital%20photo%20${i + 1}`,
  alt: `Gallery photo ${i + 1}`,
}))

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null)
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Gallery</h2>
        <p className="mt-2 text-gray-700">A glimpse into our facilities and team.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <button key={i} className="group overflow-hidden rounded-lg border bg-gray-100" onClick={() => setActive(i)}>
            <img
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              className="h-56 w-full object-cover transition group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setActive(null)}
        >
          <img
            src={images[active].src || "/placeholder.svg"}
            alt={images[active].alt}
            className="max-h-[85vh] w-auto max-w-[90vw] rounded-lg border shadow-2xl"
          />
        </div>
      )}
    </section>
  )
}
