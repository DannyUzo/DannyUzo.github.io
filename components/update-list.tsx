import type { ResearchUpdate } from "@/lib/research-data"

export function UpdateList({ updates }: { updates: ResearchUpdate[] }) {
  return (
    <div className="update-list">
      {updates.map((update) => (
        <div className="update-row" key={`${update.date}-${update.label}`}>
          <time>{update.date}</time>
          <p>
            <strong>{update.label}.</strong>{" "}
            <HighlightedText text={update.text} highlights={update.highlights} />
          </p>
        </div>
      ))}
    </div>
  )
}

function HighlightedText({ text, highlights = [] }: { text: string; highlights?: string[] }) {
  if (highlights.length === 0) return text

  const pattern = new RegExp(`(${highlights.map(escapeRegExp).join("|")})`, "gi")
  return text.split(pattern).map((part, index) =>
    highlights.some((highlight) => highlight.toLowerCase() === part.toLowerCase()) ? (
      <strong key={`${part}-${index}`}>{part}</strong>
    ) : (
      part
    ),
  )
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
