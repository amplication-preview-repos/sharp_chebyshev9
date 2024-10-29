import { SortOrder } from "../../util/SortOrder";

export type ListingsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
