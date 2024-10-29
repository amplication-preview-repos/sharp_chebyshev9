import { Properties } from "../properties/Properties";

export type Transactions = {
  amount: number | null;
  buyer: string | null;
  createdAt: Date;
  id: string;
  property?: Properties | null;
  seller: string | null;
  transactionDate: Date | null;
  updatedAt: Date;
};
