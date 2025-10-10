import Link from "next/link"
import { FaHeartbeat, FaStethoscope, FaTooth, FaXRay } from "react-icons/fa"

const services = [
  { slug: "cardiology", title: "Cardiology", icon: FaHeartbeat, desc: "Heart health diagnostics and treatments." },
  { slug: "general-medicine", title: "General Medicine", icon: FaStethoscope, desc: "Primary care and consultations." },
  { slug: "radiology", title: "Radiology", icon: FaXRay, desc: "Advanced imaging and diagnostics." },
  { slug: "dentistry", title: "Dentistry", icon: FaTooth, desc: "Comprehensive dental care." },
]

export function ServicesGrid() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Our Services</h2>
          <p className="mt-2 text-gray-700">We offer a wide range of medical services for your wellbeing.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-lg border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <s.icon className="mb-4 text-3xl text-blue-600" aria-hidden />
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
              <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
