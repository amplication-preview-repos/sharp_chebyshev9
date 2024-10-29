import { PropertiesWhereUniqueInput } from "../properties/PropertiesWhereUniqueInput";

export type TransactionsCreateInput = {
  amount?: number | null;
  buyer?: string | null;
  property?: PropertiesWhereUniqueInput | null;
  seller?: string | null;
  transactionDate?: Date | null;
};
