"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Anjali Verma",
    text: "The doctors and staff at Himanshu Hospital are truly caring. I felt at ease throughout my treatment.",
  },
  {
    name: "Rohit Sharma",
    text: "State-of-the-art facilities and prompt services. Highly recommend for families!",
  },
  {
    name: "Priya Singh",
    text: "Clean, safe, and professional environment. The medical team is very knowledgeable.",
  },
  {
    name: "Amit Kumar",
    text: "From appointment to discharge, the experience was smooth and reassuring.",
  },
  {
    name: "Neha Gupta",
    text: "Friendly staff and excellent care. I felt like my health was a priority here.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-blue-700 md:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mt-3 text-gray-600">
            Real stories from people who experienced our care and compassion.
          </p>
          <span className="mt-4 inline-block h-[3px] w-16 rounded-full bg-blue-600"></span>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <figure
                className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Decorative Quote Icon */}
                <span className="absolute top-4 left-4 text-4xl text-blue-100">“</span>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 relative z-10 text-sm md:text-base leading-relaxed">
                  {t.text}
                </blockquote>

                {/* Patient Name */}
                <figcaption className="mt-4 text-sm font-semibold text-gray-900 relative z-10">
                  — {t.name}
                </figcaption>

                {/* Optional Profile Circle */}
                <div className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shadow-md">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
