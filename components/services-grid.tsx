import Link from "next/link";
import { FaBrain, FaBone, FaMicroscope, FaSyringe, FaVirus, FaDeaf, FaWalking, FaWater } from "react-icons/fa";

const services = [
  {
    slug: "neuro-surgery",
    title: "Neuro Surgery",
    icon: FaBrain,
    desc: "Advanced brain and nervous system surgeries.",
  },
  {
    slug: "orthopedic-surgery",
    title: "Orthopedic Surgery",
    icon: FaBone,
    desc: "Bone, joint, and spine care with modern surgical methods.",
  },
  {
    slug: "laparoscopic-surgery",
    title: "Laparoscopic and Abdominal Surgery",
    icon: FaMicroscope,
    desc: "Minimally invasive and abdominal operations.",
  },
  {
    slug: "plastic-surgery",
    title: "Plastic Surgery / Skin and Venereal Diseases",
    icon: FaSyringe,
    desc: "Reconstructive, cosmetic, and skin-related treatments.",
  },
  {
    slug: "hepatitis-b-treatment",
    title: "Hepatitis-B Positive Treatment and Operations",
    icon: FaVirus,
    desc: "Comprehensive Hepatitis-B treatment and surgical procedures.",
  },
  {
    slug: "ent-treatment",
    title: "Ear, Nose and Throat Treatment",
    icon: FaDeaf,
    desc: "Diagnosis and treatment for ENT-related conditions.",
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    icon: FaWalking,
    desc: "Rehabilitation and physical therapy for mobility and recovery.",
  },
  {
    slug: "lithotripsy",
    title: "Lithotripsy",
    icon: FaWater,
    desc: "Non-invasive treatment for kidney stones using shock waves.",
  },
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
