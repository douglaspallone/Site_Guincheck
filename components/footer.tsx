import Link from "next/link"
import Image from "next/image"
import { Mail, MessageCircle, Phone } from "lucide-react"
import { SUPPORT_PHONE_DISPLAY, SUPPORT_WHATSAPP_URL } from "@/lib/links"

const EMAIL_CONTATO = "[EMAIL_CONTATO]"
const LINK_TERMOS = ""
const LINK_PRIVACIDADE = ""

export function Footer() {
  return (
    <footer className="bg-primary py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/">
              <Image
                src="/images/logo-branco.png"
                alt="GuinCheck"
                width={140}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-primary-foreground/70 text-center md:text-left">
              Checklist de Remoção de Veículos.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <Link
              href={SUPPORT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-primary-foreground hover:text-accent transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Suporte pelo WhatsApp
            </Link>
            
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Phone className="h-4 w-4" />
              {SUPPORT_PHONE_DISPLAY}
            </div>

            {EMAIL_CONTATO !== "[EMAIL_CONTATO]" && (
              <Link
                href={`mailto:${EMAIL_CONTATO}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                {EMAIL_CONTATO}
              </Link>
            )}
            
            {LINK_TERMOS && LINK_PRIVACIDADE && (
              <div className="flex items-center gap-4 text-sm mt-2">
                <Link
                  href={LINK_TERMOS}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Termos de Uso
                </Link>
                <span className="text-primary-foreground/40">|</span>
                <Link
                  href={LINK_PRIVACIDADE}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Política de Privacidade
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} GuinCheck. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
