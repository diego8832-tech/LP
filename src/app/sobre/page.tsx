import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Trajetória, formação e experiência profissional do advogado Diego de Oliveira, dedicado ao Direito Penal.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <p className="eyebrow">Sobre o profissional</p>
          <h1 className="serif text-4xl sm:text-5xl mt-4 max-w-3xl leading-tight">
            Atuação dedicada ao Direito Penal, com método e discrição.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 grid gap-12 md:grid-cols-12">
        <aside className="md:col-span-4">
          <div className="border border-ink/10 p-6 space-y-4 text-sm">
            <div>
              <p className="eyebrow">Inscrição</p>
              <p className="mt-1">{site.oab}</p>
            </div>
            <div>
              <p className="eyebrow">Sede</p>
              <p className="mt-1">{site.city}</p>
            </div>
            <div>
              <p className="eyebrow">Contato</p>
              <p className="mt-1">{site.whatsappDisplay}</p>
              <p className="break-all">{site.email}</p>
            </div>
          </div>
        </aside>

        <div className="md:col-span-8 space-y-12">
          <article className="space-y-4 max-w-prose">
            <p className="eyebrow">Apresentação</p>
            <h2 className="serif text-3xl leading-tight">
              {site.name}
            </h2>
            <p className="text-ink/80 leading-relaxed">
              {/* PLACEHOLDER — substituir pela apresentação institucional */}
              Apresentação biográfica do profissional. Descrever em parágrafo
              curto a abordagem do escritório, o foco em Direito Penal e a
              forma de trabalho — sempre sem promessas de resultado, sem
              comparações e sem captação indevida de clientela.
            </p>
            <p className="text-ink/80 leading-relaxed">
              {/* PLACEHOLDER — segundo parágrafo de apresentação */}
              Texto opcional complementando a forma de atendimento, postura
              ética e princípios de trabalho.
            </p>
          </article>

          <article className="space-y-4 max-w-prose">
            <p className="eyebrow">Formação acadêmica</p>
            <ul className="space-y-3">
              <li className="border-l-2 border-bordo pl-4">
                <p className="serif text-xl leading-tight">
                  {/* PLACEHOLDER */} Bacharelado em Direito
                </p>
                <p className="text-sm text-mute">
                  {/* PLACEHOLDER */} Instituição — Ano de conclusão
                </p>
              </li>
              <li className="border-l-2 border-ink/15 pl-4">
                <p className="serif text-xl leading-tight">
                  {/* PLACEHOLDER */} Pós-graduação / Especialização
                </p>
                <p className="text-sm text-mute">
                  {/* PLACEHOLDER */} Área — Instituição — Ano
                </p>
              </li>
              <li className="border-l-2 border-ink/15 pl-4">
                <p className="serif text-xl leading-tight">
                  {/* PLACEHOLDER */} Cursos e atualizações relevantes
                </p>
                <p className="text-sm text-mute">
                  {/* PLACEHOLDER */} Detalhar conforme necessário.
                </p>
              </li>
            </ul>
          </article>

          <article className="space-y-4 max-w-prose">
            <p className="eyebrow">Experiência profissional</p>
            <ul className="space-y-6">
              <li>
                <p className="serif text-xl leading-tight">
                  {/* PLACEHOLDER */} Experiência relevante 1
                </p>
                <p className="text-sm text-mute mt-1">
                  {/* PLACEHOLDER */} Período — Função
                </p>
                <p className="text-ink/80 mt-2">
                  {/* PLACEHOLDER */} Breve descrição da atuação, mantendo a
                  linguagem técnica e sóbria, sem juízos de valor.
                </p>
              </li>
              <li>
                <p className="serif text-xl leading-tight">
                  {/* PLACEHOLDER */} Experiência relevante 2
                </p>
                <p className="text-sm text-mute mt-1">
                  {/* PLACEHOLDER */} Período — Função
                </p>
                <p className="text-ink/80 mt-2">
                  {/* PLACEHOLDER */} Breve descrição.
                </p>
              </li>
            </ul>
          </article>

          <article className="space-y-4 max-w-prose">
            <p className="eyebrow">Princípios de trabalho</p>
            <ul className="space-y-2 text-ink/80">
              <li>— Sigilo profissional irrestrito;</li>
              <li>— Estudo aprofundado do caso e construção conjunta da estratégia;</li>
              <li>— Comunicação transparente sobre andamento e perspectivas processuais;</li>
              <li>— Honorários estabelecidos por escrito, conforme tabela da OAB.</li>
            </ul>
          </article>

          <div>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center bg-ink text-paper px-6 py-3 text-sm tracking-wide hover:bg-bordo transition-colors"
            >
              Entrar em contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
