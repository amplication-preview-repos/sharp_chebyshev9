import { User } from "../user/User";

export type Agents = {
  agency: string | null;
  createdAt: Date;
  id: string;
  licenseNumber: string | null;
  updatedAt: Date;
  user?: User | null;
};
