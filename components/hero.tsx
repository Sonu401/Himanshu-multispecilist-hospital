import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      className="relative grid min-h-[56vh] place-items-center overflow-hidden bg-gray-200"
      aria-label="Hero banner"
    >
      <img
        src="/hospital-corridor-bright.jpg"
        alt="Modern hospital corridor"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-900/50" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-16 text-center text-white" data-aos="fade-up">
        <h1 className="text-balance text-3xl font-bold leading-tight md:text-5xl">Caring for You with Excellence</h1>
        <p className="mt-4 text-pretty text-lg text-blue-100 md:text-xl">
          World-class healthcare services, trusted by thousands of patients.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
            <Link href="/appointment">Book Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
