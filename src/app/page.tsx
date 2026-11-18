
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export default async function HomePage() {
  const supabase = await createServerSupabaseClient();

  const { data: destinations, error } = await supabase
    .from("destinations")
    .select(
      "id, name, slug, state, description, image_url, featured"
    )
    .order("featured", { ascending: false })
    .order("name", { ascending: true })
    .limit(6);

  const { data: stateRecords } = await supabase
    .from("destinations")
    .select("state")
    .order("state", { ascending: true });

  const states = [
    ...new Set(
      (stateRecords || [])
        .map((item) => item.state?.trim())
        .filter((state): state is string => Boolean(state))
    ),
  ];

  const categories = [
    {
      title: "Destinations",
      description: "Discover remarkable places across Nigeria.",
      href: "/destinations",
      icon: "🌍",
    },
    {
      title: "Attractions",
      description: "Explore landmarks, nature and cultural sites.",
      href: "/attractions",
      icon: "🏞️",
    },
    {
      title: "Food & Restaurants",
      description: "Discover local food and Nigerian flavours.",
      href: "/explore",
      icon: "🍲",
    },
    {
      title: "Culture & Experiences",
      description: "Experience traditions and local adventures.",
      href: "/explore",
      icon: "🎭",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-green-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(74,222,128,0.2),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-green-300">
              Welcome to ZURU TOUR
            </p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Discover Nigeria.
              <span className="block text-green-300">
                Experience More.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-green-100">
              Explore amazing destinations, discover local businesses,
              experience Nigerian culture and find your next adventure.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/destinations"
                className="rounded-xl bg-white px-7 py-4 font-bold text-green-950 transition hover:bg-green-100"
              >
                Explore Nigeria →
              </Link>

              <Link
                href="/attractions"
                className="rounded-xl border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Discover attractions
              </Link>
            </div>

            <p className="mt-8 text-sm text-green-200">
              Discover places. Connect with people. Experience Nigeria.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/20 bg-green-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200"
                alt="Beautiful African landscape"
                className="h-72 w-full object-cover md:h-[420px]"
              />
              <div className="p-5">
                <p className="text-sm font-medium text-green-300">
                  YOUR NEXT ADVENTURE STARTS HERE
                </p>
                <p className="mt-2 text-xl font-bold">
                  Explore the beauty of Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-9">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Discover more
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-950 md:text-4xl">
            Explore Nigeria your way
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to discover and experience local Nigeria.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
            >
              <span className="text-4xl">{category.icon}</span>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {category.description}
              </p>

              <span className="mt-6 inline-block font-bold text-green-700">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                Discover somewhere new
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-950">
                Featured destinations
              </h2>
              <p className="mt-3 text-gray-600">
                Discover places waiting to be explored.
              </p>
            </div>

            <Link
              href="/destinations"
              className="font-bold text-green-700 hover:text-green-900"
            >
              View all destinations →
            </Link>
          </div>

          {error ? (
            <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="font-bold text-red-900">
                Destinations temporarily unavailable
              </h3>
              <p className="mt-2 text-sm text-red-800">
                We could not retrieve destination information.
                Please try again later.
              </p>
            </div>
          ) : !destinations || destinations.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-gray-300 p-10 text-center">
              <p className="text-3xl">🌍</p>
              <h3 className="mt-4 text-xl font-bold">
                New destinations coming soon
              </h3>
              <p className="mt-2 text-gray-600">
                Our Nigerian destination collection is growing.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {destinations.map((destination) => (
                <Link
                  key={destination.id}
                  href={`/destinations/${destination.slug}`}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {destination.image_url ? (
                    <img
                      src={destination.image_url}
                      alt={destination.name}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-56 items-center justify-center bg-green-950 text-5xl text-white">
                      🌍
                    </div>
                  )}

                  <div className="p-6">
                    <p className="text-sm font-bold text-green-700">
                      {destination.state}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-gray-950">
                      {destination.name}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-600">
                      {destination.description ||
                        "Discover this beautiful Nigerian destination."}
                    </p>

                    <span className="mt-5 inline-block font-bold text-green-700">
                      Discover destination →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* EXPLORE BY STATE */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-green-700">
          Local discovery
        </p>

        <h2 className="mt-2 text-3xl font-extrabold text-gray-950">
          Explore by state
        </h2>

        <p className="mt-3 text-gray-600">
          Discover destinations across Nigeria, one state at a time.
        </p>

        {states.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {states.map((state) => (
              <Link
                key={state}
                href="/destinations"
                className="rounded-full border border-green-200 bg-white px-5 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-800 hover:text-white"
              >
                {state}
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-gray-500">
            State discoveries will appear as destinations are added.
          </p>
        )}
      </section>

      {/* FINAL CTA */}
      <section className="bg-green-950 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          Nigeria is waiting to be discovered.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-green-100">
          Start exploring destinations, people, culture and experiences
          across Nigeria with ZURU TOUR.
        </p>

        <Link
          href="/destinations"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-green-950 transition hover:bg-green-100"
        >
          Start exploring →
        </Link>
      </section>
    </div>
  );
}

