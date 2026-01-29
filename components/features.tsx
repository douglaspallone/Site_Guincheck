import { ClipboardList, Camera, AlertTriangle, PenTool, FileText, History } from "lucide-react"

const features = [
  {
    icon: ClipboardList,
    title: "Checklist Guiado",
    description: "Passo a passo. Sem esquecer nada.",
  },
  {
    icon: Camera,
    title: "Fotos do Veículo",
    description: "Quantas fotos precisar. Com registro.",
  },
  {
    icon: AlertTriangle,
    title: "Ocorrências",
    description: "Anote avarias e observações.",
  },
  {
    icon: PenTool,
    title: "Assinatura na Tela",
    description: "Cliente e motorista assinam no celular.",
  },
  {
    icon: FileText,
    title: "PDF Automático",
    description: "Gera o documento na hora.",
  },
  {
    icon: History,
    title: "Histórico Completo",
    description: "Tudo salvo e organizado, com sua marca.",
  },
]

export function Features() {
  return (
    <section id="diferenciais" className="py-16 sm:py-20 lg:py-24 bg-background scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Tudo em um só app
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Funcionalidades pensadas para o dia a dia do guincheiro
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary group-hover:bg-accent transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-primary-foreground group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center p-8 bg-muted rounded-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            Chega de papel e discussão por avaria.
          </h3>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-2">
              <Camera className="h-8 w-8 text-accent" />
              <p className="font-semibold text-foreground">Fotos ilimitadas</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <PenTool className="h-8 w-8 text-accent" />
              <p className="font-semibold text-foreground">Assinatura na tela</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FileText className="h-8 w-8 text-accent" />
              <p className="font-semibold text-foreground">PDF com sua Marca</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
