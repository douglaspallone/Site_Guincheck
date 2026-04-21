import Link from "next/link"
import { User, Building2, CheckCircle, MessageCircle, Clock, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { APP_URL, FLEETS_WAITLIST_WHATSAPP_URL } from "@/lib/links"

export function Audience() {
  return (
    <section id="para-quem" className="py-16 sm:py-20 lg:py-24 bg-muted scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Para quem é o GuinCheck?
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 bg-background border-2 border-accent rounded-xl shadow-lg">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
                <User className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Motoristas de Guincho
              </h3>
            </div>
            
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Checklist pronto no celular</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Comprovação para o cliente</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Menos dor de cabeça com avarias</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Histórico das remoções</span>
              </li>
            </ul>

            <Button asChild size="lg" className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12">
              <Link href={APP_URL} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Acessar app
              </Link>
            </Button>
          </div>

          <div className="p-8 bg-background border border-border rounded-xl opacity-80">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                <Building2 className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Frotas e Centrais
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full mt-1">
                  <Clock className="h-3 w-3" />
                  Em breve
                </span>
              </div>
            </div>
            
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Padronização de processos</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Relatórios organizados</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Múltiplos usuários</span>
              </li>
            </ul>

            <Button asChild size="lg" variant="outline" className="w-full mt-6 font-semibold h-12 bg-transparent">
              <Link href={FLEETS_WAITLIST_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Entrar na lista de espera
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
