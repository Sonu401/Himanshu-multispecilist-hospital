import { AOSInit } from "@/components/aos-init"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { DoctorsGrid } from "@/components/doctors-grid"

export default function DoctorsPage() {
  return (
    <>
      <AOSInit />
      <SiteHeader />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Doctors" }]} />
      <main>
        <DoctorsGrid />
      </main>
      <SiteFooter />
    </>
  )
}
