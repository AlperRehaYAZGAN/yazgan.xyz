interface BlogPostHomeListItemProps {
  format: string;
  title: string;
  description: string;
  published: string;
  slug: string;
  categories: string[];
}

export async function BlogPostHomeListItem({
  format,
  title,
  description,
  published,
  slug,
  categories,
}: BlogPostHomeListItemProps) {
  return (
    <article className="group relative mx-4">
      <a
        href={`/${format}/${slug}`}
        className="relative -mx-4 block rounded p-4 transition-colors group-hover:bg-blue-50/50"
      >
        <div className="pointer-events-none absolute inset-0 rounded border border-transparent group-hover:border-blue-500" />
        <div className="flex items-baseline gap-4">
          <time className="text-sm tabular-nums text-gray-500">{published}</time>

          {categories?.map((category) => (
            <span className="rounded bg-blue-500 px-2 py-1 text-xs text-white">{category}</span>
          ))}
        </div>
        <h2 className="text-xl transition-colors group-hover:text-blue-500">{title}</h2>
        <p className="mt-1 text-sm transition-colors text-gray-600 group-hover:text-blue-400">{description}</p>
      </a>
    </article>
  );
}

export default BlogPostHomeListItem;
