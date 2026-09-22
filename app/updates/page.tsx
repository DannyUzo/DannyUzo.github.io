import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { UpdateList } from "@/components/update-list"
import { researchUpdates } from "@/lib/research-data"

export default function UpdatesPage() {
  return (
    <>
      <Navbar />
      <main className="research-page archive-page">
        <header className="archive-header">
          <p className="eyebrow">Research record</p>
          <h1>News &amp; updates</h1>
          <p>Selected academic, technical, and community milestones.</p>
        </header>
        <UpdateList updates={researchUpdates} />
        <Link className="archive-link" href="/#updates">
          Back to the research index ↗
        </Link>
      </main>
    </>
  )
}
