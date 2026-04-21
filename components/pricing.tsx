import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, MessageCircle, Clock, Download } from "lucide-react"
import { APP_URL, FLEETS_WAITLIST_WHATSAPP_URL } from "@/lib/links"

const plans = [
  {
    name: "Mensal",
    price: "49,90",
    period: "/mês",
    description: "Para começar",
    features: [
      "Fotos ilimitadas",
      "Funciona offline",
      "Geração de PDF",
      "Assinatura na tela",
      "Histórico de remoções",
      "Suporte por WhatsApp",
    ],
    cta: "Assinar pelo app",
    link: APP_URL,
    highlighted: false,
    comingSoon: false,
  },
  {
    name: "Anual",
    price: "499,90",
    period: "/ano",
    description: "Recomendado",
    features: [
      "Tudo do plano Mensal",
      "Economize até 20%",
      "Prioridade no suporte",
    ],
    cta: "Assinar pelo app",
    link: APP_URL,
    highlighted: true,
    comingSoon: false,
  },
  {
    name: "Equipe/Empresa",
    description: "Para frotas",
    features: [
      "Múltiplos usuários",
      "Painel administrativo",
      "Relatórios consolidados",
      "Suporte dedicado",
    ],
    cta: "Entrar na lista de espera",
    link: FLEETS_WAITLIST_WHATSAPP_URL,
    highlighted: false,
    comingSoon: true,
  },
]

export function Pricing() {
  return (
    <section id="planos" className="py-16 sm:py-20 lg:py-24 bg-background scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Planos que cabem no seu bolso
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Escolha o plano ideal para você
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground border-primary scale-105 shadow-xl"
                  : plan.comingSoon
                    ? "bg-card text-card-foreground border-border opacity-80"
                    : "bg-card text-card-foreground border-border hover:border-accent hover:shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  <Star className="h-3 w-3" />
                  Recomendado
                </div>
              )}

              {plan.comingSoon && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  <Clock className="h-3 w-3" />
                  Em breve
                </div>
              )}

              <div className="text-center">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="mt-4 min-h-[44px] flex items-center justify-center">
                  {plan.price && plan.period ? (
                    <div>
                      <span className="text-sm">a partir de </span>
                      <span className="text-3xl font-bold">R$ {plan.price}</span>
                      <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                        {plan.period}
                      </span>
                    </div>
                  ) : (
                    <span className="text-base font-semibold text-muted-foreground">
                      Disponível em breve
                    </span>
                  )}
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <CheckCircle className={`h-5 w-5 flex-shrink-0 ${plan.highlighted ? "text-accent" : "text-accent"}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full mt-6 font-semibold h-12 ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : plan.comingSoon
                      ? "bg-muted text-muted-foreground hover:bg-muted/80"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <Link href={plan.link} target="_blank" rel="noopener noreferrer">
                  {plan.comingSoon ? (
                    <MessageCircle className="mr-2 h-4 w-4" />
                  ) : (
                    <Download className="mr-2 h-4 w-4" />
                  )}
                  {plan.cta}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
