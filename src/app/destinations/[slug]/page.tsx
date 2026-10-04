import { notFound } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const supabase = await createServerSupabaseClient();

  const { data: destination } = await supabase
    .from("destinations")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!destination) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-5xl px-6 py-16">
      {destination.image_url && (
        <img
          src={destination.image_url}
          alt={destination.name}
          className="mb-8 h-72 w-full rounded-3xl object-cover md:h-96"
        />
      )}

      <p className="font-medium text-green-700">
        {destination.state}
      </p>

      <h1 className="mt-2 text-4xl font-bold md:text-5xl">
        {destination.name}
      </h1>

      <p className="mt-6 whitespace-pre-line text-lg leading-8 text-gray-700">
        {destination.description}
      </p>
    </article>
  );
}
