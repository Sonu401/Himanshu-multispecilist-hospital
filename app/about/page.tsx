import { AOSInit } from "@/components/aos-init"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"

export default function AboutPage() {
  return (
    <>
      <AOSInit />
      <SiteHeader />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <main>
        <section className="container mx-auto grid items-center gap-8 px-4 py-12 md:grid-cols-2">
          <div data-aos="fade-right">
            <h1 className="text-3xl font-bold text-gray-900">About Himanshu Multispecilist Hospital</h1>
            <p className="mt-3 text-gray-700">
              Himanshu Multispecilist Hospital is a trusted healthcare provider delivering comprehensive medical services with compassion and
              innovation.
            </p>
            <p className="mt-2 text-gray-700">
              Our facilities are equipped with the latest technology and staffed by experienced medical professionals.
            </p>
          </div>
          <div data-aos="fade-left">
            <img src="/hospital-reception.jpg" alt="Hospital reception" className="rounded-lg border shadow-sm" />
          </div>
        </section>

        <section className="bg-gray-50 py-12">
          <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-sm" data-aos="fade-up">
              <h3 className="text-lg font-semibold text-gray-900">Mission</h3>
              <p className="mt-2 text-gray-700">To deliver compassionate, high-quality healthcare to every patient.</p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-lg font-semibold text-gray-900">Vision</h3>
              <p className="mt-2 text-gray-700">To be a leader in patient-centered medical innovation and care.</p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-lg font-semibold text-gray-900">Core Values</h3>
              <p className="mt-2 text-gray-700">Compassion, Excellence, Integrity, Teamwork.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto grid gap-6 px-4 py-12 md:grid-cols-4">
          {[
            { label: "Patients Treated", value: "120k+" },
            { label: "Specialist Doctors", value: "250+" },
            { label: "Awards", value: "35" },
            { label: "Years of Service", value: "20+" },
          ].map((s, i) => (
            <div
              key={s.label}
              className="rounded-lg border bg-white p-6 text-center shadow-sm"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className="text-3xl font-bold text-blue-600">{s.value}</div>
              <div className="mt-1 text-sm text-gray-700">{s.label}</div>
            </div>
          ))}
        </section>

        <section className="bg-white py-12">
          <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2">
            <div data-aos="fade-right">
              <img
                src="/chief-medical-officer.jpg"
                alt="Chief Medical Officer"
                className="rounded-lg border shadow-sm"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-2xl font-bold text-gray-900">Leadership Highlight</h2>
              <p className="mt-3 text-gray-700">
                Meet our Chief Medical Officer, Dr. Olivia Carter, leading our medical teams with a vision for
                excellence and empathy.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
