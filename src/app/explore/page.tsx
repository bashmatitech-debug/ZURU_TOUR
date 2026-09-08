import type { Metadata } from "next";
import { PlaceholderSection } from "@/components/ui/PlaceholderSection";

export const metadata: Metadata = { title: "Explore" };

export default function ExplorePage() {
  return (
    <PlaceholderSection
      eyebrow="Explore"
      title="Browse Nigeria by mood, region, or moment"
      description="A guided way to explore — by region, by category, or by what you feel like doing — bringing destinations, culture, and businesses together in one search."
    />
  );
}
