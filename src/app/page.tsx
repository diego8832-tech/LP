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
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28 grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow">Advocacia Criminal · {site.city}</p>
            <h1 className="serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] mt-5">
              Defesa técnica em
              <br />
              matéria criminal,
              <br />
              <span className="text-bordo">com discrição e rigor.</span>
            </h1>
            <p className="mt-7 text-base sm:text-lg text-mute max-w-prose">
              Atuação personalizada em todas as fases da persecução penal — do
              inquérito ao tribunal do júri e à execução da pena. Atendimento
              presencial em {site.city} e remoto em todo o território nacional.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink(
                  "Olá, gostaria de agendar uma consulta com o Dr. Diego."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-ink text-paper px-6 py-3 text-sm tracking-wide hover:bg-bordo transition-colors"
              >
                Falar pelo WhatsApp
              </a>
              <Link
                href="/areas-de-atuacao"
                className="inline-flex items-center justify-center border border-ink/20 px-6 py-3 text-sm tracking-wide hover:border-ink transition-colors"
              >
                Áreas de atuação
              </Link>
            </div>
          </div>

          <aside className="md:col-span-4 md:pl-6 md:border-l md:border-ink/10">
            <p className="eyebrow">Atendimento</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="block text-mute">Plantão 24h</span>
                <a
                  href={whatsappLink()}
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
              <li>
                <span className="block text-mute">Inscrição</span>
                <span>{site.oab}</span>
              </li>
            </ul>
          </aside>
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
              Trabalho de forma artesanal, com poucos casos simultâneos, para
              que cada cliente receba acompanhamento direto e estratégia
              construída sobre as particularidades do seu processo.
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
