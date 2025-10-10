import { DoctorCard } from "./doctor-card"

const doctors = [
  { name: "Dr. Olivia Carter", role: "Cardiologist" },
  { name: "Dr. Liam Walker", role: "Radiologist" },
  { name: "Dr. Emma Patel", role: "General Physician" },
  { name: "Dr. Noah Kim", role: "Dentist" },
  { name: "Dr. Ava Johnson", role: "Neurologist" },
  { name: "Dr. Lucas Brown", role: "Pediatrician" },
]

export function DoctorsGrid({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? doctors.slice(0, limit) : doctors
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Meet Our Doctors</h2>
        <p className="mt-2 text-gray-700">Experienced professionals dedicated to your health.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((d, i) => (
          <div data-aos="fade-up" data-aos-delay={i * 100} key={d.name}>
            <DoctorCard name={d.name} role={d.role} />
          </div>
        ))}
      </div>
    </section>
  )
}
