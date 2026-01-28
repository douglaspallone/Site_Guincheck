import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Play, Smartphone, Camera, AlertTriangle, PenTool, FileText, History } from "lucide-react"

const LINK_WHATSAPP = "https://wa.me/5511971890566?text=Ol%C3%A1!%20Quero%20conhecer%20o%20GuinCheck%20e%20come%C3%A7ar%20a%20usar%20no%20meu%20guincho."

const screenshots = [
  {
    icon: Smartphone,
    label: "1. Dados do veículo",
  },
  {
    icon: Camera,
    label: "2. Fotos registradas",
  },
  {
    icon: AlertTriangle,
    label: "3. Ocorrências",
  },
  {
    icon: PenTool,
    label: "4. Assinatura na tela",
  },
  {
    icon: FileText,
    label: "5. Gerar PDF",
  },
  {
    icon: History,
    label: "6. Histórico",
  },
]

export function SeeInside() {
  return (
    <section id="ver-por-dentro" className="py-16 sm:py-20 lg:py-24 bg-muted scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Veja como é por dentro
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Em 30 segundos você entende.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="relative aspect-video bg-primary rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
            <div className="relative flex flex-col items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent cursor-pointer hover:scale-110 transition-transform">
                <Play className="h-10 w-10 text-accent-foreground ml-1" />
              </div>
              <p className="text-primary-foreground font-semibold text-lg">
                Vídeo rápido: do checklist ao PDF
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-4 bg-background rounded-xl border border-border hover:border-accent transition-colors"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary">
                <screenshot.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <p className="text-sm font-medium text-foreground text-center">
                {screenshot.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#20BD5A] font-semibold h-14 px-8">
            <Link href={LINK_WHATSAPP} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
