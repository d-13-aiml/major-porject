"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Zap } from "lucide-react"

export default function Header() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  const navItems = [
    { href: "/", label: "Matches" },
    { href: "/predictor", label: "Predictor" },
    { href: "/analytics", label: "Analytics" },
    { href: "/about", label: "About" },
  ]

  return (
    <header className="bg-primary border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Zap className="w-8 h-8 text-accent group-hover:animate-glow-pulse" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-foreground glow-accent">CrickPredict Pro</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActive(item.href)
                    ? "text-accent shadow-lg shadow-accent/50 bg-accent/10"
                    : "text-muted-foreground hover:text-accent"
                }`}
              >
                {item.label}
                {isActive(item.href) && <div className="absolute inset-0 rounded-lg bg-accent/5 animate-pulse"></div>}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
