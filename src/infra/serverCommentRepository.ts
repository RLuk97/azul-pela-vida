import type { Comment } from "@/domain/comment";
import type { CommentRepository } from "@/domain/commentRepository";

export class ServerCommentRepository implements CommentRepository {
  async list(onlyApproved = true): Promise<Comment[]> {
    const res = await fetch(`/api/comments?onlyApproved=${onlyApproved ? "true" : "false"}`, {
      method: "GET",
      headers: { "Accept": "application/json" },
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Falha ao listar comentários");
    return (await res.json()) as Comment[];
  }

  async add(input: { name?: string; message: string; approved?: boolean }): Promise<Comment> {
    const res = await fetch(`/api/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    if (!res.ok) throw new Error("Falha ao enviar comentário");
    return (await res.json()) as Comment;
  }

  async count(onlyApproved = true): Promise<number> {
    const list = await this.list(onlyApproved);
    return list.length;
  }
}