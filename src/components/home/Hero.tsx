import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Postcard } from "@/components/ui/Postcard";

export function Hero() {
  return (
    <section className="pt-14 pb-16 sm:pt-20 sm:pb-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium text-clay">Nigeria, up close</p>
            <h1 className="mt-4 text-4xl leading-[1.1] font-display font-medium text-forest sm:text-5xl lg:text-6xl">
              Find the Nigeria that doesn&apos;t make it into the guidebooks.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
              ZURU TOUR brings together destinations, culture, food, events, and the local
              businesses behind them — so you can explore Nigeria the way people who live here
              actually experience it.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/explore" variant="primary">
                Start exploring
              </Button>
              <Button href="/businesses" variant="ghost">
                List your business
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <Postcard
              label="Zuma Rock"
              sublabel="Niger State"
              tone="forest"
              className="translate-y-6"
            />
            <Postcard label="Lekki Coast" sublabel="Lagos State" tone="ochre" />
            <Postcard label="Osun-Osogbo" sublabel="Osun State" tone="clay" />
            <Postcard
              label="Obudu Plateau"
              sublabel="Cross River State"
              tone="forest"
              className="translate-y-6"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
