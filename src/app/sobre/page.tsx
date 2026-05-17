import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Quase uma década dedicada à defesa criminal. Atuação técnica em tráfico de drogas, organização criminosa e execução penal estratégica.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <p className="eyebrow">Sobre o profissional</p>
          <h1 className="serif text-4xl sm:text-5xl mt-4 max-w-3xl leading-tight">
            Quase uma década dedicada à defesa criminal.
          </h1>
          <p className="serif text-xl sm:text-2xl text-mute mt-6 max-w-3xl leading-snug">
            Atuação técnica em tráfico de drogas, organização criminosa e
            execução penal estratégica — construída sobre a análise rigorosa
            da prova e a leitura constitucional do caso concreto.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 grid gap-12 md:grid-cols-12">
        <aside className="md:col-span-4 space-y-6">
          <figure className="relative w-full aspect-[3/4] overflow-hidden bg-ink/5">
            <Image
              src="/diego-oliveira.png"
              alt={`Retrato profissional de ${site.name}`}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
              priority
            />
          </figure>
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
          <article className="space-y-5 max-w-prose text-ink/85 leading-relaxed">
            <p className="eyebrow !text-mute">Trajetória</p>

            <p>
              Diego de Oliveira atua há quase uma década na advocacia
              criminal, com inscrição na Ordem dos Advogados do Brasil,
              Seccional do Paraná, sob o nº 88.326. A formação jurídica,
              construída desde a graduação em Direito, entendeu desde cedo
              que o estudo é a base inegociável de qualquer defesa séria —
              convicção que se mantém como pilar da prática profissional,
              traduzida em atualização permanente sobre a jurisprudência
              consolidada do STF e do STJ e em diálogo constante com a
              doutrina contemporânea.
            </p>

            <p>
              A atuação concentra-se em causas envolvendo tráfico de drogas,
              associação ao tráfico, organização criminosa e execução penal
              estratégica — áreas em que a leitura técnica da prova, a
              fundamentação rigorosa e a precisão argumentativa são
              determinantes. Cada defesa é construída a partir da análise
              individualizada do caso concreto, com atenção especial aos
              pontos em que a acusação opera por presunção, generalização ou
              estereótipo, e onde a defesa pode atacar com base em
              jurisprudência consolidada e construção doutrinária
              consistente.
            </p>

            <p>
              O compromisso com a defesa criminal vai além da técnica
              processual. Significa acompanhar o caso em todas as suas
              fases — da investigação à execução —, preservar o que foi
              conquistado na sentença favorável, atacar pelas vias adequadas
              o que foi imposto indevidamente, e garantir que cada cliente
              tenha acesso a uma defesa construída com o mesmo rigor que se
              exigiria em qualquer instância do sistema de justiça.
            </p>
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
