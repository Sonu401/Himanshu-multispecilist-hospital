"use client";

import { AOSInit } from "@/components/aos-init";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumb } from "@/components/breadcrumb";

export default function AboutPage() {
  return (
    <>
      <AOSInit />
      <SiteHeader />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <main className="overflow-hidden">
        {/* ---------------- ABOUT SECTION ---------------- */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16">
          <div className="container mx-auto grid items-center gap-10 px-6 md:grid-cols-2">
            <div data-aos="fade-right">
              <h1 className="text-4xl font-extrabold text-blue-700 md:text-5xl">
                About{" "}
                <span className="text-gray-900">
                  Himanshu Multispecialist Hospital
                </span>
              </h1>
              <p className="mt-6 text-gray-700 leading-relaxed">
                At{" "}
                <span className="font-semibold text-blue-600">
                  Himanshu Multispecialist Hospital
                </span>
                , we are committed to delivering world-class healthcare with
                compassion, technology, and innovation. Our focus is to make
                high-quality medical care accessible and patient-centered.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                From emergency care to advanced surgeries and specialized
                treatments, our facilities are equipped with the latest
                technologies and managed by highly experienced doctors and
                staff.
              </p>
            </div>

            <div data-aos="fade-left" className="flex justify-center">
              <img
                src="/slider1.jpeg"
                alt="About Himanshu Hospital"
                className="w-[85%] max-w-md rounded-2xl shadow-xl border border-gray-200 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* ---------------- MISSION / VISION / VALUES ---------------- */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 grid gap-8 md:grid-cols-3 text-center">
            {[
              {
                title: "Our Mission",
                text: "To deliver compassionate, high-quality, and accessible healthcare to every patient with excellence and empathy.",
                icon: "❤️",
              },
              {
                title: "Our Vision",
                text: "To become a leading center for medical innovation and patient-centered care in the region.",
                icon: "🌟",
              },
              {
                title: "Core Values",
                text: "Compassion, Integrity, Excellence, and Teamwork — the pillars that define our approach to care.",
                icon: "🤝",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="rounded-2xl border border-gray-100 bg-gradient-to-b from-blue-50 to-white p-8 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- STATISTICS SECTION ---------------- */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto grid gap-8 px-6 md:grid-cols-4 text-center">
            {[
              { label: "Patients Treated", value: "10K+" },
              { label: "Specialist Doctors", value: "20+" },
              { label: "Awards Won", value: "35+" },
              { label: "Years of Service", value: "5+" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className="rounded-2xl bg-white shadow-md p-8 border border-gray-100 hover:shadow-lg transition-transform hover:-translate-y-2"
              >
                <div className="text-4xl font-bold text-blue-700">
                  {stat.value}
                </div>
                <div className="mt-2 text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- LEADERSHIP SECTION ---------------- */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6 text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              Our Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries guiding Himanshu Hospital with dedication,
              compassion, and innovation in healthcare excellence.
            </p>
          </div>

          <div className="container mx-auto grid gap-10 md:grid-cols-2 px-6">
            {[
              {
                name: "Dr. S. K. Gupta",
                role: "Managing Director",
                image: "/Dr.SK Gupta.jpeg",
                desc: "With over 25 years of experience, Dr. Gupta drives hospital growth and ensures excellence across all departments with an unwavering focus on patient care.",
              },
              {
                name: "Dr. S. K. Sharma",
                role: "Managing Director",
                image: "/Dr.SK Sharma.jpeg",
                desc: "Dr. Sharma oversees strategic planning and quality management, blending modern medicine with compassionate service for every patient.",
              },
            ].map((person, i) => (
              <div
                key={person.name}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 p-6 flex flex-col items-center"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg mb-6">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {person.name}
                </h3>
                <p className="text-blue-600 font-medium mt-1">{person.role}</p>
                <p className="mt-3 text-gray-600 leading-relaxed text-center">
                  {person.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
