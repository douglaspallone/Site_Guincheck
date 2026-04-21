import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Eye, FileText, Smartphone } from "lucide-react"
import { APP_URL } from "@/lib/links"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight text-balance">
              Checklist de Remoção em Minutos.{" "}
              <span className="text-accent">Fotos Ilimitadas, Offline e PDF.</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-primary-foreground/90 max-w-xl mx-auto lg:mx-0 text-pretty">
              Registre o estado do veículo, anote ocorrências, colha assinatura na tela e gere um PDF profissional com sua marca para enviar na hora.
            </p>

            <p className="mt-4 text-sm text-primary-foreground/60 max-w-xl mx-auto lg:mx-0 flex items-center justify-center lg:justify-start gap-2">
              <Smartphone className="h-4 w-4" />
              Acesse pelo navegador, instale no celular e use offline na remoção. Para enviar e sincronizar, conecte depois.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base h-14 px-8">
                <Link href={APP_URL} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Acessar app
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base h-14 px-8">
                <Link href="#ver-por-dentro">
                  <Eye className="mr-2 h-5 w-5" />
                  Ver por dentro
                </Link>
              </Button>
            </div>
          </div>

{/* Lado Direito - MOLDURA DE CELULAR COM GIF */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Moldura Externa do Celular */}
              <div className="relative w-[280px] h-[580px] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden ring-4 ring-zinc-700/20">
                {/* Speaker/Camera area (Notch) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-20" />
                
                {/* Tela (Onde o GIF aparece) */}
                <div className="absolute inset-0 bg-background overflow-hidden">
                  <img 
                    src="/images/demo.gif" // COLOQUE O CAMINHO DO SEU GIF AQUI (EX: /images/app-demo.gif)
                    alt="Demonstração do Aplicativo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Ícone flutuante de PDF */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-lg animate-bounce-slow">
                <FileText className="h-10 w-10 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}
