import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AgentsCreateInput = {
  agency?: string | null;
  licenseNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
