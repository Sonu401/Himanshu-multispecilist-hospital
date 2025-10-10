import { AOSInit } from "@/components/aos-init"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { GalleryGrid } from "@/components/gallery-grid"

export default function GalleryPage() {
  return (
    <>
      <AOSInit />
      <SiteHeader />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />
      <main>
        <GalleryGrid />
      </main>
      <SiteFooter />
    </>
  )
}
