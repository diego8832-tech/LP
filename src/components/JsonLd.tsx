import { site } from "@/lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.fullName,
    description: site.shortDescription,
    url: site.baseUrl,
    email: site.email,
    telephone: "+55 42 99918-5159",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Laranjeiras do Sul",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    areaServed: { "@type": "Country", name: "Brasil" },
    serviceType: [
      "Direito Penal e Processo Penal",
      "Tráfico de Drogas e Associação ao Tráfico",
      "Organização Criminosa",
      "Execução Penal Estratégica",
    ],
    knowsAbout: "Direito Penal",
    identifier: site.oab,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
