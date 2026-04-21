import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ClipboardList, Camera, FileCheck, Download, Eye } from "lucide-react"
import { APP_URL } from "@/lib/links"

const steps = [
  {
    number: "1",
    icon: ClipboardList,
    title: "Preencha os dados",
    description: "Placa, modelo e local. Rápido e guiado.",
  },
  {
    number: "2",
    icon: Camera,
    title: "Tire fotos e registre",
    description: "Sem limite de fotos. Mesmo sem internet.",
  },
  {
    number: "3",
    icon: FileCheck,
    title: "Assine e gere o PDF",
    description: "Assinatura na tela e PDF pronto para enviar.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 sm:py-20 lg:py-24 bg-background scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Como funciona
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Três passos simples. Sem complicação.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-border" />
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary shadow-lg">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                  {step.description}
                </p>
              </div>
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
          <Button asChild size="lg" variant="outline" className="font-semibold h-14 px-8 bg-transparent">
            <Link href="#ver-por-dentro">
              <Eye className="mr-2 h-5 w-5" />
              Ver por dentro
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
