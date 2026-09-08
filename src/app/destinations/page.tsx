import type { Metadata } from "next";
import { PlaceholderSection } from "@/components/ui/PlaceholderSection";

export const metadata: Metadata = { title: "Destinations" };

export default function DestinationsPage() {
  return (
    <PlaceholderSection
      eyebrow="Destinations"
      title="Nigeria's landmarks, nature, and heritage sites"
      description="A full directory of destinations across Nigeria's states — with details on access, best time to visit, and what's nearby."
    />
  );
}
