import type { Metadata } from "next";
import { PlaceholderSection } from "@/components/ui/PlaceholderSection";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <PlaceholderSection
      eyebrow="Events"
      title="Festivals, concerts, and gatherings"
      description="What's happening and where — from cultural festivals to seasonal events across Nigeria's states."
    />
  );
}
