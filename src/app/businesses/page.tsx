import type { Metadata } from "next";
import { PlaceholderSection } from "@/components/ui/PlaceholderSection";

export const metadata: Metadata = { title: "Businesses" };

export default function BusinessesPage() {
  return (
    <PlaceholderSection
      eyebrow="Local Businesses"
      title="Hotels, restaurants, guides, and experiences"
      description="A directory of local operators across Nigeria, and a path for businesses to get listed and reach travellers directly."
    />
  );
}
