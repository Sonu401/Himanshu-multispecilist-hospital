"use client"

import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa"

export function SiteFooter() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-4">
        
        {/* LOGO + DESCRIPTION */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-3">
            <Image
              src="/logo.png"
              alt="Himanshu Hospital Logo"
              width={50}
              height={50}
              className="rounded-md"
            />
            <span className="text-lg font-semibold text-gray-900">
              Himanshu Multispecialist Hospital
            </span>
          </Link>
          <p className="text-sm text-gray-600">
            Compassionate care, modern medicine. Delivering trusted healthcare
            with advanced facilities and expert staff.
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-600 hover:text-pink-600"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-600 hover:text-sky-500"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-blue-700"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase text-gray-900">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link className="hover:text-blue-600" href="/about">About Us</Link></li>
            <li><Link className="hover:text-blue-600" href="/services">Services</Link></li>
            <li><Link className="hover:text-blue-600" href="/doctors">Our Doctors</Link></li>
            <li><Link className="hover:text-blue-600" href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase text-gray-900">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Fatima Hospital Road, Sangam Chauraha,<br />Padari Bazar, Gorakhpur</li>
            <li><a href="tel:+919005172912" className="hover:text-blue-600">+91 9005172912</a>, <a href="tel:+919580753193" className="hover:text-blue-600">9580753193</a></li>
            <li><a href="mailto:care@himanshuhospital.com" className="hover:text-blue-600">care@himanshuhospital.com</a></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase text-gray-900">Newsletter</h4>
          <p className="mb-3 text-sm text-gray-600">Get health tips and latest updates.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <Input type="email" placeholder="Your email" aria-label="Email" />
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Subscribe</Button>
          </form>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-300 mt-6 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Himanshu Multispecialist Hospital. All rights reserved.
        <br />
        Crafted with ❤️ by{" "}
        <a
          href="https://www.jstechnova.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6c3cff] font-semibold hover:underline"
        >
          JS Technova
        </a>
      </div>
    </footer>
  )
}
