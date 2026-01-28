"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const LINK_WHATSAPP = "[LINK_WHATSAPP]"

const navItems = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Para Quem", href: "#para-quem" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="GuinCheck"
              width={140}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <Link href={LINK_WHATSAPP} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link href={LINK_WHATSAPP} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
