import type { Metadata } from "next";
import { PlaceholderSection } from "@/components/ui/PlaceholderSection";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PlaceholderSection
      eyebrow="About"
      title="Why we're building ZURU TOUR"
      description="The story behind ZURU TOUR, what we're building toward, and how to get involved as a traveller, contributor, or business partner."
    />
  );
}
