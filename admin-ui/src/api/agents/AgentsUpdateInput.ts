import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AgentsUpdateInput = {
  agency?: string | null;
  licenseNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
