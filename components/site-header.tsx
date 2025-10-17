"use client"

import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Navigation Links
const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/doctors", label: "Doctors" },
  { href: "/services", label: "Services" },
  { href: "/appointment", label: "Appointment" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <>
      {/* HEADER SECTION */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        {/* Top bar */}
        <div className="hidden border-b bg-gray-50 md:block">
          <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm text-gray-600">
            <p className="font-medium">
              Call: +919005172912, 9580753193 • Email: care@himanshuhospital.com
            </p>
            <div className="flex items-center gap-3">
              <a aria-label="Twitter" className="hover:text-blue-600" href="#" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a aria-label="Facebook" className="hover:text-blue-600" href="#" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a aria-label="Instagram" className="hover:text-blue-600" href="#" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a aria-label="LinkedIn" className="hover:text-blue-600" href="#" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Himanshu Hospital Logo"
              width={48}
              height={48}
              className="h-10 w-10 object-contain"
              priority
            />
            <span className="text-lg font-bold text-gray-900">
              Himanshu Multispecialist Hospital
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-gray-700 hover:text-blue-600",
                  pathname === item.href && "text-blue-600",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden bg-blue-600 text-white hover:bg-blue-700 md:inline-flex">
              <Link href="/appointment">Book Appointment</Link>
            </Button>
            <details className="md:hidden">
              <summary className="cursor-pointer rounded p-2 hover:bg-gray-100">Menu</summary>
              <div className="absolute right-4 mt-2 w-56 rounded border bg-white p-2 shadow">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </div>
      </header>
    </>
  )
}
