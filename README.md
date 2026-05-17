# Diego de Oliveira — Advocacia e Consultoria Criminal

Site institucional construído em **Next.js 14 (App Router)**, **TypeScript** e **Tailwind CSS**.

A identidade visual é sóbria — paleta neutra (preto, off-white, cinza) com bordô como acento, tipografia clássica em serifa nos títulos (Cormorant Garamond) e sans-serif no corpo (Inter).

O conteúdo segue o **Provimento nº 205/2021 do Conselho Federal da OAB** e o Código de Ética: tom técnico e informativo, sem promessas de resultado, sem depoimentos, sem mercantilização e sem captação indevida de clientela.

---

## Stack

- Next.js 14 (App Router, Server Components)
- TypeScript em modo `strict`
- Tailwind CSS
- `next/font` para carregamento otimizado das tipografias
- SEO: metadata API, Open Graph, `sitemap.xml`, `robots.txt`, JSON-LD (`LegalService`)
- **Sem analytics, sem cookies de tracking, sem fontes externas com tracking**

## Estrutura

```
src/
├─ app/
│  ├─ layout.tsx            # Layout raiz, metadata, fontes, header/footer
│  ├─ page.tsx              # Home
│  ├─ sobre/page.tsx        # Sobre (com placeholders)
│  ├─ areas-de-atuacao/     # Áreas de atuação
│  ├─ contato/page.tsx      # Contato + formulário
│  ├─ not-found.tsx         # 404
│  ├─ sitemap.ts            # /sitemap.xml
│  ├─ robots.ts             # /robots.txt
│  └─ globals.css           # Tailwind + tokens
├─ components/
│  ├─ Header.tsx            # Header com plantão 24h
│  ├─ Footer.tsx
│  ├─ ContactForm.tsx       # Formulário (abre mailto:)
│  └─ JsonLd.tsx            # Dados estruturados
└─ lib/
   └─ site.ts               # Dados do escritório (fonte única)
```

Os dados do escritório ficam centralizados em [`src/lib/site.ts`](src/lib/site.ts). Atualize lá nome, OAB, cidade, WhatsApp, e-mail e URL base.

## Placeholders para preencher

A página **Sobre** (`src/app/sobre/page.tsx`) contém marcadores `{/* PLACEHOLDER */}` para:

- Apresentação biográfica (1–2 parágrafos)
- Formação acadêmica (graduação, pós, cursos)
- Experiência profissional

Substitua o conteúdo dentro desses marcadores diretamente no JSX.

---

## Como rodar localmente

Pré-requisitos: **Node.js 18.18+** (recomendado 20+) e **npm** (ou pnpm/yarn).

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variável de ambiente (opcional — usado pelo metadata/sitemap)
cp .env.example .env.local
# edite NEXT_PUBLIC_SITE_URL com o domínio final, por exemplo:
# NEXT_PUBLIC_SITE_URL=https://www.diegooliveiraadvocacia.com.br

# 3. Servidor de desenvolvimento
npm run dev
# abra http://localhost:3000
```

Scripts disponíveis:

| Comando            | Descrição                          |
| ------------------ | ---------------------------------- |
| `npm run dev`      | Servidor de desenvolvimento        |
| `npm run build`    | Build de produção                  |
| `npm run start`    | Roda o build de produção           |
| `npm run lint`     | ESLint (config `next/core-web-vitals`) |
| `npm run typecheck`| Checagem de tipos sem emitir       |

---

## Deploy no Vercel

1. **Suba o repositório para o GitHub/GitLab/Bitbucket.**
2. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório.
3. Na tela de configuração:
   - Framework: **Next.js** (detectado automaticamente)
   - Build Command: `next build` (padrão)
   - Output Directory: `.next` (padrão)
4. Em **Environment Variables**, adicione:
   - `NEXT_PUBLIC_SITE_URL` = URL final do site (ex.: `https://www.seudominio.com.br`)
5. Clique em **Deploy**.

### Domínio próprio

Em **Settings → Domains** do projeto na Vercel, adicione o domínio e siga as instruções de DNS (CNAME para `cname.vercel-dns.com` ou registros A para o domínio apex). Após a propagação do DNS, atualize `NEXT_PUBLIC_SITE_URL` para refletir a URL definitiva e redisparar um deploy.

### Deploy via CLI (opcional)

```bash
npm i -g vercel
vercel              # primeiro deploy / preview
vercel --prod       # promove para produção
```

---

## Compliance — Provimento 205/2021 da OAB

O site foi escrito respeitando, entre outros pontos:

- **Sem promessas de resultado** ou garantias de êxito processual.
- **Sem depoimentos** de clientes ou estudos de caso identificáveis.
- **Sem linguagem sensacionalista**, comparações com outros profissionais ou autopromoção.
- **Sem mercantilização**: nada de "promoções", "pacotes", preços ou descontos.
- **Identificação visível** do profissional e do número de inscrição na OAB.
- **Atendimento por agendamento prévio**, sem oferta indiscriminada.
- **Sem cookies de tracking, sem analytics, sem pixels** — somente as requisições necessárias para renderizar a página.

Ao editar textos, mantenha o tom informativo e técnico. Se houver dúvida sobre algum conteúdo, consulte o Provimento 205/2021 e o Código de Ética e Disciplina da OAB.

---

## Acessibilidade e performance

- HTML semântico, landmarks (`header`, `main`, `footer`, `nav`).
- Link "Ir para o conteúdo" para usuários de teclado.
- Contraste verificado para texto principal e CTAs.
- Respeita `prefers-reduced-motion`.
- Fontes carregadas via `next/font` (sem requisição a `fonts.googleapis.com` em runtime).
- Headers de segurança configurados em `next.config.mjs`.

---

## Licença

Conteúdo proprietário. Código-fonte de uso interno do escritório.
