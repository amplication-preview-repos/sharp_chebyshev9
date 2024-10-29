import { Agents as TAgents } from "../api/agents/Agents";

export const AGENTS_TITLE_FIELD = "agency";

export const AgentsTitle = (record: TAgents): string => {
  return record.agency?.toString() || String(record.id);
};
