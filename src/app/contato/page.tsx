import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: `Contato profissional com Diego de Oliveira — Advocacia Criminal em ${site.city}.`,
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <p className="eyebrow">Contato</p>
          <h1 className="serif text-4xl sm:text-5xl mt-4 max-w-3xl leading-tight">
            Atendimento por agendamento prévio.
          </h1>
          <p className="mt-6 text-mute max-w-prose">
            Para situações urgentes — prisão em flagrante ou audiência de
            custódia — o atendimento é direto pelo plantão 24 horas.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 grid gap-12 md:grid-cols-12">
        <aside className="md:col-span-5 space-y-8">
          <div>
            <p className="eyebrow">Dados profissionais</p>
            <p className="serif text-2xl mt-3">{site.name}</p>
            <p className="text-mute">{site.oab}</p>
            <p className="text-mute">{site.city}</p>
          </div>

          <div>
            <p className="eyebrow">Canais</p>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <span className="block text-mute">WhatsApp (plantão 24h)</span>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="serif text-xl hover:text-bordo"
                >
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <span className="block text-mute">E-mail</span>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all hover:text-bordo"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Atendimento</p>
            <p className="mt-3 text-sm text-ink/80">
              Presencial em {site.city} e remoto (videoconferência) em todo o
              território nacional, mediante agendamento.
            </p>
          </div>

          <p className="text-xs text-mute">
            Este canal não substitui consulta jurídica formal. Para análise
            técnica do seu caso, é necessário agendamento e formalização de
            contrato de honorários.
          </p>
        </aside>

        <div className="md:col-span-7">
          <div className="border border-ink/10 p-6 sm:p-8">
            <h2 className="serif text-2xl mb-6">Envie uma mensagem</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
