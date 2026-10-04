import Link from "next/link";

const categories = [
  {
    name: "Destinations",
    description: "Cities, regions and places worth discovering.",
    href: "/destinations",
  },
  {
    name: "Attractions",
    description: "Landmarks, natural sites and cultural attractions.",
    href: "/attractions",
  },
  {
    name: "Hotels",
    description: "Places to stay across Nigeria.",
    href: "/hotels",
  },
  {
    name: "Restaurants",
    description: "Local food and restaurants.",
    href: "/restaurants",
  },
  {
    name: "Events",
    description: "What's happening across Nigeria.",
    href: "/events",
  },
  {
    name: "Experiences",
    description: "Things to do and local experiences.",
    href: "/experiences",
  },
];

export default function ExplorePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold">Explore Nigeria</h1>

      <p className="mt-4 max-w-2xl text-gray-600">
        Find places, businesses, food, culture, events and experiences.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="rounded-2xl border p-6 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">{category.name}</h2>

            <p className="mt-2 text-gray-600">
              {category.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
