import { InputJsonValue } from "../../types";
import { TransactionsCreateNestedManyWithoutPropertiesItemsInput } from "./TransactionsCreateNestedManyWithoutPropertiesItemsInput";

export type PropertiesCreateInput = {
  address?: string | null;
  image?: InputJsonValue;
  imageGallery?: InputJsonValue;
  numberOfBathrooms?: number | null;
  numberOfBedrooms?: number | null;
  price?: number | null;
  size?: number | null;
  transactionsItems?: TransactionsCreateNestedManyWithoutPropertiesItemsInput;
  typeField?: "Option1" | null;
  video?: InputJsonValue;
};
