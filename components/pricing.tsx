import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, CreditCard, Download, QrCode, Star } from "lucide-react"
import { APP_URL } from "@/lib/links"

const includedFeatures = [
  "Fotos ilimitadas",
  "Funciona offline",
  "Geração de PDF",
  "Assinatura na tela",
  "Histórico de remoções",
  "Suporte por WhatsApp",
]

const plans = [
  {
    category: "Avulso",
    name: "Mensal",
    originalPrice: "49,90",
    price: "29,90",
    period: "/mês",
    billing: "Pagamento único",
    paymentMethods: ["Cartão", "PIX"],
    cta: "Comprar pelo app",
    link: APP_URL,
    featured: false,
  },
  {
    category: "Avulso",
    name: "Anual",
    originalPrice: "499,90",
    price: "299,90",
    period: "/ano",
    billing: "Pagamento único",
    paymentMethods: ["Cartão", "PIX"],
    cta: "Comprar pelo app",
    link: APP_URL,
    featured: false,
  },
  {
    category: "Assinatura",
    name: "Mensal",
    originalPrice: "39,90",
    price: "19,90",
    period: "/mês",
    billing: "Recorrente",
    paymentMethods: ["Cartão"],
    cta: "Assinar pelo app",
    link: APP_URL,
    badge: "Mais vantajoso",
    featured: true,
  },
]

function PaymentMethod({ method, featured }: { method: string; featured: boolean }) {
  const Icon = method === "PIX" ? QrCode : CreditCard

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
        featured
          ? "bg-primary-foreground/10 text-primary-foreground"
          : "bg-muted text-foreground"
      }`}
    >
      <Icon className="h-4 w-4 text-accent" />
      {method}
    </span>
  )
}

export function Pricing() {
  return (
    <section id="planos" className="py-16 sm:py-20 lg:py-24 bg-background scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Planos promocionais
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Mesmas vantagens. Você escolhe a forma de pagamento.
          </p>
        </div>

        <div className="mt-8 max-w-5xl mx-auto border-y border-border py-5">
          <p className="text-sm font-semibold text-foreground text-center">
            Incluso em qualquer plano
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 flex-shrink-0 text-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-6 rounded-xl border transition-all duration-300 ${
                plan.featured
                  ? "bg-primary text-primary-foreground border-primary md:scale-105 shadow-xl"
                  : "bg-card text-card-foreground border-border hover:border-accent hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  <Star className="h-3 w-3" />
                  {plan.badge}
                </div>
              )}

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {plan.category}
                </p>
                <h3 className="mt-1 text-xl font-semibold">{plan.name}</h3>
                <p className={`mt-1 text-sm ${plan.featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                  {plan.billing}
                </p>

                <div className="mt-6 min-h-[84px]">
                  <p className={`text-sm ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    de <span className="line-through">R$ {plan.originalPrice}</span>
                  </p>
                  <div className="mt-1">
                    <span className="text-sm">por </span>
                    <span className="text-4xl font-bold">R$ {plan.price}</span>
                    <span className={`text-sm ${plan.featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`mt-6 flex-1 border-t pt-5 ${plan.featured ? "border-primary-foreground/20" : "border-border"}`}>
                <p className={`text-xs font-semibold uppercase tracking-wide ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  Pagamento
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {plan.paymentMethods.map((method) => (
                    <PaymentMethod key={method} method={method} featured={plan.featured} />
                  ))}
                </div>
              </div>

              <Button
                asChild
                className={`w-full mt-6 font-semibold h-12 ${
                  plan.featured
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <Link href={plan.link} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  {plan.cta}
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Valores promocionais por tempo limitado.
        </p>
      </div>
    </section>
  )
}
