import { InputJsonValue } from "../../types";
import { TransactionsUpdateManyWithoutPropertiesItemsInput } from "./TransactionsUpdateManyWithoutPropertiesItemsInput";

export type PropertiesUpdateInput = {
  address?: string | null;
  image?: InputJsonValue;
  imageGallery?: InputJsonValue;
  numberOfBathrooms?: number | null;
  numberOfBedrooms?: number | null;
  price?: number | null;
  size?: number | null;
  transactionsItems?: TransactionsUpdateManyWithoutPropertiesItemsInput;
  typeField?: "Option1" | null;
  video?: InputJsonValue;
};
