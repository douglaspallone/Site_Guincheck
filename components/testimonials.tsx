import { Quote, FileText, Users, Building } from "lucide-react"

const testimonials = [
  {
    quote: "O PDF fica pronto na hora e o cliente assina ali mesmo. Muito mais profissional.",
    name: "[NOME_DEPOIMENTO_1]",
    role: "Motorista de Guincho",
    location: "[CIDADE_1]",
  },
  {
    quote: "Antes eu perdia tempo com papel e WhatsApp. Agora tudo fica organizado em um lugar só.",
    name: "[NOME_DEPOIMENTO_2]",
    role: "Guincheiro Autônomo",
    location: "[CIDADE_2]",
  },
  {
    quote: "Conseguimos padronizar o processo em toda a equipe. Os relatórios são muito melhores.",
    name: "[NOME_DEPOIMENTO_3]",
    role: "Gerente de Frota",
    location: "[CIDADE_3]",
  },
]

const stats = [
  {
    icon: FileText,
    value: "[X]",
    label: "remoções registradas",
  },
  {
    icon: FileText,
    value: "[Y]",
    label: "PDFs gerados",
  },
  {
    icon: Building,
    value: "[Z]",
    label: "empresas atendidas",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Quem usa, recomenda
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Veja o que dizem nossos usuários
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-background border border-border rounded-xl"
            >
              <Quote className="h-8 w-8 text-accent" />
              <p className="mt-4 text-foreground font-medium">
                {'"'}{testimonial.quote}{'"'}
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} • {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
