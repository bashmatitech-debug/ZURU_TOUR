import { CategoryGrid } from "@/components/home/CategoryGrid";
import { CtaBand } from "@/components/home/CtaBand";
import { Hero } from "@/components/home/Hero";
import { HighlightShelf } from "@/components/home/HighlightShelf";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HighlightShelf />
      <CategoryGrid />
      <CtaBand />
    </>
  );
}
