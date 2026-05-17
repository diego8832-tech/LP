import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-paper-warm/40">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="serif text-xl">{site.name}</p>
          <p className="text-sm text-mute mt-1">{site.oab}</p>
          <p className="text-sm text-mute">{site.city}</p>
        </div>

        <nav aria-label="Rodapé">
          <p className="eyebrow mb-3">Navegação</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-bordo">Início</Link></li>
            <li><Link href="/sobre" className="hover:text-bordo">Sobre</Link></li>
            <li><Link href="/areas-de-atuacao" className="hover:text-bordo">Áreas de Atuação</Link></li>
            <li><Link href="/contato" className="hover:text-bordo">Contato</Link></li>
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-3">Contato</p>
          <ul className="space-y-2 text-sm">
            <li>
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${site.whatsappE164}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bordo"
              >
                {site.whatsappDisplay}
              </a>
            </li>
            <li>
              E-mail:{" "}
              <a href={`mailto:${site.email}`} className="hover:text-bordo break-all">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-mute">
          <p>
            © {new Date().getFullYear()} {site.fullName}. Todos os direitos reservados.
          </p>
          <p className="max-w-xl md:text-right">
            Conteúdo meramente informativo, em conformidade com o Provimento nº 205/2021 do
            Conselho Federal da OAB e com o Código de Ética e Disciplina da OAB.
          </p>
        </div>
      </div>
    </footer>
  );
}
