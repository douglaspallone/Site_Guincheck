import Link from "next/link"
import { User, Building2, CheckCircle, MessageCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const LINK_WHATSAPP = "https://wa.me/5511971890566?text=Ol%C3%A1!%20Quero%20conhecer%20o%20GuinCheck%20e%20come%C3%A7ar%20a%20usar%20no%20meu%20guincho."
const LINK_WHATSAPP_FROTAS = "https://wa.me/5511971890566?text=Quero%20saber%20quando%20sai%20o%20plano%20para%20frotas."

export function Audience() {
  return (
    <section id="para-quem" className="py-16 sm:py-20 lg:py-24 bg-muted scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Para quem e o GuinCheck?
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
                <span className="text-muted-foreground">Comprovacao para o cliente</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Menos dor de cabeca com avarias</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Historico das remocoes</span>
              </li>
            </ul>

            <Button asChild size="lg" className="w-full mt-6 bg-[#25D366] text-white hover:bg-[#20BD5A] font-semibold h-12">
              <Link href={LINK_WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
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
                <span className="text-muted-foreground">Padronizacao de processos</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Relatorios organizados</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Multiplos usuarios</span>
              </li>
            </ul>

            <Button asChild size="lg" variant="outline" className="w-full mt-6 font-semibold h-12 bg-transparent">
              <Link href={LINK_WHATSAPP_FROTAS} target="_blank" rel="noopener noreferrer">
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
