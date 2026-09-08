import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/lib/content";

export function CategoryGrid() {
  return (
    <section className="border-y border-mist bg-white/40 py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="One place to discover and connect"
          description="ZURU TOUR starts with discovery — helping you find places, culture, and businesses — with booking and payments coming as the platform grows."
        />

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-mist bg-mist sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.slug} className="bg-paper p-6">
              <p className="font-display text-lg text-forest">{category.name}</p>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
