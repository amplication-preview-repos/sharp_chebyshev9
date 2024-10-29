import { SortOrder } from "../../util/SortOrder";

export type TransactionsOrderByInput = {
  amount?: SortOrder;
  buyer?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  propertyId?: SortOrder;
  seller?: SortOrder;
  transactionDate?: SortOrder;
  updatedAt?: SortOrder;
};
