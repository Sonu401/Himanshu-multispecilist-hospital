import Link from "next/link"

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b bg-gray-50">
      <div className="container mx-auto px-4 py-4 text-sm">
        <ol className="flex flex-wrap items-center gap-2 text-gray-600">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {item.href ? (
                <Link href={item.href} className="hover:text-blue-600">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-medium text-gray-900">
                  {item.label}
                </span>
              )}
              {i < items.length - 1 && <span className="text-gray-400">/</span>}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
