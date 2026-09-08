import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="max-w-md">
          <p className="text-sm font-medium text-clay">404</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-display font-medium text-forest">
            This page hasn&apos;t been mapped yet.
          </h1>
          <p className="mt-4 text-ink/70 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist yet. Head back to the homepage or
            start exploring.
          </p>
          <div className="mt-8">
            <Button href="/">Back to homepage</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
