export type RiskLevel = "High" | "Medium" | "Low";

export type KnowledgeTag =
  | "Strategic"
  | "Risk Alert"
  | "Operational"
  | "Legal"
  | "Compliance";

export type KnowledgeEntry = {
  id: string;
  contractId: string;
  author: string;
  role?: string;
  updatedAt: string;
  text: string;
  tag?: KnowledgeTag;
  createdAtISO: string;
};

export type ContractRecord = {
  id: string;
  contractName: string;
  shortName: string;
  vendor: string;
  type: string;
  effectiveDate: string;
  risk: RiskLevel;
  lastReviewed: string;
  previousReviews: number;
  contextEntries: KnowledgeEntry[];
};

export type ContextDrafts = Record<string, string>;
export type StoredContextEntries = Record<string, KnowledgeEntry[]>;
