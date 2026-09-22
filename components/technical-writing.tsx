import Link from "next/link"
import type { TechnicalPost } from "@/lib/research-data"

export function TechnicalWritingPreview({ posts }: { posts: TechnicalPost[] }) {
  return (
    <div className="technical-writing-preview">
      <p className="technical-writing-intro">
        Deep-dives into robotics kinematics and embedded systems physics written for the AMTES Blog.
      </p>
      <TechnicalPostList posts={posts} compact />
      <Link className="archive-link" href="/blog">
        View all technical posts &amp; series ↗
      </Link>
    </div>
  )
}

export function TechnicalPostList({ posts, compact = false }: { posts: TechnicalPost[]; compact?: boolean }) {
  const visiblePosts = compact ? posts.slice(0, 3) : posts

  return (
    <div className="">
      {visiblePosts.map((post) => (
        <article className="technical-post" key={post.url}>
          <div className="technical-post-meta">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span>{post.category}</span>
          </div>
          <div>
            <h3>
              <a href={post.url} target="_blank" rel="noreferrer">
                {post.title} ↗
              </a>
            </h3>
            {!compact && post.summary ? <p>{post.summary}</p> : null}
          </div>
        </article>
      ))}
    </div>
  )
}

function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`))
}
