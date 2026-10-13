"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-background dark:border-white/10">
      <nav className="mx-auto flex max-w-5xl items-center gap-8 px-4 py-4">
        <Link
          href="/"
          className={`text-2xl font-medium hover:underline ${
            isActive("/") ? "underline" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/articles"
          className={`text-2xl font-medium hover:underline ${
            isActive("/articles") ? "underline" : ""
          }`}
        >
          Articles
        </Link>
      </nav>
    </header>
  );
}
