import { ClipboardList, Camera, PenTool, FileText, History, Share2 } from "lucide-react"

const features = [
  {
    icon: ClipboardList,
    title: "Checklist Guiado",
    description: "Siga as etapas sem esquecer nenhum detalhe importante.",
  },
  {
    icon: Camera,
    title: "Fotos do Veículo",
    description: "Registre o estado do veículo com fotos datadas.",
  },
  {
    icon: PenTool,
    title: "Assinatura Digital",
    description: "Cliente e motorista assinam direto na tela.",
  },
  {
    icon: FileText,
    title: "PDF Automático",
    description: "Documento profissional gerado na hora.",
  },
  {
    icon: History,
    title: "Histórico Completo",
    description: "Todas as remoções salvas e organizadas.",
  },
  {
    icon: Share2,
    title: "Compartilhamento Rápido",
    description: "Envie por WhatsApp ou e-mail em segundos.",
  },
]

export function Features() {
  return (
    <section id="diferenciais" className="py-16 sm:py-20 lg:py-24 bg-background scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Tudo que você precisa em um só app
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
    </section>
  )
}
