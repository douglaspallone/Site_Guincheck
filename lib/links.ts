export const APP_URL = "https://app.guincheck.com.br"

const SUPPORT_WHATSAPP_NUMBER = "5511926913999"

export const SUPPORT_PHONE_DISPLAY = "+55 11 92691-3999"

function buildWhatsAppLink(message: string) {
  return `https://wa.me/${SUPPORT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const SUPPORT_WHATSAPP_URL = buildWhatsAppLink(
  "Olá! Preciso de suporte com o GuinCheck.",
)

export const FLEETS_WAITLIST_WHATSAPP_URL = buildWhatsAppLink(
  "Olá! Quero saber quando sai o plano para frotas do GuinCheck.",
)
