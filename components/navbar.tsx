"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "News", href: "/#updates" },
  { name: "Publications", href: "/#publications" },
  { name: "Blog", href: "/blog" },
  { name: "Work", href: "/work" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  if (href.startsWith("/#")) return false
  return pathname.startsWith(href)
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="academic-nav">
      <div className="academic-nav-inner">
        <Link
          href="/"
          className="academic-nav-name"
          aria-label="Daniel U home"
        >
          Daniel Uzodinma
        </Link>

        <div className="academic-nav-links">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={active ? "active" : ""}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        <button
          aria-label="Toggle menu"
          className="academic-menu-button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="academic-mobile-menu">
          <div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={isActive(pathname, item.href) ? "active" : ""}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}