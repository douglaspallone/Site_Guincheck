import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, MessageCircle } from "lucide-react"

const LINK_WHATSAPP = "[LINK_WHATSAPP]"

const plans = [
  {
    name: "Mensal",
    price: "[VALOR]",
    period: "/mês",
    description: "Ideal para começar",
    features: [
      "Checklists ilimitados",
      "Geração de PDF",
      "Assinatura digital",
      "Histórico de remoções",
      "Suporte por WhatsApp",
    ],
    cta: "Assinar agora",
    highlighted: false,
  },
  {
    name: "Anual",
    price: "[VALOR]",
    period: "/ano",
    description: "Melhor custo-benefício",
    features: [
      "Tudo do plano Mensal",
      "Economia de até 20%",
      "Prioridade no suporte",
      "Atualizações antecipadas",
      "Backup na nuvem",
    ],
    cta: "Assinar agora",
    highlighted: true,
  },
  {
    name: "Equipe/Empresa",
    price: "Sob consulta",
    period: "",
    description: "Para frotas e centrais",
    features: [
      "Múltiplos usuários",
      "Painel administrativo",
      "Relatórios consolidados",
      "Integração com sistemas",
      "Suporte dedicado",
    ],
    cta: "Falar com atendimento",
    highlighted: false,
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
            Escolha o plano ideal para você ou sua empresa
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground border-primary scale-105 shadow-xl"
                  : "bg-card text-card-foreground border-border hover:border-accent hover:shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  <Star className="h-3 w-3" />
                  Recomendado
                </div>
              )}

              <div className="text-center">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span className="text-3xl font-bold">R$ {plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
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
                className={`w-full mt-6 font-semibold ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <Link href={LINK_WHATSAPP} target="_blank" rel="noopener noreferrer">
                  {plan.name === "Equipe/Empresa" && <MessageCircle className="mr-2 h-4 w-4" />}
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
