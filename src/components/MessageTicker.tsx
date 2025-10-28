"use client";

import { useEffect, useRef, useState } from "react";
import type { Comment } from "@/domain/comment";
import { useCommentRepository } from "@/lib/repo";

export default function MessageTicker() {
  const repo = useCommentRepository();
  const [items, setItems] = useState<Comment[]>([]);
  const [copies, setCopies] = useState<number>(2);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  async function refresh() {
    try {
      const list = await repo.list(true);
      setItems(list);
    } catch (e) {
      // silencioso: se falhar, mantém último estado
    }
  }

  useEffect(() => {
    refresh();
    const id = setInterval(refresh, 5000);
    return () => clearInterval(id);
  }, []);

  // Calcula quantas cópias precisamos para cobrir a largura do container
  useEffect(() => {
    const recalc = () => {
      const container = containerRef.current;
      const content = contentRef.current;
      if (!container || !content) return;
      const containerWidth = container.offsetWidth;
      const contentWidth = content.scrollWidth;
      if (containerWidth === 0 || contentWidth === 0) return;
      const need = Math.max(2, Math.ceil(containerWidth / contentWidth) + 1);
      setCopies(need);
    };
    // recalcula após renderização
    const raf = requestAnimationFrame(recalc);
    // e em resize
    window.addEventListener("resize", recalc);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", recalc);
    };
  }, [items.length]);

  if (items.length === 0) return null;

  // Conteúdo duplicado para efeito contínuo
  return (
    <div className="overflow-hidden">
      <div className="ticker relative" ref={containerRef}>
        <div className="ticker-track" ref={contentRef}>
          {Array.from({ length: copies }).map((_, copyIdx) => (
            items.map((c) => (
              <span key={`a-${copyIdx}-${c.id}`} className="ticker-item">
                “{c.message}” — {c.name || "Anônimo"}
              </span>
            ))
          ))}
        </div>
        <div className="ticker-track ticker-track-2" aria-hidden="true">
          {Array.from({ length: copies }).map((_, copyIdx) => (
            items.map((c) => (
              <span key={`b-${copyIdx}-${c.id}`} className="ticker-item">
                “{c.message}” — {c.name || "Anônimo"}
              </span>
            ))
          ))}
        </div>
      </div>
    </div>
  );
}