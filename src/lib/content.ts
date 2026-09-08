import type { Category, DestinationHighlight } from "@/types";

/**
 * Placeholder content for the MVP shell. No database yet — this stands in
 * for what will eventually be fetched from a CMS or API, using the same
 * shapes defined in src/types so the swap-over is low-risk.
 */

export const destinationHighlights: DestinationHighlight[] = [
  {
    slug: "zuma-rock",
    name: "Zuma Rock",
    region: "Niger State",
    blurb: "A monolith rising from the plains, visible for miles along the Abuja–Kaduna road.",
  },
  {
    slug: "lekki-coast",
    name: "Lekki Coast",
    region: "Lagos State",
    blurb: "Beaches, boardwalks, and Lagos nightlife folded into one stretch of coastline.",
  },
  {
    slug: "osun-osogbo",
    name: "Osun-Osogbo Sacred Grove",
    region: "Osun State",
    blurb: "A UNESCO World Heritage forest shrine dedicated to the river goddess Osun.",
  },
  {
    slug: "obudu-plateau",
    name: "Obudu Mountain Resort",
    region: "Cross River State",
    blurb: "Cool highland air, cable cars, and views across the Cameroon border hills.",
  },
  {
    slug: "yankari",
    name: "Yankari National Park",
    region: "Bauchi State",
    blurb: "Warm springs and open savanna that's home to Nigeria's largest elephant population.",
  },
];

export const categories: Category[] = [
  {
    slug: "destinations",
    name: "Destinations",
    description: "Natural landmarks, heritage sites, and places worth the trip.",
  },
  {
    slug: "culture",
    name: "Culture & Food",
    description: "Festivals, cuisine, and traditions from across Nigeria's regions.",
  },
  {
    slug: "businesses",
    name: "Local Businesses",
    description: "Hotels, restaurants, guides, and experiences run by local operators.",
  },
  {
    slug: "events",
    name: "Events",
    description: "Festivals, concerts, and gatherings happening around the country.",
  },
];
