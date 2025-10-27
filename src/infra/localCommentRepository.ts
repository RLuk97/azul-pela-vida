"use client";

import type { Comment } from "../domain/comment";
import type { CommentRepository } from "../domain/commentRepository";
import { readJson, writeJson } from "../lib/storage";

const STORAGE_KEY = "azul_pela_vida_comments";

function seedDefaults(): Comment[] {
  return [
    {
      id: "seed-1",
      name: "Lucas M.",
      message:
        "Força, irmãos! Fazer o exame é um ato de coragem e amor próprio!",
      createdAt: Date.now() - 1000 * 60 * 60,
      approved: true,
    },
  ];
}

export class LocalCommentRepository implements CommentRepository {
  async list(onlyApproved = true): Promise<Comment[]> {
    const list = readJson<Comment[]>(STORAGE_KEY, seedDefaults());
    const sorted = list.sort((a: Comment, b: Comment) => b.createdAt - a.createdAt);
    return onlyApproved ? sorted.filter((c: Comment) => c.approved) : sorted;
  }

  async add(input: { name?: string; message: string; approved?: boolean }): Promise<Comment> {
    const now = Date.now();
    const newItem: Comment = {
      id: `c_${now}_${Math.random().toString(36).slice(2, 8)}`,
      name: input.name?.trim() || undefined,
      message: input.message.trim(),
      createdAt: now,
      approved: input.approved ?? true,
    };
    const list = readJson<Comment[]>(STORAGE_KEY, seedDefaults());
    list.push(newItem);
    writeJson(STORAGE_KEY, list);
    return newItem;
  }

  async count(onlyApproved = true): Promise<number> {
    const list = await this.list(onlyApproved);
    return list.length;
  }
}