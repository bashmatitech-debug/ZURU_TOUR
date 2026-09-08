import { Container } from "./Container";

type PlaceholderSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
};

/**
 * Shared shell for routes that are scaffolded but not yet built out
 * (Explore, Destinations, Businesses, Events, About). Keeping this in one
 * place means every placeholder route stays visually consistent, and
 * swapping in real content later is a per-page change, not a redesign.
 */
export function PlaceholderSection({ eyebrow, title, description }: PlaceholderSectionProps) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-clay">{eyebrow}</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-display font-medium text-forest">
            {title}
          </h1>
          <p className="mt-4 text-ink/70 leading-relaxed">{description}</p>
          <div className="mt-10 rounded-2xl border border-mist bg-white/40 p-8">
            <p className="text-sm text-ink/60">
              This page is part of the ZURU TOUR foundation and is ready for content. It will be
              built out in the next development phase, once the page is designed against real
              destination, business, and event data.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
