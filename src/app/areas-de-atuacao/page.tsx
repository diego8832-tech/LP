import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Atuação técnica em Direito Penal e Processo Penal, tráfico de drogas e associação ao tráfico, organização criminosa e execução penal estratégica.",
  alternates: { canonical: "/areas-de-atuacao" },
};

const areas = [
  {
    slug: "direito-penal-e-processo-penal",
    title: "Direito Penal e Processo Penal",
    summary:
      "Defesa técnica em inquéritos policiais, ações penais e recursos.",
    description:
      "Atuação que se estende da fase investigativa ao trânsito em julgado, com leitura crítica do testemunho policial, controle rigoroso da licitude da prova e análise individualizada de cada elemento que compõe a imputação.",
  },
  {
    slug: "trafico-de-drogas",
    title: "Tráfico de Drogas e Associação ao Tráfico",
    summary:
      "Atuação consolidada em causas envolvendo a Lei nº 11.343/06.",
    description:
      "Teses de tráfico privilegiado (§4º do art. 33), descaracterização da associação (art. 35) por ausência de vínculo estável e permanente, controle do bis in idem na dosimetria (Tema 712 do STF) e proporcionalidade do regime e do confisco. Atenção especial à crítica da prova telemática — cadeia de custódia, perícia de voz e contextualização integral de diálogos.",
  },
  {
    slug: "organizacao-criminosa",
    title: "Organização Criminosa",
    summary:
      "Defesa em ações fundadas na Lei nº 12.850/13.",
    description:
      "Análise rigorosa dos elementos estruturais do tipo — estabilidade, permanência, divisão funcional de tarefas e hierarquia — distinguindo a atuação isolada e o concurso eventual de agentes da efetiva integração em organização criminosa.",
  },
  {
    slug: "execucao-penal",
    title: "Execução Penal Estratégica",
    summary:
      "Progressão de regime, livramento condicional, indulto, comutação, remição, conversão de penas e demais incidentes da execução.",
    description:
      "Atuação fundada na premissa de que a coisa julgada favorável ao apenado é direito subjetivo a ser preservado — em particular nas hipóteses do Tema Repetitivo 1106 do STJ, que veda a unificação automática de penas restritivas supervenientes.",
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
          <p className="serif text-xl sm:text-2xl text-mute mt-6 max-w-3xl leading-snug">
            Especialização que se constrói caso a caso.
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
