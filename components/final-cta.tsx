import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Download } from "lucide-react"

const LINK_WHATSAPP = "[LINK_WHATSAPP]"
const LINK_PLAY_STORE = "[LINK_PLAY_STORE]"
const LINK_APP_STORE = "[LINK_APP_STORE]"

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
          Pronto para profissionalizar suas remoções?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Comece agora e veja como é fácil ter um checklist completo com fotos, assinatura e PDF.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base h-14 px-8">
            <Link href={LINK_WHATSAPP} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base h-14 px-8">
            <Link href={LINK_PLAY_STORE} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Baixar o App
            </Link>
          </Button>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="ghost" size="sm" className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10">
            <Link href={LINK_PLAY_STORE} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Google Play
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10">
            <Link href={LINK_APP_STORE} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              App Store
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
