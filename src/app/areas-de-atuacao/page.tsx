import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Atuação técnica em Tribunal do Júri, audiência de custódia, prisão em flagrante, crimes de trânsito e execução penal.",
  alternates: { canonical: "/areas-de-atuacao" },
};

const areas = [
  {
    slug: "tribunal-do-juri",
    title: "Tribunal do Júri",
    summary:
      "Defesa em processos de competência do Tribunal do Júri, da fase de pronúncia ao plenário.",
    description:
      "Atuação em todas as etapas do procedimento bifásico — sumário de culpa, pronúncia, preparação do plenário e sustentação oral perante o Conselho de Sentença — com elaboração de teses de defesa fundadas no acervo probatório dos autos.",
  },
  {
    slug: "audiencia-de-custodia",
    title: "Audiência de Custódia",
    summary:
      "Acompanhamento da pessoa presa em até 24 horas após a prisão, perante a autoridade judicial.",
    description:
      "Defesa técnica voltada ao controle de legalidade da prisão, análise de excessos, requerimento de relaxamento, liberdade provisória ou medidas cautelares diversas, conforme as circunstâncias do caso concreto.",
  },
  {
    slug: "prisao-em-flagrante",
    title: "Prisão em Flagrante",
    summary:
      "Atendimento imediato em situações de prisão em flagrante, com plantão 24 horas.",
    description:
      "Orientação à pessoa presa e aos familiares, acompanhamento na lavratura do auto, análise dos requisitos legais do flagrante e medidas cabíveis perante a autoridade policial e judicial.",
  },
  {
    slug: "crimes-de-transito",
    title: "Crimes de Trânsito",
    summary:
      "Defesa em delitos previstos no Código de Trânsito Brasileiro.",
    description:
      "Atuação em casos de embriaguez ao volante, lesão corporal culposa, homicídio culposo na direção de veículo automotor, racha e demais condutas tipificadas no CTB, com análise probatória e técnica das circunstâncias.",
  },
  {
    slug: "execucao-penal",
    title: "Execução Penal",
    summary:
      "Acompanhamento de pessoas em cumprimento de pena privativa de liberdade.",
    description:
      "Requerimento de progressão de regime, livramento condicional, remição pelo trabalho ou estudo, comutação, indulto e demais incidentes da execução penal, perante a Vara de Execuções competente.",
  },
];

export default function AreasPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <p className="eyebrow">Direito Penal</p>
          <h1 className="serif text-4xl sm:text-5xl mt-4 max-w-3xl leading-tight">
            Áreas de atuação
          </h1>
          <p className="mt-6 text-mute max-w-prose">
            Atuação exclusiva em matéria criminal, em todas as fases da
            persecução penal e em todas as instâncias.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <ol className="divide-y divide-ink/10 border-y border-ink/10">
          {areas.map((area, i) => (
            <li
              key={area.slug}
              className="py-10 grid gap-6 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-4 flex items-start gap-4">
                <span
                  aria-hidden
                  className="serif text-mute text-sm tracking-wider2 pt-1"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="serif text-2xl sm:text-3xl leading-tight">
                  {area.title}
                </h2>
              </div>
              <div className="md:col-span-8 max-w-prose">
                <p className="text-ink/85">{area.summary}</p>
                <p className="text-mute mt-3 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="border border-ink/10 p-8 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="serif text-2xl max-w-xl leading-tight">
            Para avaliar a situação processual de um caso específico, entre em
            contato para agendamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink(
                "Olá, gostaria de agendar uma consulta sobre matéria criminal."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-ink text-paper px-6 py-3 text-sm tracking-wide hover:bg-bordo transition-colors"
            >
              Falar pelo WhatsApp
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center border border-ink/20 px-6 py-3 text-sm tracking-wide hover:border-ink transition-colors"
            >
              Página de contato
            </Link>
          </div>
        </div>

        <p className="mt-8 text-xs text-mute max-w-prose">
          Este conteúdo é meramente informativo e não constitui consulta
          jurídica. A análise de cada caso depende de exame individualizado
          dos autos e dos documentos pertinentes.
        </p>
      </section>
    </>
  );
}
