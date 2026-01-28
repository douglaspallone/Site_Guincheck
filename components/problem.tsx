import { Camera, WifiOff, FileText } from "lucide-react"

const benefits = [
  {
    icon: Camera,
    title: "Sem limite de fotos",
    text: "Registre quantas fotos precisar",
  },
  {
    icon: WifiOff,
    title: "Funciona offline",
    text: "Use sem internet na remocao",
  },
  {
    icon: FileText,
    title: "PDF pronto na hora",
    text: "Gere e envie na hora",
  },
]

export function Problem() {
  return (
    <section className="py-12 sm:py-16 bg-accent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-6 bg-accent-foreground/10 rounded-xl text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-foreground">
                <benefit.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-accent-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm text-accent-foreground/80">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
