import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="serif text-4xl sm:text-5xl mt-4">Página não encontrada.</h1>
      <p className="mt-6 text-mute max-w-md mx-auto">
        O endereço acessado não existe ou foi movido.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center mt-8 bg-ink text-paper px-6 py-3 text-sm tracking-wide hover:bg-bordo transition-colors"
      >
        Voltar ao início
      </Link>
    </section>
  );
}
