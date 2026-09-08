/**
 * Shared content types for the ZURU TOUR MVP.
 *
 * These describe the shape of content the UI expects. There is no database
 * yet — data currently comes from local constants — but keeping these types
 * in one place means the UI components won't need to change when real data
 * (CMS or database) is introduced later.
 */

export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type DestinationHighlight = {
  slug: string;
  name: string;
  region: string;
  blurb: string;
};
