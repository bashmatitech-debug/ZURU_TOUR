import { Container } from "@/components/ui/Container";
import { Postcard } from "@/components/ui/Postcard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { destinationHighlights } from "@/lib/content";

const tones = ["forest", "ochre", "clay"] as const;

export function HighlightShelf() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Where people are headed"
          description="A first look at destinations on ZURU TOUR. More detail — hours, access, nearby stays — lands as the destination pages are built out."
        />
      </Container>

      <div className="mt-8 overflow-x-auto pb-4">
        <Container className="flex gap-5 sm:gap-6 [&>*]:shrink-0">
          {destinationHighlights.map((destination, index) => (
            <div key={destination.slug} className="w-52 sm:w-60">
              <Postcard
                label={destination.name}
                sublabel={destination.region}
                tone={tones[index % tones.length]}
              />
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">{destination.blurb}</p>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
