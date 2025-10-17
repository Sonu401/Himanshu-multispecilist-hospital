"use client";

import { DoctorCard } from "./doctor-card";

const doctors = [
  {
    name: "Dr. Rajiv Kumar",
    role: "Medicine Department",
    qualification: "M.B.B.S., M.D. (Medicine)",
    image: "/Dr.SK Gupta.jpeg",
  },
  {
    name: "Dr. Sanjeev Nayak",
    role: "Neuro Surgery Department",
    qualification: "M.B.B.S., M.Ch. (Neuro Surgery)",
    image: "/Dr.SK Sharma.jpeg",
  },
  {
    name: "Dr. Vivek Gupta",
    role: "Orthopedic Department",
    qualification: "M.B.B.S., M.S. (Ortho)",
    image: "/Dr.SK Gupta.jpeg",
  },
  {
    name: "Dr. Ankur Modi",
    role: "Nephrology Department",
    qualification: "M.B.B.S., D.N.B. (Nephrology)",
    image: "/Dr.SK Sharma.jpeg",
  },
  {
    name: "Dr. M. Prakash",
    role: "ENT Department",
    qualification: "M.B.B.S., D.L.O. (ENT Specialist)",
    image: "/Dr.SK Gupta.jpeg",
  },
  {
    name: "Dr. Pawan Narayan",
    role: "Cardiology Department",
    qualification: "M.B.B.S., M.D., D.M. (Cardiology)",
    image: "/Dr.SK Sharma.jpeg",
  },
  {
    name: "Dr. Divya Gupta",
    role: "Gynecology & Obstetrics",
    qualification: "M.B.B.S., M.S. (Gynecology & Obstetrics)",
    image: "/Dr.SK Gupta.jpeg",
  },
  {
    name: "Dr. P. N. Gupta",
    role: "Pediatrics & Child Care",
    qualification: "M.B.B.S., D.C.H. (Child Specialist)",
    image: "/Dr.SK Sharma.jpeg",
  },
  {
    name: "Dr. Anil Agarwal",
    role: "Surgery & Laparoscopy",
    qualification: "M.B.B.S., M.S. (Surgery)",
    image: "/Dr.SK Gupta.jpeg",
  },
  {
    name: "Dr. Ashish Agarwal",
    role: "Surgery & Laparoscopy",
    qualification: "M.B.B.S., M.S. (Surgery)",
    image: "/Dr.SK Sharma.jpeg",
  },
  {
    name: "Dr. Deepak Chandra",
    role: "Gastroenterology",
    qualification: "M.B.B.S., M.D., D.M. (Gastroenterology)",
    image: "/Dr.SK Gupta.jpeg",
  },
];

export function DoctorsGrid({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? doctors.slice(0, limit) : doctors;

  return (
    <section className="container mx-auto px-4 py-16">
      {/* HEADER */}
      <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
        <h2 className="text-3xl font-extrabold text-blue-700">
          Meet Our Expert Doctors
        </h2>
        <p className="mt-3 text-gray-600">
          Highly qualified specialists committed to providing excellent medical care with compassion.
        </p>
        <span className="mt-4 inline-block h-[3px] w-16 rounded-full bg-blue-600"></span>
      </div>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((d, i) => (
          <div
            key={d.name}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative h-52 w-full overflow-hidden rounded-t-2xl bg-gray-100 flex items-center justify-center">
              <img
                src={d.image}
                alt={d.name}
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* INFO */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                {d.name}
              </h3>
              <p className="text-sm font-medium text-gray-500">{d.role}</p>
              <p className="mt-2 text-sm text-gray-700">{d.qualification}</p>
            </div>

            {/* HOVER OVERLAY */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-700/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white text-center px-6">
              <h4 className="text-lg font-semibold mb-2">{d.name}</h4>
              <p className="text-sm mb-2">{d.role}</p>
              <p className="text-xs text-blue-100 mb-4">{d.qualification}</p>
              <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow hover:bg-gray-100 transition">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
