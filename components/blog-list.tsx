import Link from "next/link"

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  image: string
}

export const posts: BlogPost[] = [
  {
    slug: "healthy-heart-tips",
    title: "5 Essential Tips for a Healthy Heart",
    excerpt:
      "Discover how simple lifestyle changes—like daily walks, balanced meals, and regular check-ups—can keep your heart strong for years to come.",
    date: "2025-06-14",
    image: "/blog1.jpeg",
  },
  {
    slug: "understanding-mri",
    title: "Understanding MRI Scans: A Complete Guide",
    excerpt:
      "MRI scans are safe and painless. Learn how they work, what to expect during the process, and why your doctor might recommend one.",
    date: "2025-07-02",
    image: "/blog2.jpeg",
  },
  {
    slug: "dental-hygiene-101",
    title: "Dental Hygiene 101: Healthy Habits for a Brighter Smile",
    excerpt:
      "Maintaining oral hygiene goes beyond brushing. Here are key practices to protect your teeth and gums for long-term health.",
    date: "2025-08-20",
    image: "/blog3.jpeg",
  },
  {
    slug: "managing-diabetes",
    title: "Managing Diabetes with Smart Nutrition",
    excerpt:
      "A proper diet can help you control blood sugar naturally. Discover the best foods to include in your diabetic meal plan.",
    date: "2025-09-18",
    image: "/blog4.jpeg",
  },
  {
    slug: "mental-wellness",
    title: "Mental Wellness Matters: Coping with Everyday Stress",
    excerpt:
      "Learn effective techniques to improve your mental well-being and manage stress in a healthy, balanced way.",
    date: "2025-10-10",
    image: "/blog1.jpeg",
  },
]

export function BlogList({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? posts.slice(0, limit) : posts

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
        <h2 className="text-3xl font-extrabold text-blue-700">Latest Health Insights</h2>
        <p className="mt-3 text-gray-600">
          Stay informed with expert medical advice, health awareness articles, and hospital news.
        </p>
        <span className="mt-4 inline-block h-[3px] w-16 rounded-full bg-blue-600"></span>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <article
            key={p.slug}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <time className="text-xs text-gray-500 block">
                {new Date(p.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700">{p.excerpt}</p>

              <Link
                href={`/blog/${p.slug}`}
                className="mt-4 inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
