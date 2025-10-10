import { AOSInit } from "@/components/aos-init"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { BlogList } from "@/components/blog-list"

export default function BlogPage() {
  return (
    <>
      <AOSInit />
      <SiteHeader />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <main>
        <BlogList />
      </main>
      <SiteFooter />
    </>
  )
}
