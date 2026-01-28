import Link from "next/link"
import { MessageCircle } from "lucide-react"

const LINK_WHATSAPP = "[LINK_WHATSAPP]"

export function WhatsAppButton() {
  return (
    <Link
      href={LINK_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BD5A] transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  )
}
