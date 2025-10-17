"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    src: "/blog1.jpeg",
    caption: "State-of-the-art Operation Theater",
  },
  {
    id: 2,
    src: "/blog2.jpeg",
    caption: "Modern Patient Ward",
  },
  {
    id: 3,
    src: "/blog3.jpeg",
    caption: "Advanced Radiology Department",
  },
  {
    id: 4,
    src: "/blog4.jpeg",
    caption: "Caring Maternity Ward",
  },
    {
    id: 5,
    src: "/blog1.jpeg",
    caption: "24/7 Emergency Room",
  },
  {
    id: 6,
    src: "/blog3.jpeg",
    caption: "Spacious Reception & Waiting Area",
  },
];

export function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {galleryItems.map((item, i) => (
        <motion.figure
          key={item.id}
          data-aos="zoom-in"
          data-aos-delay={i * 100}
          className="group relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
          onClick={() => setSelected(item.id)}
        >
          {/* Image */}
          <Image
            src={item.src}
            alt={item.caption}
            width={600}
            height={400}
            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay Caption */}
          <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white py-3 px-4 opacity-100">
            <p className="font-semibold text-base">{item.caption}</p>
          </figcaption>
        </motion.figure>
      ))}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                src={
                  galleryItems.find((item) => item.id === selected)?.src || ""
                }
                alt="Gallery Image"
                width={1200}
                height={800}
                className="w-full h-auto object-cover rounded-2xl"
              />
              <button
                className="absolute top-3 right-3 bg-white/90 hover:bg-white text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
