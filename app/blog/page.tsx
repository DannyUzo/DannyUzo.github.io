import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { TechnicalPostList } from "@/components/technical-writing"
import { technicalPosts } from "@/lib/research-data"

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="research-page archive-page blog-page">
        <header className="archive-header">
          <p className="eyebrow">AMTES author profile</p>
          <h1>The Engineering Log</h1>
          <p>Documenting my journey at the intersection of the physical and digital worlds.</p>
        </header>

        <TechnicalPostList posts={technicalPosts} />

        <p className="blog-note">
          I try to keep this list up to date, but the live AMTES Author Profile will always have the most recent publications.
        </p>
        <div className="blog-actions">
          <a href="https://amtes.pages.dev/" target="_blank" rel="noreferrer">
            Visit the AMTES Blog ↗
          </a>
          <Link href="/">Back to the research index ↗</Link>
        </div>
      </main>
    </>
  )
}
