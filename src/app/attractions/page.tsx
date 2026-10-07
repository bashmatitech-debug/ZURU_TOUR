import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export default async function AttractionsPage() {
  const supabase = await createServerSupabaseClient();

  const { data: attractions, error } = await supabase
    .from("Attractions")
    .select("*")
    .order("featured", { ascending: false })
    .order("name", { ascending: true });

  if (error) {
    console.error("Attractions database error:", error);

    return (
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700">
            Nigeria Tour
          </p>

          <h1 className="mt-2 text-3xl font-bold text-red-950">
            Attractions are temporarily unavailable
          </h1>

          <p className="mt-4 max-w-xl text-red-800">
            We couldn't load attraction data right now. Please try again
            shortly.
          </p>

          <Link
            href="/explore"
            className="mt-6 inline-block rounded-xl bg-green-800 px-5 py-3 font-semibold text-white"
          >
            Back to Explore
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
        Attractions
      </h1>

      <p className="mt-3 max-w-2xl text-gray-600">
        Discover landmarks, natural wonders and cultural attractions across
        Nigeria.
      </p>

      {!attractions || attractions.length === 0 ? (
        <div className="mt-10 rounded-2xl border p-10 text-center">
          <h2 className="text-xl font-semibold">
            No attractions yet
          </h2>

          <p className="mt-2 text-gray-600">
            New attractions will appear here soon.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map((attraction) => (
            <article
              key={attraction.id}
              className="overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              {attraction.image_url ? (
                <img
                  src={attraction.image_url}
                  alt={attraction.name}
                  className="h-52 w-full object-cover"
                />
              ) : (
                <div className="flex h-52 items-center justify-center bg-green-950 text-4xl font-bold text-white">
                  {attraction.name.charAt(0)}
                </div>
              )}

              <div className="p-6">
                {attraction.category && (
                  <p className="text-sm font-semibold text-green-700">
                    {attraction.category}
                  </p>
                )}

                <h2 className="mt-2 text-xl font-bold text-gray-900">
                  {attraction.name}
                </h2>

                <p className="mt-3 line-clamp-3 text-gray-600">
                  {attraction.description ||
                    "Discover more about this attraction."}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {attraction.latitude && attraction.longitude
                      ? "Location available"
                      : "Location coming soon"}
                  </span>

                  <span className="font-semibold text-green-700">
                    Explore →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
