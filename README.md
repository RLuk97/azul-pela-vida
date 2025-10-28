# Azul Pela Vida — Site/Blog de Ação Social (Novembro Azul)

O Azul Pela Vida é um site/blog de ação social dedicado à conscientização sobre o câncer de próstata, alinhado ao movimento Novembro Azul. Ele reúne informação confiável, incentiva o cuidado em saúde e dá voz à comunidade por meio de mensagens de apoio que aparecem automaticamente em um carrossel contínuo.

## Objetivo

- Conectar pessoas em torno de uma causa de saúde pública.
- Incentivar a prevenção e o cuidado por meio de conteúdo educativo.
- Facilitar que a comunidade deixe mensagens de apoio, visíveis em tempo real.

## Principais recursos

- Carrossel contínuo de mensagens com espaçamento uniforme e velocidade configurável.
- Formulário “Deixe sua mensagem” centralizado e simples de usar.
- Contador em tempo real de mensagens aprovadas.
- Conteúdo educativo sobre prevenção, dados e importância do cuidado.
- Backend com API routes para persistência de comentários em Postgres.
- Fallback automático para `localStorage` em desenvolvimento sem banco de dados.
- Site responsivo, leve e sem anúncios.

## Stack técnica

- Next.js (App Router) e React.
- Tailwind CSS v4.
- API Routes com runtime `nodejs` para integração com Postgres.
- `pg` para conexão com banco (Neon/Supabase/Render/Vercel Postgres).

## Como rodar localmente

1. Instale dependências: `npm install`.
2. Inicie o servidor: `npm run dev`.
3. Abra `http://localhost:3000`.

Sem `DATABASE_URL`, o app usa `localStorage` apenas no navegador. Para testar o fluxo completo de backend, configure as variáveis abaixo.

## Variáveis de ambiente

- `NEXT_PUBLIC_USE_SERVER`: `true` para usar o backend `/api/comments`; `false` para fallback local.
- `DATABASE_URL` ou uma das alternativas reconhecidas (`POSTGRES_URL`, `POSTGRES_URL_NON_POOLING`, `POSTGRES_PRISMA_URL`): string de conexão Postgres.

Em produção (Vercel), o arquivo `src/app/api/comments/route.ts` define `export const runtime = "nodejs"` para garantir compatibilidade com o driver `pg`.

## Banco de dados e persistência

Tabela usada: `comments`.

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

- Criação automática: ao receber requisições, o backend cria a tabela e índice caso não existam.
- Aprovação: por padrão, os comentários são inseridos com `approved = true`. O carrossel e contadores consideram apenas os aprovados (padrão pode ser alterado via query `onlyApproved=false`).

## Deploy (GitHub → Vercel)

1. Crie/importa o repositório no GitHub.
2. No Vercel, "New Project" → importe o repo.
3. Defina as variáveis de ambiente:
   - `NEXT_PUBLIC_USE_SERVER` = `true`
   - `DATABASE_URL` = URL da base Postgres (Neon/Supabase/Render/Vercel Postgres)
4. Faça o deploy.

## Customizações úteis

- Velocidade do carrossel: ajuste `--ticker-duration` em `src/app/globals.css`.
- Espaçamento entre mensagens: ajuste `--ticker-gap` em `src/app/globals.css`.
- Largura do formulário: mude a `max-w` no container do formulário em `src/app/page.tsx`.

## Contribuição

- Issues e PRs são bem-vindos. Mantenha o foco em acessibilidade, performance e clareza das mensagens.

## Segurança e privacidade

- Não solicite dados sensíveis. As mensagens são públicas por padrão; ajuste o fluxo de aprovação conforme necessário.

---

Este projeto começou com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) e foi adaptado para o propósito de ação social.
