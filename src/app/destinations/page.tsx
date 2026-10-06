import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export default async function DestinationsPage() {
  const supabase = await createServerSupabaseClient();

  const { data: destinations, error } = await supabase
    .from("destinations")
    .select("*")
    .order("featured", { ascending: false })
    .order("name", { ascending: true });

  if (error) {
    console.error("Destinations database error:", error);

    return (
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700">
            Nigeria Tour
          </p>

          <h1 className="mt-2 text-3xl font-bold text-red-950">
            Destinations are temporarily unavailable
          </h1>

          <p className="mt-4 max-w-xl text-red-800">
            We couldn't load the destination data right now. Please try again shortly.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded-xl bg-green-800 px-5 py-3 font-semibold text-white"
          >
            Back to Nigeria Tour
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
        Nigeria Tour
      </p>

      <h1 className="mt-2 text-4xl font-bold tracking-tight">
        Destinations
      </h1>

      <p className="mt-3 max-w-2xl text-gray-600">
        Discover destinations across Nigeria.
      </p>

      {!destinations || destinations.length === 0 ? (
        <div className="mt-10 rounded-2xl border p-10 text-center">
          <h2 className="text-xl font-semibold">No destinations yet</h2>
          <p className="mt-2 text-gray-600">
            New destinations will appear here soon.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.slug}`}
              className="overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              {destination.image_url ? (
                <img
                  src={destination.image_url}
                  alt={destination.name}
                  className="h-52 w-full object-cover"
                />
              ) : (
                <div className="flex h-52 items-center justify-center bg-green-950 text-4xl font-bold text-white">
                  {destination.name.charAt(0)}
                </div>
              )}

              <div className="p-6">
                <p className="text-sm font-semibold text-green-700">
                  {destination.state}
                </p>

                <h2 className="mt-2 text-xl font-bold text-gray-900">
                  {destination.name}
                </h2>

                <p className="mt-3 line-clamp-3 text-gray-600">
                  {destination.description ||
                    "Discover more about this destination."}
                </p>

                <span className="mt-5 inline-block font-semibold text-green-700">
                  Explore destination →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
