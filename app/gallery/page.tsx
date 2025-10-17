"use client";

import { AOSInit } from "@/components/aos-init";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { GalleryGrid } from "@/components/gallery-grid";

export default function GalleryPage() {
  return (
    <>
      <AOSInit />
      <SiteHeader />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6"
            data-aos="fade-down"
          >
            Our Hospital Gallery
          </h1>
          <p
            className="text-gray-600 mb-12 text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore our modern facilities, compassionate care, and world-class
            medical infrastructure — a glimpse into Himanshu Hospital’s
            commitment to excellence.
          </p>
          <GalleryGrid />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
