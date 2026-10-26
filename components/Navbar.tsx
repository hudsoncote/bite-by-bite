"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";

const links = [
  { href: "/dining", label: "Dining Halls" },
  { href: "/tracker", label: "Tracking" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-grey bg-white">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-main-green">
          Bite by Bite
        </Link>
        <nav>
          <ul className="flex gap-2 font-semibold text-md">
            {links.map(({ href, label }) => {
              const active = pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`rounded-xl px-4 py-2 transition-colors ${
                      active
                        ? "font-semibold text-black underline underline-offset-4"
                        : "text-black hover:bg-light-grey hover:text-black"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}