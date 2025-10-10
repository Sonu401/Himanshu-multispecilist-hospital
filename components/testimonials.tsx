"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const testimonials = [
  { name: "Sophia M.", text: "Amazing care and friendly staff. Highly recommend!" },
  { name: "Ethan R.", text: "Quick diagnosis with great follow-up." },
  { name: "Mia L.", text: "Clean facilities and compassionate doctors." },
]

export function Testimonials() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">What Patients Say</h2>
          <p className="mt-2 text-gray-700">Real stories from our community.</p>
        </div>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <figure className="h-full rounded-lg border bg-gray-50 p-5 shadow-sm" data-aos="fade-up">
                <blockquote className="text-gray-700">“{t.text}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-gray-900">— {t.name}</figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
