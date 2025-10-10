export function AboutPreview() {
  return (
    <section className="container mx-auto grid items-center gap-8 px-4 py-12 md:grid-cols-2">
      <div data-aos="fade-right">
        <img src="/doctors-team-meeting.jpg" alt="Our medical team" className="rounded-lg border shadow-sm" />
      </div>
      <div data-aos="fade-left">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">About Himanshu Multispecilist Hospital</h2>
        <p className="mt-3 text-gray-700">
          We are a modern healthcare provider offering comprehensive medical services with a patient-first approach. Our
          mission is to improve lives through compassionate care and innovation.
        </p>
        <ul className="mt-6 grid gap-3 text-gray-700 md:grid-cols-2">
          <li className="rounded border bg-white p-3 shadow-sm">24/7 Emergency Care</li>
          <li className="rounded border bg-white p-3 shadow-sm">Advanced Diagnostics</li>
          <li className="rounded border bg-white p-3 shadow-sm">Experienced Specialists</li>
          <li className="rounded border bg-white p-3 shadow-sm">Personalized Treatment</li>
        </ul>
      </div>
    </section>
  )
}
