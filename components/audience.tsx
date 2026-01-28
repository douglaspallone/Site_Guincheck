import { User, Building2, CheckCircle } from "lucide-react"

const audiences = [
  {
    icon: User,
    title: "Motoristas de Guincho",
    benefits: [
      "Checklist pronto no celular",
      "Comprovação rápida para o cliente",
      "Histórico das suas remoções",
    ],
  },
  {
    icon: Building2,
    title: "Empresas e Centrais",
    benefits: [
      "Padronização de processos",
      "Documentação completa da frota",
      "Relatórios organizados",
    ],
  },
]

export function Audience() {
  return (
    <section id="para-quem" className="py-16 sm:py-20 lg:py-24 bg-background scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Para quem é o GuinCheck?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Solução para motoristas autônomos e empresas de guincho
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                  <audience.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">
                  {audience.title}
                </h3>
              </div>
              
              <ul className="mt-6 space-y-3">
                {audience.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
