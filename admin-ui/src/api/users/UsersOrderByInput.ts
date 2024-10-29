import { SortOrder } from "../../util/SortOrder";

export type UsersOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
