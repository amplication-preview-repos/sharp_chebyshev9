import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AgentsWhereInput = {
  agency?: StringNullableFilter;
  id?: StringFilter;
  licenseNumber?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
