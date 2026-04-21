import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import { APP_URL } from "@/lib/links"

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
          Pronto para profissionalizar suas remoções?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Acesse o GuinCheck pelo navegador e instale no celular em poucos toques.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  )
}
