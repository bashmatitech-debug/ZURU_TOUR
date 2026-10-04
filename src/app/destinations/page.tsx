import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export default async function DestinationsPage() {
  const supabase = await createServerSupabaseClient();

  const { data: destinations, error } = await supabase
    .from("destinations")
    .select("*")
    .order("featured", { ascending: false })
    .order("name");

  if (error) {
    throw new Error("Unable to load destinations.");
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold">Destinations</h1>

      <p className="mt-3 text-gray-600">
        Discover destinations across Nigeria.
      </p>

      {destinations?.length === 0 ? (
        <div className="mt-10 rounded-2xl border p-10 text-center">
          <h2 className="text-xl font-semibold">
            No destinations yet
          </h2>

          <p className="mt-2 text-gray-600">
            New destinations will appear here soon.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations?.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.slug}`}
              className="overflow-hidden rounded-2xl border hover:shadow-lg"
            >
              {destination.image_url && (
                <img
                  src={destination.image_url}
                  alt={destination.name}
                  className="h-52 w-full object-cover"
                />
              )}

              <div className="p-5">
                <p className="text-sm text-green-700">
                  {destination.state}
                </p>

                <h2 className="mt-1 text-xl font-semibold">
                  {destination.name}
                </h2>

                <p className="mt-2 line-clamp-3 text-gray-600">
                  {destination.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
