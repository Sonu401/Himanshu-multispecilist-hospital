"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <h3 className="mb-3 text-lg font-semibold text-gray-900">Himanshu Multispecilist Hospital</h3>
          <p className="text-sm text-gray-600">
            Compassionate care, modern medicine. We deliver trusted healthcare with advanced facilities and expert
            staff.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase text-gray-900">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <Link className="hover:text-blue-600" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-600" href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-600" href="/doctors">
                Our Doctors
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-600" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase text-gray-900">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Fatima Hospital Road, Sangam Chauraha,Padari Bazar, Gorkhpur</li>
            <li>+919005172912,9580753193</li>
            <li>care@himanshuhospital.com</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase text-gray-900">Newsletter</h4>
          <p className="mb-3 text-sm text-gray-600">Get health tips and updates.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <Input type="email" placeholder="Your email" aria-label="Email" />
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Subscribe</Button>
          </form>
        </div>
      </div>
  <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm text-gray-600">
  Crafted with ❤️ by{" "}
  <a
    href="https://jstechnova.com"
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
