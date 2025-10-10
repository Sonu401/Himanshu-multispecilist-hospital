import { AOSInit } from "@/components/aos-init"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { AppointmentForm } from "@/components/appointment-form"

export default function AppointmentPage() {
  return (
    <>
      <AOSInit />
      <SiteHeader />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Appointment" }]} />
      <main>
        <AppointmentForm />
      </main>
      <SiteFooter />
    </>
  )
}
