"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { APP_URL } from "@/lib/links"

const navItems = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Ver por Dentro", href: "#ver-por-dentro" },
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

          <nav className="hidden lg:flex items-center gap-5">
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
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-11 px-5">
              <Link href={APP_URL} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Acessar app
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
              <Button asChild size="lg" className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                <Link href={APP_URL} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Acessar app
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
