"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/site-config";
import BrandMark from "./BrandMark";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-forest/95 backdrop-blur border-b border-army/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <BrandMark className="h-8 aspect-[4000/625]" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-heading text-sm uppercase tracking-wide">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-papaya/90 hover:text-olive transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-papaya font-heading text-sm uppercase tracking-wide"
          aria-expanded={open}
          aria-label="Abrir menú"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-4 font-heading text-sm uppercase tracking-wide">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-papaya/90 hover:text-olive transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
