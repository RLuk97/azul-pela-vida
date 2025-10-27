"use client";

import { LocalCommentRepository } from "@/infra/localCommentRepository";
import { ServerCommentRepository } from "@/infra/serverCommentRepository";
import type { CommentRepository } from "@/domain/commentRepository";

let repo: CommentRepository | null = null;

export function useCommentRepository(): CommentRepository {
  if (!repo) {
    const useServer = process.env.NEXT_PUBLIC_USE_SERVER === "true";
    repo = useServer ? new ServerCommentRepository() : new LocalCommentRepository();
  }
  return repo;
}