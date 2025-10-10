"use client"

import { AOSInit } from "@/components/aos-init"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <>
      <AOSInit />
      <SiteHeader />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <main>
        <section className="container mx-auto grid items-start gap-8 px-4 py-12 md:grid-cols-2">
          <div data-aos="fade-right">
            <div className="overflow-hidden rounded-lg border">
              <iframe
                title="Hospital location map"
                src="https://www.google.com/maps?q=New+York&output=embed"
                className="h-80 w-full"
                loading="lazy"
              />
            </div>
            <div className="mt-6 rounded-lg border bg-white p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">Contact Info</h2>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li>123 Health Ave, Wellness City</li>
                <li>+1 (800) 555-0199</li>
                <li>care@medicax.example</li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="mb-1 text-2xl font-bold text-gray-900">Send a Message</h2>
              <p className="mb-4 text-gray-700">We&apos;ll get back to you shortly.</p>
              <form onSubmit={(e) => e.preventDefault()} className="grid gap-3">
                <div className="grid gap-1">
                  <Label htmlFor="cname">Name</Label>
                  <Input id="cname" placeholder="Your name" />
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="cemail">Email</Label>
                  <Input id="cemail" type="email" placeholder="you@example.com" />
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="cmsg">Message</Label>
                  <Textarea id="cmsg" placeholder="How can we help?" />
                </div>
                <Button className="bg-blue-600 text-white hover:bg-blue-700">Send</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
