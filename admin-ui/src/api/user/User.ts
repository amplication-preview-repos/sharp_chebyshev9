import { Agents } from "../agents/Agents";
import { JsonValue } from "type-fest";

export type User = {
  agentsItems?: Array<Agents>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
