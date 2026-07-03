import type { ContractRecord } from "../types/contract";

export function filterContracts(contracts: ContractRecord[], query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return contracts;

  return contracts.filter((contract) =>
    [
      contract.contractName,
      contract.shortName,
      contract.vendor,
      contract.type,
      contract.risk
    ]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
}
