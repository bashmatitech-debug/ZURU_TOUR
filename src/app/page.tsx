import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-green-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
              Nigeria Tour
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Discover Nigeria.
              <br />
              Experience More.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-green-100">
              Discover destinations, local businesses, food, culture, events
              and unforgettable experiences across Nigeria.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/explore"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-green-900"
              >
                Explore Nigeria
              </Link>

              <Link
                href="/destinations"
                className="rounded-xl border border-white/30 px-6 py-3 font-semibold"
              >
                Discover destinations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold">Explore Nigeria</h2>

        <p className="mt-3 text-gray-600">
          Find places to visit, eat, stay and experience.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ExploreCard
            title="Destinations"
            description="Discover cities, regions and remarkable places."
            href="/destinations"
          />

          <ExploreCard
            title="Attractions"
            description="Find landmarks, natural wonders and cultural sites."
            href="/attractions"
          />

          <ExploreCard
            title="Food & Restaurants"
            description="Discover Nigerian food and local restaurants."
            href="/restaurants"
          />

          <ExploreCard
            title="Hotels"
            description="Find places to stay across Nigeria."
            href="/hotels"
          />

          <ExploreCard
            title="Events"
            description="Discover festivals, cultural events and experiences."
            href="/events"
          />

          <ExploreCard
            title="Experiences"
            description="Find things to do and local experiences."
            href="/experiences"
          />
        </div>
      </section>
    </div>
  );
}

function ExploreCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-gray-600">{description}</p>

      <span className="mt-5 inline-block font-medium text-green-700">
        Explore →
      </span>
    </Link>
  );
}
