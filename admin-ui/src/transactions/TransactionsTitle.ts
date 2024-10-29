import { Transactions as TTransactions } from "../api/transactions/Transactions";

export const TRANSACTIONS_TITLE_FIELD = "buyer";

export const TransactionsTitle = (record: TTransactions): string => {
  return record.buyer?.toString() || String(record.id);
};
