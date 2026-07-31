"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

function Row({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[32px] bg-surface">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 p-7 text-left"
      >
        <span className="t-card-title text-white">{item.q}</span>
        <span
          className={`mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl leading-none transition-colors ${
            open ? "bg-white/8 text-white" : "bg-accent text-ink"
          }`}
          aria-hidden
        >
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="t-body px-7 pb-7 text-muted">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {items.map((item) => (
        <Row key={item.q} item={item} />
      ))}
    </div>
  );
}
