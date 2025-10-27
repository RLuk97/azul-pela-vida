import { NextResponse } from "next/server";
export const runtime = "nodejs";
import type { Comment } from "@/domain/comment";
import { getPool, ensureCommentsTable } from "@/lib/db";

function toComment(row: any): Comment {
  return {
    id: String(row.id),
    name: row.name ?? undefined,
    message: String(row.message),
    createdAt: Number(row.created_at),
    approved: Boolean(row.approved),
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const onlyApproved = searchParams.get("onlyApproved") !== "false"; // default true
  const hasDb = !!(
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.POSTGRES_PRISMA_URL
  );

  if (!hasDb) {
    // Fallback: nenhum DATABASE_URL; ambiente local sem DB
    return NextResponse.json([], { headers: { "Cache-Control": "no-store" } });
  }

  try {
    await ensureCommentsTable();
    const pool = getPool();
    const where = onlyApproved ? "WHERE approved = true" : "";
    const { rows } = await pool.query(`SELECT id, name, message, created_at, approved FROM comments ${where} ORDER BY created_at DESC`);
    const result = rows.map(toComment);
    return NextResponse.json(result, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    return NextResponse.json({ error: "Falha ao listar" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const hasDb = !!(
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.POSTGRES_PRISMA_URL
  );
  if (!hasDb) {
    return NextResponse.json({ error: "DATABASE_URL não configurada" }, { status: 500 });
  }
  try {
    const body = (await req.json()) as { name?: string; message?: string; approved?: boolean };
    const trimmed = (body.message || "").trim();
    if (!trimmed) {
      return NextResponse.json({ error: "Mensagem obrigatória" }, { status: 400 });
    }
    await ensureCommentsTable();
    const now = Date.now();
    const id = `c_${now}_${Math.random().toString(36).slice(2, 8)}`;
    const pool = getPool();
    await pool.query(
      `INSERT INTO comments (id, name, message, created_at, approved) VALUES ($1, $2, $3, $4, $5)`,
      [id, body.name?.trim() || null, trimmed, now, body.approved ?? true]
    );
    const item: Comment = {
      id,
      name: body.name?.trim() || undefined,
      message: trimmed,
      createdAt: now,
      approved: body.approved ?? true,
    };
    return NextResponse.json(item, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "Falha ao processar" }, { status: 500 });
  }
}