import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Eye, CheckCircle, Camera, PenTool, FileText, WifiOff } from "lucide-react"

const LINK_WHATSAPP = "https://wa.me/5511971890566?text=Ol%C3%A1!%20Quero%20conhecer%20o%20GuinCheck%20e%20come%C3%A7ar%20a%20usar%20no%20meu%20guincho."
const LINK_PLAY_STORE = "[LINK_PLAY_STORE]"
const LINK_APP_STORE = "[LINK_APP_STORE]"

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
              <WifiOff className="h-4 w-4" />
              Funciona sem internet durante a remoção. Para enviar e salvar na nuvem, precisa de conexão.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#20BD5A] font-semibold text-base h-14 px-8">
                <Link href={LINK_WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
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

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-64 sm:w-72 h-[500px] sm:h-[560px] bg-foreground/10 rounded-[2.5rem] border-4 border-foreground/20 shadow-2xl overflow-hidden">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/30 rounded-full" />
                
                <div className="absolute inset-4 top-12 bg-background rounded-2xl overflow-hidden">
                  <div className="bg-primary p-4">
                    <p className="text-primary-foreground text-sm font-semibold">Nova Remocao</p>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium text-foreground">Dados do veículo</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium text-foreground">Fotos registradas</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-accent/20 rounded-lg border-2 border-accent">
                      <Camera className="h-5 w-5 text-accent-foreground" />
                      <span className="text-sm font-medium text-foreground">Ocorrências</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg opacity-60">
                      <PenTool className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">Assinatura na tela</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg opacity-60">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">Gerar PDF</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-primary text-primary-foreground text-center py-3 rounded-lg font-semibold text-sm">
                      Continuar
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                <FileText className="h-10 w-10 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
