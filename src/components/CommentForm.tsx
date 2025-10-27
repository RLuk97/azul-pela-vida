"use client";

import { useState } from "react";
import { useCommentRepository } from "@/lib/repo";

type Props = {
  onSubmitted?: () => void;
};

export default function CommentForm({ onSubmitted }: Props) {
  const repo = useCommentRepository();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const trimmed = message.trim();
    if (!trimmed) {
      setError("Digite uma mensagem de apoio.");
      return;
    }
    setLoading(true);
    try {
      await repo.add({ name, message: trimmed });
      setMessage("");
      setName("");
      onSubmitted?.();
    } catch (err) {
      setError("Não foi possível enviar sua mensagem.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <div>
        <label className="block text-sm font-medium text-blue-900">Nome (opcional)</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-md border border-blue-200 bg-white p-2 text-blue-900 placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Seu primeiro nome"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-blue-900">Sua mensagem</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-md border border-blue-200 bg-white p-2 h-28 resize-y text-blue-900 placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Deixe seu apoio e incentivo"
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-5 py-2 font-medium hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Deixe sua mensagem de apoio"}
      </button>
    </form>
  );
}