"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";

const nav = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-ink/10 bg-paper/90 backdrop-blur sticky top-0 z-40">
      <div
        role="status"
        aria-label="Plantão criminal"
        className="bg-ink text-paper text-[0.72rem] tracking-wider2 uppercase"
      >
        <div className="mx-auto max-w-6xl px-5 py-2 flex items-center justify-center gap-3 text-center">
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full bg-bordo-soft"
          />
          <span>Plantão criminal — atendimento 24 horas</span>
          <a
            href={whatsappLink(
              "Olá, preciso de atendimento criminal urgente."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-paper-warm"
          >
            {site.whatsappDisplay}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-5 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight" aria-label="Página inicial">
          <span className="serif text-xl sm:text-2xl">{site.name}</span>
          <span className="text-[0.68rem] uppercase tracking-wider2 text-mute">
            Advocacia Criminal · {site.oab}
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden md:flex items-center gap-7">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  active ? "text-ink" : "text-mute hover:text-ink"
                }`}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden
                    className="block h-px w-full bg-bordo mt-1.5"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex flex-col gap-1.5 p-2"
        >
          <span className={`h-px w-6 bg-ink transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-ink transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Mobile"
          className="md:hidden border-t border-ink/10 bg-paper"
        >
          <ul className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
