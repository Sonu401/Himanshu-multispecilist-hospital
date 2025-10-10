import { AOSInit } from "@/components/aos-init"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { posts } from "@/components/blog-list"

export default function BlogDetails({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) {
    return (
      <>
        <AOSInit />
        <SiteHeader />
        <main className="container mx-auto px-4 py-12">
          <p>Post not found.</p>
        </main>
        <SiteFooter />
      </>
    )
  }
  return (
    <>
      <AOSInit />
      <SiteHeader />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />
      <main>
        <article className="container mx-auto grid items-start gap-8 px-4 py-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <img src="/blog-detail-cover.jpg" alt="" className="mb-6 rounded-lg border shadow-sm" />
            <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
            <time className="mt-2 block text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</time>
            <p className="mt-4 text-gray-700">
              {post.excerpt} This is a longer article body placeholder to demonstrate the blog details page.
            </p>
            <section className="mt-10">
              <h2 className="text-lg font-semibold text-gray-900">Comments</h2>
              <ul className="mt-4 space-y-4">
                <li className="rounded border bg-white p-3 shadow-sm">
                  <p className="text-sm text-gray-800">
                    <strong>Sara:</strong> Very helpful article!
                  </p>
                </li>
                <li className="rounded border bg-white p-3 shadow-sm">
                  <p className="text-sm text-gray-800">
                    <strong>James:</strong> Thanks for the insights.
                  </p>
                </li>
              </ul>
            </section>
          </div>
          <aside className="rounded-lg border bg-gray-50 p-4">
            <h2 className="mb-3 text-lg font-semibold text-gray-900">Related</h2>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {posts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((p) => (
                  <li key={p.slug}>
                    <a href={`/blog/${p.slug}`} className="hover:underline">
                      {p.title}
                    </a>
                  </li>
                ))}
            </ul>
          </aside>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
