import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { primaryNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="border-b border-mist bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80 sticky top-0 z-40">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          <Link href="/" className="font-display text-xl font-medium text-forest">
            {siteConfig.name}
          </Link>

          <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-forest"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
