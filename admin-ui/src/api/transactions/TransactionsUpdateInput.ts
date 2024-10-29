import { PropertiesWhereUniqueInput } from "../properties/PropertiesWhereUniqueInput";

export type TransactionsUpdateInput = {
  amount?: number | null;
  buyer?: string | null;
  property?: PropertiesWhereUniqueInput | null;
  seller?: string | null;
  transactionDate?: Date | null;
};
