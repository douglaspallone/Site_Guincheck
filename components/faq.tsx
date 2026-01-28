"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Funciona sem internet?",
    answer: "Sim. Você consegue preencher, registrar fotos e ocorrências offline. Para enviar e sincronizar na nuvem, precisa de internet.",
  },
  {
    question: "Tem limite de fotos?",
    answer: "Não. Você pode anexar quantas fotos precisar em cada remoção.",
  },
  {
    question: "O PDF sai na hora?",
    answer: "Sim. Ao finalizar, você gera o PDF e pode enviar para o cliente.",
  },
  {
    question: "Quem assina no celular?",
    answer: "Cliente e motorista assinam na tela, no próprio celular.",
  },
  {
    question: "Onde fica o histórico?",
    answer: "No app, na área de histórico. Você consulta quando quiser.",
  },
  {
    question: "Como envio para o cliente?",
    answer: "Você compartilha por WhatsApp ou e-mail em poucos toques (quando estiver com internet).",
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
