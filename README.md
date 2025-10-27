This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Azul Pela Vida — Novembro Azul

App com frontend e backend (API routes) para mensagens de apoio.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy (GitHub → Vercel)

1. Crie um repositório no GitHub e faça push da pasta `azul-pela-vida`.
2. No Vercel, clique em "New Project" → importe o repo.
3. Configure as variáveis de ambiente:
   - `NEXT_PUBLIC_USE_SERVER` = `true` (frontend usa o backend `/api/comments`).
   - `DATABASE_URL` = URL da sua base Postgres (Neon/Supabase/Render etc.).
4. Deploy.

### Persistência de comentários

- **Dev/local:** usa `localStorage` (persistente apenas no navegador).
- **Produção:** API `/api/comments` salva em Postgres via `DATABASE_URL`.

Para armazenamento permanente, integre um serviço:

- **Vercel KV** (Redis gerenciado): pacote `@vercel/kv` e variáveis `KV_REST_API_URL`, `KV_REST_API_TOKEN`.
- **Postgres** (Neon/Supabase): base gratuita, conectar via client.

### Esquema da tabela

```sql
CREATE TABLE IF NOT EXISTS comments (
  id TEXT PRIMARY KEY,
  name TEXT,
  message TEXT NOT NULL,
  created_at BIGINT NOT NULL,
  approved BOOLEAN NOT NULL
);
CREATE INDEX IF NOT EXISTS comments_created_at_idx ON comments(created_at);
```

Obs.: o projeto cria a tabela automaticamente ao receber requisições, se ela não existir.


---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
