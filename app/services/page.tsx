import { AOSInit } from "@/components/aos-init"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ServicesGrid } from "@/components/services-grid"

export default function ServicesPage() {
  return (
    <>
      <AOSInit />
      <SiteHeader />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <main>
        <ServicesGrid />
      </main>
      <SiteFooter />
    </>
  )
}
