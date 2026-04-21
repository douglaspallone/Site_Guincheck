import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Camera, Download, FileText, History, PenTool, Smartphone } from "lucide-react"
import { APP_URL } from "@/lib/links"

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

{/* MOLDURA COM VÍDEO DO CANVA */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-xl border border-border">
            <iframe
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.canva.com/design/DAG_0PDFhCg/HE2luqFMyWu3h1Xa2n9q0A/watch?embed"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
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
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 px-8">
            <Link href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Acessar app
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
