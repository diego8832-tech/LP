"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";

type Status = "idle" | "submitting" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    if ((data.get("website") as string)?.length) {
      setStatus("ok");
      form.reset();
      return;
    }

    const nome = (data.get("nome") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const telefone = (data.get("telefone") as string)?.trim();
    const mensagem = (data.get("mensagem") as string)?.trim();

    if (!nome || !email || !mensagem) {
      setStatus("error");
      setErrorMsg("Preencha nome, e-mail e mensagem para prosseguir.");
      return;
    }

    const subject = `Contato pelo site — ${nome}`;
    const body = [
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      telefone ? `Telefone: ${telefone}` : null,
      "",
      "Mensagem:",
      mensagem,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("ok");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" name="nome" required autoComplete="name" />
        <Field label="E-mail" name="email" type="email" required autoComplete="email" />
      </div>

      <Field label="Telefone (opcional)" name="telefone" type="tel" autoComplete="tel" />

      <div>
        <label htmlFor="mensagem" className="block text-sm mb-2">
          Mensagem <span aria-hidden className="text-bordo">*</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={6}
          className="w-full bg-paper border border-ink/15 px-4 py-3 text-base focus:border-ink outline-none"
          placeholder="Descreva resumidamente a situação. Evite incluir dados sigilosos neste primeiro contato."
        />
      </div>

      <p className="text-xs text-mute">
        Os dados informados serão utilizados exclusivamente para responder ao
        contato. Não há armazenamento em banco de dados nem compartilhamento
        com terceiros.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center bg-ink text-paper px-6 py-3 text-sm tracking-wide hover:bg-bordo transition-colors disabled:opacity-60"
        >
          {status === "submitting" ? "Enviando…" : "Enviar mensagem"}
        </button>
        <a
          href={whatsappLink("Olá, gostaria de agendar uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center border border-ink/20 px-6 py-3 text-sm tracking-wide hover:border-ink transition-colors"
        >
          Preferir WhatsApp
        </a>
      </div>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === "ok" && (
          <p className="text-sm text-bordo">
            Seu cliente de e-mail foi aberto com a mensagem preenchida.
            Confirme o envio para concluir.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-bordo">{errorMsg}</p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm mb-2">
        {label}
        {required && (
          <span aria-hidden className="text-bordo">
            {" "}
            *
          </span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full bg-paper border border-ink/15 px-4 py-3 text-base focus:border-ink outline-none"
      />
    </div>
  );
}
