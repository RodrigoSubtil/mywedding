"use client";
import { useState } from "react";
import { Icon } from "@/components/ui/icon";

export function Faq({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq-list" data-reveal>
      {items.map((item, i) => (
        <div className="faq-item" key={item.question}>
          <h3>
            <button
              type="button"
              aria-expanded={open === i}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              {item.question}
              <Icon name="chevron" className="faq-chevron" />
            </button>
          </h3>
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-question-${i}`}
            hidden={open !== i}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
