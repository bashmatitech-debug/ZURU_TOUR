export type UserRole =
  | "visitor"
  | "user"
  | "business_owner"
  | "content_manager"
  | "moderator"
  | "administrator"
  | "super_admin";

export type ListingType =
  | "destination"
  | "attraction"
  | "hotel"
  | "restaurant"
  | "experience"
  | "event";

export interface Destination {
  id: string;
  name: string;
  slug: string;
  state: string;
  description: string | null;
  image_url: string | null;
  latitude: number | null;
  longitude: number | null;
  featured: boolean;
  created_at: string;
}

export interface Attraction {
  id: string;
  destination_id: string | null;
  name: string;
  slug: string;
  description: string | null;
  category: string | null;
  image_url: string | null;
  latitude: number | null;
  longitude: number | null;
  featured: boolean;
  created_at: string;
}

export interface Hotel {
  id: string;
  destination_id: string | null;
  name: string;
  slug: string;
  description: string | null;
  address: string | null;
  phone: string | null;
  image_url: string | null;
  price_level: number | null;
  created_at: string;
}

export interface Restaurant {
  id: string;
  destination_id: string | null;
  name: string;
  slug: string;
  description: string | null;
  cuisine: string | null;
  address: string | null;
  phone: string | null;
  image_url: string | null;
  created_at: string;
}

export interface Event {
  id: string;
  destination_id: string | null;
  name: string;
  slug: string;
  description: string | null;
  venue: string | null;
  start_date: string;
  end_date: string | null;
  image_url: string | null;
  created_at: string;
}

export interface Experience {
  id: string;
  destination_id: string | null;
  name: string;
  slug: string;
  description: string | null;
  category: string | null;
  image_url: string | null;
  price: number | null;
  created_at: string;
}

