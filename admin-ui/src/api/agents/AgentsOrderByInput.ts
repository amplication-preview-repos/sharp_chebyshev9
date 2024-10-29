import { SortOrder } from "../../util/SortOrder";

export type AgentsOrderByInput = {
  agency?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  licenseNumber?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
