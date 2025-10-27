"use client";

import { useEffect, useState } from "react";
import type { Comment } from "@/domain/comment";
import { useCommentRepository } from "@/lib/repo";

export default function CommentList() {
  const repo = useCommentRepository();
  const [items, setItems] = useState<Comment[]>([]);

  async function refresh() {
    const list = await repo.list(true);
    setItems(list);
  }

  useEffect(() => {
    refresh();
    const id = setInterval(refresh, 1500);
    return () => clearInterval(id);
  }, []);

  if (items.length === 0) {
    return <p className="text-blue-900">Seja o primeiro a deixar sua mensagem 💙</p>;
  }

  return (
    <ul className="space-y-3">
      {items.map((c) => (
        <li key={c.id} className="rounded-xl border border-blue-100 bg-blue-50 p-4">
          <p className="text-blue-900">“{c.message}”</p>
          <p className="mt-2 text-sm text-blue-700">— {c.name || "Anônimo"}</p>
        </li>
      ))}
    </ul>
  );
}