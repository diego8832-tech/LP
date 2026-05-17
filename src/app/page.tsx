import Image from "next/image";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";

const areas = [
  "Direito Penal e Processo Penal",
  "Tráfico de Drogas e Associação ao Tráfico",
  "Organização Criminosa",
  "Execução Penal Estratégica",
];

export default function HomePage() {
  return (
    <>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:py-28 text-center">
          <div className="mx-auto w-[220px] sm:w-[280px] lg:w-[320px]">
            <Image
              src="/logo-dark.png"
              alt={`${site.fullName} — logotipo`}
              width={2600}
              height={2000}
              priority
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 280px, 220px"
              className="w-full h-auto"
            />
          </div>

          <p className="text-[0.72rem] uppercase tracking-wider2 text-paper/55 mt-10">
            Advocacia Criminal · {site.city}
          </p>

          <h1 className="serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] mt-5 max-w-3xl mx-auto">
            Defesa técnica em matéria criminal,{" "}
            <span className="text-gold">com discrição e rigor.</span>
          </h1>

          <p className="mt-7 text-base sm:text-lg text-paper/75 max-w-prose mx-auto leading-relaxed">
            Atuação personalizada em todas as fases da persecução penal — do
            inquérito ao trânsito em julgado e à execução da pena. Atendimento
            presencial em {site.city} e remoto em todo o território nacional.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappLink(
                "Olá, gostaria de agendar uma consulta com o Dr. Diego."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-bordo text-paper px-7 py-3 text-sm tracking-wide hover:bg-bordo-soft transition-colors"
            >
              Falar pelo WhatsApp
            </a>
            <Link
              href="/areas-de-atuacao"
              className="inline-flex items-center justify-center border border-paper/25 text-paper px-7 py-3 text-sm tracking-wide hover:border-paper hover:bg-paper/5 transition-colors"
            >
              Áreas de atuação
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-7 grid gap-5 sm:grid-cols-3 text-sm">
          <div className="text-center sm:text-left">
            <span className="block text-mute text-xs uppercase tracking-wider2">
              Plantão 24h
            </span>
            <a
              href={whatsappLink()}
              className="serif text-lg hover:text-bordo"
            >
              {site.whatsappDisplay}
            </a>
          </div>
          <div className="text-center sm:text-left">
            <span className="block text-mute text-xs uppercase tracking-wider2">
              E-mail
            </span>
            <a
              href={`mailto:${site.email}`}
              className="hover:text-bordo break-all"
            >
              {site.email}
            </a>
          </div>
          <div className="text-center sm:text-left">
            <span className="block text-mute text-xs uppercase tracking-wider2">
              Inscrição
            </span>
            <span>{site.oab}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Apresentação</p>
            <h2 className="serif text-3xl sm:text-4xl mt-3 leading-tight">
              Um escritório dedicado exclusivamente ao Direito Penal.
            </h2>
          </div>
          <div className="md:col-span-7 text-base text-ink/80 leading-relaxed space-y-4 max-w-prose">
            <p>
              A advocacia criminal exige presença atenta, estudo permanente do
              caso e respeito absoluto ao devido processo legal. É com esse
              compromisso que conduzo cada defesa, do primeiro contato à última
              instância recursal.
            </p>
            <p>
              O acompanhamento é direto e individualizado, com volume de
              causas deliberadamente restrito, de modo a preservar a
              profundidade da análise técnica e a construção de uma
              estratégia processual ajustada às particularidades de cada
              caso.
            </p>
            <p>
              <Link
                href="/sobre"
                className="border-b border-bordo pb-0.5 hover:text-bordo"
              >
                Conhecer a trajetória profissional
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper-warm/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <p className="eyebrow">Atuação</p>
              <h2 className="serif text-3xl sm:text-4xl mt-3">
                Áreas de atuação
              </h2>
            </div>
            <Link
              href="/areas-de-atuacao"
              className="text-sm border-b border-ink/30 hover:border-bordo hover:text-bordo pb-0.5"
            >
              Ver todas
            </Link>
          </div>

          <ul className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3 border border-ink/10">
            {areas.map((a) => (
              <li
                key={a}
                className="bg-paper p-6 sm:p-7 flex items-start gap-4"
              >
                <span
                  aria-hidden
                  className="serif text-bordo text-2xl leading-none mt-1"
                >
                  §
                </span>
                <span className="serif text-xl">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="border border-ink/10 p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="eyebrow">Atendimento urgente</p>
            <h2 className="serif text-2xl sm:text-3xl mt-2">
              Situação criminal urgente?
            </h2>
            <p className="text-mute mt-2 max-w-xl">
              Para prisão em flagrante, condução coercitiva ou demais
              urgências criminais, o atendimento é direto, a qualquer
              horário.
            </p>
          </div>
          <a
            href={whatsappLink(
              "Olá, preciso de atendimento criminal urgente."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-bordo text-paper px-6 py-3 text-sm tracking-wide hover:bg-bordo-dark transition-colors"
          >
            Acionar plantão 24h
          </a>
        </div>
      </section>
    </>
  );
}
