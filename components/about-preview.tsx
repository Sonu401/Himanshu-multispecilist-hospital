"use client";

export function AboutPreview() {
  return (
    <section className="container mx-auto grid items-center gap-8 px-4 py-12 md:grid-cols-2">
      {/* ABOUT IMAGE */}
      <div data-aos="fade-right">
        <img
          src="/about pic.jpeg"
          alt="Himanshu Multispecialist Hospital Building"
          className="rounded-lg border shadow-md"
        />
      </div>

      {/* ABOUT CONTENT */}
      <div data-aos="fade-left">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          About Himanshu Multispecialist Hospital
        </h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Himanshu Multispecialist Hospital is a trusted healthcare institution in Gorakhpur,
          committed to delivering quality treatment and compassionate care to every patient.
          With state-of-the-art facilities, expert doctors, and 24×7 services, we strive to
          ensure the best medical outcomes for you and your family.
        </p>
        <p className="mt-3 text-gray-700">
          Our hospital offers a full range of diagnostic, surgical, and emergency services,
          supported by a dedicated team of healthcare professionals and modern technology.
        </p>

        {/* FACILITY LIST */}
        {/* <ul className="mt-6 grid gap-3 text-gray-700 md:grid-cols-2">
          <li className="rounded border bg-white p-3 shadow-sm">24/7 Emergency Care</li>
          <li className="rounded border bg-white p-3 shadow-sm">Advanced Diagnostics</li>
          <li className="rounded border bg-white p-3 shadow-sm">Experienced Specialists</li>
          <li className="rounded border bg-white p-3 shadow-sm">Personalized Treatment</li>
          <li className="rounded border bg-white p-3 shadow-sm">I.C.U. (Intensive Care Unit)</li>
          <li className="rounded border bg-white p-3 shadow-sm">O.T. (Operation Theatre)</li>
          <li className="rounded border bg-white p-3 shadow-sm">Ultrasound & X-Ray</li>
          <li className="rounded border bg-white p-3 shadow-sm">N.I.C.U. (Neonatal ICU)</li>
          <li className="rounded border bg-white p-3 shadow-sm">Ventilator Support</li>
          <li className="rounded border bg-white p-3 shadow-sm">Pathology & Pharmacy</li>
          <li className="rounded border bg-white p-3 shadow-sm">24×7 Ambulance Service</li>
          <li className="rounded border bg-white p-3 shadow-sm">Patient-Centered Care</li>
        </ul> */}

        {/* MANAGING DIRECTORS SECTION */}
        <div className="col-span-2 mt-16 text-center" data-aos="fade-up">
          <h3 className="text-3xl font-extrabold text-blue-700 mb-10 tracking-wide relative inline-block">
            Our Managing Directors
            <span className="absolute left-1/2 bottom-[-6px] h-[3px] w-16 -translate-x-1/2 rounded-full bg-blue-600"></span>
          </h3>

          <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
            {/* Director 1 */}
            <div className="group relative flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative">
                <img
                  src="/Dr.SK Gupta.jpeg"
                  alt="Dr. S.K. Gupta"
                  className="h-44 w-44 rounded-full border-4 border-blue-600 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-blue-600/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
              <h4 className="mt-5 text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition">
                Dr. S.K. Gupta
              </h4>
              <p className="text-sm text-gray-500 font-medium">Managing Director</p>
              <p className="mt-3 max-w-xs text-sm text-gray-700 leading-relaxed">
                A visionary leader committed to delivering world-class medical care and creating a
                hospital environment built on trust, ethics, and excellence.
              </p>
              <div className="mt-4 flex gap-4 text-blue-600 justify-center">
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-800 transition">
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-sky-500 transition">
                  <i className="fab fa-twitter text-lg"></i>
                </a>
              </div>
            </div>

            {/* Director 2 */}
            <div className="group relative flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative">
                <img
                  src="/Dr.SK Sharma.jpeg"
                  alt="Dr. S.K. Sharma"
                  className="h-44 w-44 rounded-full border-4 border-blue-600 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-blue-600/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
              <h4 className="mt-5 text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition">
                Dr. S.K. Sharma
              </h4>
              <p className="text-sm text-gray-500 font-medium">Managing Director</p>
              <p className="mt-3 max-w-xs text-sm text-gray-700 leading-relaxed">
                Dedicated to enhancing patient well-being through innovation, compassion,
                and a focus on continuous improvement in healthcare delivery.
              </p>
              <div className="mt-4 flex gap-4 text-blue-600 justify-center">
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-800 transition">
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
                <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition">
                  <i className="fab fa-facebook text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
