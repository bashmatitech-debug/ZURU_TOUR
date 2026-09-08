import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBand() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-start gap-6 rounded-2xl bg-forest px-8 py-12 text-paper sm:flex-row sm:items-center sm:justify-between sm:px-12">
          <div className="max-w-md">
            <h2 className="font-display text-2xl sm:text-3xl">
              Run a hotel, restaurant, or tour business?
            </h2>
            <p className="mt-3 text-paper/70 leading-relaxed">
              ZURU TOUR is built to put local businesses in front of the people looking for them.
            </p>
          </div>
          <Button href="/businesses" variant="secondary">
            Get listed
          </Button>
        </div>
      </Container>
    </section>
  );
}
