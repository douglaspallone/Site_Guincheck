"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "O PDF sai na hora?",
    answer: "Sim! Assim que você finaliza o checklist com as assinaturas, o PDF é gerado automaticamente e fica pronto para compartilhar por WhatsApp ou e-mail.",
  },
  {
    question: "Funciona sem internet?",
    answer: "Você pode preencher o checklist e tirar fotos offline. Quando conectar à internet, os dados são sincronizados automaticamente.",
  },
  {
    question: "Dá para anexar muitas fotos?",
    answer: "Sim, você pode adicionar quantas fotos precisar para documentar o estado do veículo antes e depois da remoção.",
  },
  {
    question: "Quem assina no celular?",
    answer: "O cliente e o motorista podem assinar diretamente na tela do celular. As assinaturas ficam registradas no PDF final.",
  },
  {
    question: "Onde fica o histórico?",
    answer: "Todas as remoções ficam salvas no app, organizadas por data. Você pode acessar qualquer documento antigo quando precisar.",
  },
  {
    question: "Como envio para o cliente?",
    answer: "Após gerar o PDF, basta tocar em compartilhar e escolher WhatsApp, e-mail ou qualquer outro app. Simples assim!",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-muted scroll-mt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tire suas dúvidas sobre o GuinCheck
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6 data-[state=open]:border-accent"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
