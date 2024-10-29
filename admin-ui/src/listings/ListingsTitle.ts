import { Listings as TListings } from "../api/listings/Listings";

export const LISTINGS_TITLE_FIELD = "id";

export const ListingsTitle = (record: TListings): string => {
  return record.id?.toString() || String(record.id);
};
