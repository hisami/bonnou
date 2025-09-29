"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "ホーム", href: "/" },
  { label: "機能", href: "/features" },
  { label: "料金", href: "/pricing" },
  { label: "お問い合わせ", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/85 backdrop-blur-md shadow-sm dark:bg-neutral-950/75">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight sm:text-xl"
        >
          <span className="rounded-md bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-500 px-2 py-1 text-xs font-bold uppercase text-white sm:text-sm">
            Bonnou
          </span>
          <span className="hidden text-neutral-800 dark:text-neutral-100 sm:inline">
            Mindful Productivity
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/signup"
            className="rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110"
          >
            今すぐ始める
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900"
          aria-label="メニューを開閉"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen ? (
        <div className="border-t border-white/10 bg-white/95 px-4 pb-6 pt-4 shadow-inner dark:bg-neutral-950/95 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-neutral-700 transition hover:text-neutral-900 dark:text-neutral-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/signup"
              className="rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110"
              onClick={() => setIsMenuOpen(false)}
            >
              今すぐ始める
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
