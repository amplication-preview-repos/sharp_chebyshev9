import { JsonValue } from "type-fest";
import { Transactions } from "../transactions/Transactions";

export type Properties = {
  address: string | null;
  createdAt: Date;
  id: string;
  image: JsonValue;
  imageGallery: JsonValue;
  numberOfBathrooms: number | null;
  numberOfBedrooms: number | null;
  price: number | null;
  size: number | null;
  transactionsItems?: Array<Transactions>;
  typeField?: "Option1" | null;
  updatedAt: Date;
  video: JsonValue;
};
