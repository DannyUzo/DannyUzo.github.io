import type React from "react"
import type { Metadata } from "next"
import { ErrorBoundary } from "@/components/error-boundary"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"


export const metadata: Metadata = {
  title: "Daniel Uzodinma | Mechatronics & Embedded Systems Researcher",
  description:
    "Research index for Daniel Uzodinma, a mechatronics engineer working on embedded systems, hardware-software co-design, and resource-constrained control.",
  keywords: "Mechatronics, embedded systems, hardware-software co-design, ESP32, robotics, Daniel Uzodinma",
  authors: [{ name: "Uzodinma Daniel" }],
  creator: "Uzodinma Daniel",
  publisher: "Uzodinma Daniel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dannyuzo.vercel.app",
    title: "Daniel Uzodinma | Embedded Systems Researcher",
    description: "Research in mechatronics, embedded systems, and compute-efficient control.",
    siteName: "Uzodinma Daniel Portfolio",
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ErrorBoundary>{children}</ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
