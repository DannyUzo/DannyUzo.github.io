import { Navbar } from "@/components/navbar"
import { selectedProject } from "@/lib/research-data"

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="research-page archive-page">
        <header className="archive-header">
          <p className="eyebrow">Selected project</p>
          <h1>{selectedProject.title}</h1>
          <p>{selectedProject.description}</p>
        </header>
        <article className="current-work-record work-page-record">
          <span className="work-status">{selectedProject.status}</span>
          <ul>
            {selectedProject.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
          <a className="archive-link" href={selectedProject.url} target="_blank" rel="noreferrer">
            Read the full project record ↗
          </a>
        </article>
      </main>
    </>
  )
}
