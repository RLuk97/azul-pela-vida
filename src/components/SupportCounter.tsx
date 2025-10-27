"use client";

import { useEffect, useState } from "react";
import { useCommentRepository } from "@/lib/repo";

export default function SupportCounter() {
  const repo = useCommentRepository();
  const [count, setCount] = useState<number>(0);

  async function refresh() {
    const c = await repo.count(true);
    setCount(c);
  }

  useEffect(() => {
    refresh();
    const id = setInterval(refresh, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-xl bg-white ring-1 ring-blue-200 p-4 text-center">
      <p className="text-lg font-semibold text-blue-900">💙 {count.toLocaleString()} pessoas já deixaram mensagens de incentivo!</p>
    </div>
  );
}