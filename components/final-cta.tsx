import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Eye } from "lucide-react"

const LINK_WHATSAPP = "https://wa.me/5511971890566?text=Ol%C3%A1!%20Quero%20conhecer%20o%20GuinCheck%20e%20come%C3%A7ar%20a%20usar%20no%20meu%20guincho."

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
          Pronto para profissionalizar suas remocoes?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Fale com a gente no WhatsApp e comece a usar o GuinCheck hoje.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  )
}
