import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertiesWhereUniqueInput } from "../properties/PropertiesWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionsWhereInput = {
  amount?: FloatNullableFilter;
  buyer?: StringNullableFilter;
  id?: StringFilter;
  property?: PropertiesWhereUniqueInput;
  seller?: StringNullableFilter;
  transactionDate?: DateTimeNullableFilter;
};
