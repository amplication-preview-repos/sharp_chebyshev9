import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TransactionsListRelationFilter } from "../transactions/TransactionsListRelationFilter";

export type PropertiesWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  imageGallery?: JsonFilter;
  numberOfBathrooms?: IntNullableFilter;
  numberOfBedrooms?: IntNullableFilter;
  price?: FloatNullableFilter;
  size?: IntNullableFilter;
  transactionsItems?: TransactionsListRelationFilter;
  typeField?: "Option1";
  video?: JsonFilter;
};
