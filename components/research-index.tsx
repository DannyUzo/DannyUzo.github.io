import type { ReactNode } from "react"
import Link from "next/link"
import {
  publications,
  researchProfile,
  researchUpdates,
  service,
  selectedProject,
  technicalPosts,
} from "@/lib/research-data"
import { UpdateList } from "@/components/update-list"
import { TechnicalWritingPreview } from "@/components/technical-writing"

export function ResearchIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="research-page">
        <header className="research-header" id="top">
          <div className="header-copy">
            <p className="eyebrow">{researchProfile.eyebrow}</p>
            <div className="header-profile">
              <div>
                <h1>{researchProfile.name}</h1>
                <p className="research-role">{researchProfile.title}</p>
                <nav className="header-links" aria-label="External links">
                  {researchProfile.links.map((link) => (
                    <Link href={link.href} key={link.label}>
                      {link.label} ↗
                    </Link>
                  ))}
                </nav>
                <p className="lede">{researchProfile.bio}</p>
              </div>
              <img
                className="profile-photo"
                src={researchProfile.portrait.src}
                alt={researchProfile.portrait.alt}
              />
            </div>
          </div>
        </header>

        <ResearchSection id="updates" number="01" title="Updates">
          <UpdateList updates={researchUpdates.slice(0, 5)} />
          <Link className="archive-link" href="/updates">
            View all updates ↗
          </Link>
        </ResearchSection>

        <ResearchSection id="publications" number="02" title="Research manuscripts & publications">
          <div className="publication-list">
            {publications.map((publication) => (
              <article
                className="publication"
                id={publication.id ?? (publication.title.startsWith("Squinting") ? "thermal-tracking" : undefined)}
                key={publication.title}
              >
                <h3>{publication.title}</h3>
                <p className="publication-meta">
                  Authors: {publication.authors}. Status: {publication.status}.
                </p>
                <div className="record-links">
                  <Link href={publication.accessHref}>[{publication.accessLabel}]</Link>
                  {publication.links.map((link) => (
                    <Link href={link.href} key={link.label}>
                      [{link.label}]
                    </Link>
                  ))}
                </div>
                <p className="publication-contribution">
                  <strong>Core contribution:</strong> {publication.contribution}
                </p>
              </article>
            ))}
          </div>
        </ResearchSection>

        <ResearchSection id="technical-writing" number="03" title="Recent technical writing">
          <TechnicalWritingPreview posts={technicalPosts} />
        </ResearchSection>

        <ResearchSection id="work" number="04" title="Selected projects">
          <CurrentWorkRecord />
        </ResearchSection>

        <ResearchSection number="05" title="Service & leadership">
          <div className="service-list">
            {service.map((record) => (
              <div className="service-record" key={record.title}>
                <p className="service-date">{record.label}</p>
                <div>
                  <h3>{record.title}</h3>
                  <p>{record.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ResearchSection>

        <footer className="research-footer">
          <span>Last updated: September 2026</span>
        </footer>
      </div>
    </main>
  )
}

function CurrentWorkRecord() {
  return (
    <article className="current-work-record">
      <div className="current-work-heading">
        <div>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
        </div>
          <span className="work-status">{selectedProject.status}</span>
      </div>
      {/* <ul>
          {selectedProject.details.map((detail) => <li key={detail}>{detail}</li>)}
      </ul> */}
        <a className="archive-link" href={selectedProject.url} target="_blank" rel="noreferrer">
        Read the project record ↗
      </a>
    </article>
  )
}

function ResearchSection({
  number,
  title,
  id,
  children,
}: {
  number: string
  title: string
  id?: string
  children: ReactNode
}) {
  return (
    <section className="research-section" id={id ?? title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
      <div className="section-heading">
        <span>{number}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  )
}
