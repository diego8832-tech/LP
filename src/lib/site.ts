export const site = {
  name: "Diego de Oliveira",
  fullName: "Diego de Oliveira — Advocacia e Consultoria Criminal",
  shortDescription:
    "Advocacia criminal em Laranjeiras do Sul/PR. Atuação técnica em todas as fases da persecução penal.",
  oab: "OAB/PR 88.326",
  city: "Laranjeiras do Sul — PR",
  whatsappDisplay: "(42) 99918-5159",
  whatsappE164: "5542999185159",
  email: "diego_oliveira_222@hotmail.com",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
} as const;

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${site.whatsappE164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
