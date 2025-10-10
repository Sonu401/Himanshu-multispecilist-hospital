import { AOSInit } from "@/components/aos-init"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"

const serviceMap: Record<string, { title: string; body: string }> = {
  cardiology: {
    title: "Cardiology",
    body: "Advanced heart care including diagnostics, interventions, and rehabilitation.",
  },
  "general-medicine": {
    title: "General Medicine",
    body: "Primary care, preventive medicine, and comprehensive consultations.",
  },
  radiology: { title: "Radiology", body: "Imaging services including X-ray, CT, MRI, and ultrasound." },
  dentistry: { title: "Dentistry", body: "Preventive and restorative dental treatments for all ages." },
}

export default function ServiceDetails({ params }: { params: { slug: string } }) {
  const data = serviceMap[params.slug] || { title: "Service", body: "Details coming soon." }
  return (
    <>
      <AOSInit />
      <SiteHeader />
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: data.title }]}
      />
      <main>
        <section className="container mx-auto grid items-start gap-8 px-4 py-12 md:grid-cols-3">
          <article className="md:col-span-2" data-aos="fade-right">
            <img src="/service-hero.jpg" alt="" className="mb-6 rounded-lg border shadow-sm" />
            <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
            <p className="mt-3 text-gray-700">{data.body}</p>
          </article>
          <aside className="rounded-lg border bg-gray-50 p-4" data-aos="fade-left">
            <h2 className="mb-3 text-lg font-semibold text-gray-900">Contact</h2>
            <p className="text-sm text-gray-700">Questions about {data.title}? Our team can help.</p>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
