import Link from "next/link"

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
}

export const posts: BlogPost[] = [
  {
    slug: "healthy-heart-tips",
    title: "5 Tips for a Healthy Heart",
    excerpt: "Simple lifestyle changes for better heart health.",
    date: "2025-06-14",
  },
  {
    slug: "understanding-mri",
    title: "Understanding MRI Scans",
    excerpt: "What to expect during an MRI and why it’s useful.",
    date: "2025-07-02",
  },
  {
    slug: "dental-hygiene-101",
    title: "Dental Hygiene 101",
    excerpt: "Keep your smile healthy with these habits.",
    date: "2025-08-20",
  },
]

export function BlogList({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? posts.slice(0, limit) : posts
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Latest News</h2>
        <p className="mt-2 text-gray-700">Insights and updates from our experts.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <article
            key={p.slug}
            className="overflow-hidden rounded-lg border bg-white shadow-sm"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <img src="/health-blog-cover.jpg" alt="" className="h-40 w-full object-cover" />
            <div className="p-5">
              <time className="text-xs text-gray-500">{new Date(p.date).toLocaleDateString()}</time>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{p.excerpt}</p>
              <Link
                href={`/blog/${p.slug}`}
                className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
