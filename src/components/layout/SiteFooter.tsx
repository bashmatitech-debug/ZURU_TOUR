import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { primaryNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mist bg-forest text-paper">
      <Container>
        <div className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-paper/70 leading-relaxed">{siteConfig.tagline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-paper/70 transition-colors hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-paper/10 py-6">
          <p className="text-xs text-paper/50">
            © {year} {siteConfig.name}. Built for Nigeria&apos;s travellers, storytellers, and
            local businesses.
          </p>
        </div>
      </Container>
    </footer>
  );
}
