import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { SUPPORT_WHATSAPP_URL } from "@/lib/links"

export function WhatsAppButton() {
  return (
    <Link
      href={SUPPORT_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BD5A] transition-all duration-300 hover:scale-110"
      aria-label="Suporte pelo WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Link>
  )
}
