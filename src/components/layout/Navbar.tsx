"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-green-700"
        >
          ZURU TOUR
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 top-full w-full flex-col border-b bg-white p-4 md:static md:flex md:w-auto md:flex-row md:border-0 md:p-0`}
        >
          <Link href="/explore" className="px-3 py-2">
            Explore
          </Link>

          <Link href="/destinations" className="px-3 py-2">
            Destinations
          </Link>

          <Link href="/attractions" className="px-3 py-2">
            Attractions
          </Link>

          <Link href="/hotels" className="px-3 py-2">
            Hotels
          </Link>

          <Link href="/restaurants" className="px-3 py-2">
            Food
          </Link>

          <Link href="/events" className="px-3 py-2">
            Events
          </Link>

          <Link href="/login" className="px-3 py-2">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
