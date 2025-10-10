import { AOSInit } from "@/components/aos-init"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { AboutPreview } from "@/components/about-preview"
import { ServicesGrid } from "@/components/services-grid"
import { DoctorsGrid } from "@/components/doctors-grid"
import { AppointmentForm } from "@/components/appointment-form"
import { Testimonials } from "@/components/testimonials"
import { BlogList } from "@/components/blog-list"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <AOSInit />
      <SiteHeader />
      <main>
        <Hero />
        <AboutPreview />
        <ServicesGrid />
        <DoctorsGrid limit={3} />
        <AppointmentForm />
        <Testimonials />
        <BlogList limit={3} />
      </main>
      <SiteFooter />
    </>
  )
}
