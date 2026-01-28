import { Camera, PenTool, Share2 } from "lucide-react"

const benefits = [
  {
    icon: Camera,
    text: "Evidência com fotos e horários",
  },
  {
    icon: PenTool,
    text: "Assinatura digital na tela",
  },
  {
    icon: Share2,
    text: "PDF pronto para compartilhar",
  },
]

export function Problem() {
  return (
    <section className="py-16 sm:py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Chega de papel, mensagens soltas e comprovação incompleta.
          </h2>
          
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 p-6 bg-background rounded-xl shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                  <benefit.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <p className="text-base font-medium text-foreground text-center">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
