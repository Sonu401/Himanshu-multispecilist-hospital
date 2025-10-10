import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

type Props = {
  name: string
  role: string
  imgAlt?: string
}

export function DoctorCard({ name, role, imgAlt }: Props) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-white shadow-sm">
      <div className="relative">
        <img
          src="/doctor-portrait.png"
          alt={imgAlt || name}
          className="h-56 w-full object-cover transition group-hover:scale-105"
        />
        <div className="absolute inset-0 hidden items-end justify-center bg-black/40 p-3 opacity-0 transition group-hover:flex group-hover:opacity-100">
          <div className="flex gap-3 text-white">
            <a href="#" aria-label="Twitter" className="hover:text-blue-300">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-300">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-300">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-base font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  )
}
