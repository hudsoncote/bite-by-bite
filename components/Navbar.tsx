"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/dining", label: "Dining Halls" },
  { href: "/tracker", label: "Calorie Tracker" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-300/50">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold">
          Bite by Bite
        </Link>
        <ul className="flex gap-6 text-sm">
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={
                    active ? "font-semibold" : "opacity-70 hover:opacity-100"
                  }
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}