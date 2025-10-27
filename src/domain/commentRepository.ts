import type { Comment } from "@/domain/comment";

export interface CommentRepository {
  list(onlyApproved?: boolean): Promise<Comment[]>;
  add(input: { name?: string; message: string; approved?: boolean }): Promise<Comment>;
  count(onlyApproved?: boolean): Promise<number>;
}