import type { ContractRecord, KnowledgeTag, RiskLevel } from "../types/contract";

const moreContracts: Array<{
  contractName: string;
  shortName: string;
  vendor: string;
  type: string;
  effectiveDate: string;
  risk: RiskLevel;
  lastReviewed: string;
  previousReviews: number;
  tag?: KnowledgeTag;
  context?: string;
  role?: string;
  author?: string;
}> = [
  {
    contractName: "Sterling SaaS Terms",
    shortName: "Sterling SaaS",
    vendor: "Sterling Cloud",
    type: "SaaS Agreement",
    effectiveDate: "02 Dec 2023",
    risk: "Medium",
    lastReviewed: "4 days ago",
    previousReviews: 3,
    tag: "Legal",
    author: "Priya S.",
    role: "Commercial Counsel",
    context: "Pricing amendment is expected next quarter. Confirm renewal notice language before signoff."
  },
  {
    contractName: "NovaWorks Statement of Work",
    shortName: "NovaWorks SOW",
    vendor: "NovaWorks Studio",
    type: "Statement of Work",
    effectiveDate: "14 Dec 2023",
    risk: "Low",
    lastReviewed: "5 days ago",
    previousReviews: 2
  },
  {
    contractName: "DataCore Data Processing Addendum",
    shortName: "DataCore DPA",
    vendor: "DataCore Labs",
    type: "Data Processing Addendum",
    effectiveDate: "04 Jan 2024",
    risk: "High",
    lastReviewed: "Yesterday",
    previousReviews: 5,
    tag: "Compliance",
    author: "Jonah R.",
    role: "Privacy Lead",
    context: "Data residency language should be reviewed against the EU processing matrix before approval."
  },
  {
    contractName: "FinEdge Services Agreement",
    shortName: "FinEdge Services",
    vendor: "FinEdge Group",
    type: "Services Agreement",
    effectiveDate: "11 Jan 2024",
    risk: "High",
    lastReviewed: "2 days ago",
    previousReviews: 6,
    tag: "Risk Alert",
    author: "Marisol D.",
    role: "Risk Manager",
    context: "Payment failure remedies are broader than our standard terms. Finance asked for legal review."
  },
  {
    contractName: "InfraCloud Hosting Agreement",
    shortName: "InfraCloud Hosting",
    vendor: "InfraCloud Networks",
    type: "Hosting Agreement",
    effectiveDate: "18 Jan 2024",
    risk: "Medium",
    lastReviewed: "1 week ago",
    previousReviews: 2
  },
  {
    contractName: "PayGate Vendor Agreement",
    shortName: "PayGate Vendor",
    vendor: "PayGate Systems",
    type: "Vendor Agreement",
    effectiveDate: "25 Jan 2024",
    risk: "High",
    lastReviewed: "3 days ago",
    previousReviews: 4,
    tag: "Operational",
    author: "Evan K.",
    role: "Procurement Lead",
    context: "Operations depends on PayGate for billing launch. Service credits should stay visible during review."
  },
  {
    contractName: "SecureID IAM Addendum",
    shortName: "SecureID Addendum",
    vendor: "SecureID",
    type: "Security Addendum",
    effectiveDate: "01 Feb 2024",
    risk: "Medium",
    lastReviewed: "2 weeks ago",
    previousReviews: 1
  },
  {
    contractName: "MarketLink Partnership Agreement",
    shortName: "MarketLink Partner",
    vendor: "MarketLink",
    type: "Partnership Agreement",
    effectiveDate: "08 Feb 2024",
    risk: "Low",
    lastReviewed: "3 weeks ago",
    previousReviews: 1,
    tag: "Strategic",
    author: "Rachel N.",
    role: "Associate GC",
    context: "Partnership supports channel expansion but does not include exclusivity."
  },
  {
    contractName: "Quantum Analytics MSA",
    shortName: "Quantum MSA",
    vendor: "Quantum Analytics",
    type: "Master Service Agreement",
    effectiveDate: "16 Feb 2024",
    risk: "Medium",
    lastReviewed: "6 days ago",
    previousReviews: 3
  },
  {
    contractName: "Northstar Consulting Order Form",
    shortName: "Northstar Order",
    vendor: "Northstar Consulting",
    type: "Order Form",
    effectiveDate: "22 Feb 2024",
    risk: "Low",
    lastReviewed: "1 month ago",
    previousReviews: 1
  },
  {
    contractName: "Evergreen Support Renewal",
    shortName: "Evergreen Renewal",
    vendor: "Evergreen Support",
    type: "Renewal Agreement",
    effectiveDate: "01 Mar 2024",
    risk: "Medium",
    lastReviewed: "4 days ago",
    previousReviews: 3,
    tag: "Legal",
    author: "Rebecca V.",
    role: "Senior Legal Counsel",
    context: "Renewal term should match the revised procurement calendar."
  },
  {
    contractName: "BrightPath Implementation SOW",
    shortName: "BrightPath SOW",
    vendor: "BrightPath",
    type: "Statement of Work",
    effectiveDate: "09 Mar 2024",
    risk: "Low",
    lastReviewed: "2 weeks ago",
    previousReviews: 2
  },
  {
    contractName: "Redwood Security Assessment",
    shortName: "Redwood Assessment",
    vendor: "Redwood Security",
    type: "Security Assessment",
    effectiveDate: "17 Mar 2024",
    risk: "High",
    lastReviewed: "Today",
    previousReviews: 5,
    tag: "Risk Alert",
    author: "Caleb M.",
    role: "Security Counsel",
    context: "Assessment report references remediation obligations that should be scoped before acceptance."
  },
  {
    contractName: "HarborPay Processing Terms",
    shortName: "HarborPay Terms",
    vendor: "HarborPay",
    type: "Payment Processing",
    effectiveDate: "22 Mar 2024",
    risk: "High",
    lastReviewed: "Yesterday",
    previousReviews: 4
  },
  {
    contractName: "Apex Facilities Lease Addendum",
    shortName: "Apex Lease",
    vendor: "Apex Facilities",
    type: "Lease Addendum",
    effectiveDate: "29 Mar 2024",
    risk: "Medium",
    lastReviewed: "1 week ago",
    previousReviews: 2,
    tag: "Operational",
    author: "Nina P.",
    role: "Risk Analyst",
    context: "Facilities requested expedited review for the satellite office opening."
  },
  {
    contractName: "Cobalt API License",
    shortName: "Cobalt API",
    vendor: "Cobalt Labs",
    type: "License Agreement",
    effectiveDate: "04 Apr 2024",
    risk: "Medium",
    lastReviewed: "2 weeks ago",
    previousReviews: 3
  },
  {
    contractName: "PulseHealth Business Associate Agreement",
    shortName: "PulseHealth BAA",
    vendor: "PulseHealth",
    type: "Business Associate Agreement",
    effectiveDate: "11 Apr 2024",
    risk: "High",
    lastReviewed: "3 days ago",
    previousReviews: 6,
    tag: "Compliance",
    author: "Maya L.",
    role: "Compliance Counsel",
    context: "HIPAA obligations require privacy signoff before any operational approval."
  },
  {
    contractName: "Silverline Integration Terms",
    shortName: "Silverline Terms",
    vendor: "Silverline Apps",
    type: "Integration Agreement",
    effectiveDate: "18 Apr 2024",
    risk: "Low",
    lastReviewed: "1 month ago",
    previousReviews: 1
  },
  {
    contractName: "Vertex Procurement Framework",
    shortName: "Vertex Framework",
    vendor: "Vertex Supply",
    type: "Procurement Framework",
    effectiveDate: "24 Apr 2024",
    risk: "Medium",
    lastReviewed: "5 days ago",
    previousReviews: 2
  },
  {
    contractName: "HelioAI Terms of Service",
    shortName: "HelioAI TOS",
    vendor: "HelioAI",
    type: "Terms of Service",
    effectiveDate: "30 Apr 2024",
    risk: "High",
    lastReviewed: "2 days ago",
    previousReviews: 4,
    tag: "Legal",
    author: "Owen H.",
    role: "Product Counsel",
    context: "Use restrictions need product counsel review before pilot expansion."
  },
  {
    contractName: "Monarch Fulfillment Agreement",
    shortName: "Monarch Fulfillment",
    vendor: "Monarch Logistics",
    type: "Fulfillment Agreement",
    effectiveDate: "06 May 2024",
    risk: "Medium",
    lastReviewed: "1 week ago",
    previousReviews: 3
  },
  {
    contractName: "LatticeWorks Support SLA",
    shortName: "LatticeWorks SLA",
    vendor: "LatticeWorks",
    type: "Service Level Agreement",
    effectiveDate: "12 May 2024",
    risk: "Low",
    lastReviewed: "3 weeks ago",
    previousReviews: 1
  },
  {
    contractName: "Cedar Data License",
    shortName: "Cedar License",
    vendor: "Cedar Intelligence",
    type: "Data License",
    effectiveDate: "19 May 2024",
    risk: "High",
    lastReviewed: "Yesterday",
    previousReviews: 5,
    tag: "Compliance",
    author: "Michael T.",
    role: "Compliance Manager",
    context: "Confirm onward transfer limits before commercial approval."
  },
  {
    contractName: "Orbit Design Services",
    shortName: "Orbit Services",
    vendor: "Orbit Design",
    type: "Services Agreement",
    effectiveDate: "25 May 2024",
    risk: "Low",
    lastReviewed: "1 month ago",
    previousReviews: 1
  },
  {
    contractName: "Pinnacle Reseller Agreement",
    shortName: "Pinnacle Reseller",
    vendor: "Pinnacle Partners",
    type: "Reseller Agreement",
    effectiveDate: "02 Jun 2024",
    risk: "Medium",
    lastReviewed: "6 days ago",
    previousReviews: 2,
    tag: "Strategic",
    author: "Kara J.",
    role: "Commercial Counsel",
    context: "Sales leadership asked that territory language remain flexible."
  },
  {
    contractName: "Beacon Monitoring Addendum",
    shortName: "Beacon Addendum",
    vendor: "BeaconOps",
    type: "Monitoring Addendum",
    effectiveDate: "09 Jun 2024",
    risk: "Medium",
    lastReviewed: "2 weeks ago",
    previousReviews: 2
  },
  {
    contractName: "Meridian Contractor Agreement",
    shortName: "Meridian Contractor",
    vendor: "Meridian Talent",
    type: "Contractor Agreement",
    effectiveDate: "15 Jun 2024",
    risk: "Low",
    lastReviewed: "3 weeks ago",
    previousReviews: 1
  },
  {
    contractName: "Summit Cloud Service Terms",
    shortName: "Summit Service Terms",
    vendor: "Summit Cloud",
    type: "Cloud Service Terms",
    effectiveDate: "21 Jun 2024",
    risk: "Medium",
    lastReviewed: "4 days ago",
    previousReviews: 3
  },
  {
    contractName: "Tandem Support Agreement",
    shortName: "Tandem Support",
    vendor: "Tandem Services",
    type: "Support Agreement",
    effectiveDate: "27 Jun 2024",
    risk: "Low",
    lastReviewed: "2 weeks ago",
    previousReviews: 1
  },
  {
    contractName: "Keystone Outsourcing MSA",
    shortName: "Keystone MSA",
    vendor: "Keystone Operations",
    type: "Master Service Agreement",
    effectiveDate: "03 Jul 2024",
    risk: "High",
    lastReviewed: "Today",
    previousReviews: 7,
    tag: "Risk Alert",
    author: "Priya S.",
    role: "Commercial Counsel",
    context: "Outsourcing scope touches regulated workflows. Keep compliance review attached to final approval."
  },
  {
    contractName: "Clearwater Telecom Terms",
    shortName: "Clearwater Terms",
    vendor: "Clearwater Telecom",
    type: "Telecom Agreement",
    effectiveDate: "10 Jul 2024",
    risk: "Medium",
    lastReviewed: "5 days ago",
    previousReviews: 2
  },
  {
    contractName: "Foundry Labs Evaluation Agreement",
    shortName: "Foundry Evaluation",
    vendor: "Foundry Labs",
    type: "Evaluation Agreement",
    effectiveDate: "16 Jul 2024",
    risk: "Low",
    lastReviewed: "1 month ago",
    previousReviews: 1
  },
  {
    contractName: "Granite Records Retention Addendum",
    shortName: "Granite Retention",
    vendor: "Granite Archive",
    type: "Records Addendum",
    effectiveDate: "23 Jul 2024",
    risk: "Medium",
    lastReviewed: "1 week ago",
    previousReviews: 2,
    tag: "Compliance",
    author: "Maya L.",
    role: "Compliance Counsel",
    context: "Retention schedule should match the updated legal hold policy."
  }
];

export const INITIAL_CONTRACTS: ContractRecord[] = [
  {
    id: "001",
    contractName: "CloudCorp Master Service Agreement",
    shortName: "CloudCorp MSA",
    vendor: "CloudCorp Systems",
    type: "Master Service Agreement",
    effectiveDate: "12 Oct 2023",
    risk: "High",
    lastReviewed: "3 days ago",
    previousReviews: 4,
    contextEntries: [
      {
        id: "ctx-001",
        contractId: "001",
        author: "Rebecca V.",
        role: "Senior Legal Counsel",
        updatedAt: "Updated 3 days ago",
        text: "Supports Project Atlas rollout. Executive leadership tracks this initiative closely. Review regulatory clauses in section 4.2.",
        tag: "Strategic",
        createdAtISO: "2026-06-30T10:00:00.000Z"
      },
      {
        id: "ctx-002",
        contractId: "001",
        author: "Michael T.",
        role: "Compliance Manager",
        updatedAt: "Updated 1 week ago",
        text: "Vendor delayed the Q2 compliance audit by three weeks. Legal should review the termination clause before approval.",
        tag: "Risk Alert",
        createdAtISO: "2026-06-24T10:00:00.000Z"
      }
    ]
  },
  {
    id: "002",
    contractName: "Atlas Vendor Agreement",
    shortName: "Atlas Vendor Agreement",
    vendor: "Atlas Logistics",
    type: "Vendor Agreement",
    effectiveDate: "05 Nov 2023",
    risk: "Medium",
    lastReviewed: "1 week ago",
    previousReviews: 2,
    contextEntries: [
      {
        id: "ctx-003",
        contractId: "002",
        author: "Nina P.",
        role: "Risk Analyst",
        updatedAt: "Updated 1 week ago",
        text: "This agreement is tied to logistics onboarding for the regional expansion program.",
        tag: "Operational",
        createdAtISO: "2026-06-25T10:00:00.000Z"
      }
    ]
  },
  {
    id: "003",
    contractName: "BlueRiver NDA",
    shortName: "BlueRiver NDA",
    vendor: "BlueRiver Tech",
    type: "NDA / IP",
    effectiveDate: "21 Nov 2023",
    risk: "Low",
    lastReviewed: "2 weeks ago",
    previousReviews: 1,
    contextEntries: []
  },
  ...moreContracts.map((contract, index) => {
    const id = String(index + 4).padStart(3, "0");
    return {
      id,
      contractName: contract.contractName,
      shortName: contract.shortName,
      vendor: contract.vendor,
      type: contract.type,
      effectiveDate: contract.effectiveDate,
      risk: contract.risk,
      lastReviewed: contract.lastReviewed,
      previousReviews: contract.previousReviews,
      contextEntries: contract.context
        ? [
            {
              id: `ctx-${id}`,
              contractId: id,
              author: contract.author ?? "VectorAI Reviewer",
              role: contract.role,
              updatedAt: `Updated ${contract.lastReviewed.toLowerCase()}`,
              text: contract.context,
              tag: contract.tag,
              createdAtISO: "2026-06-28T10:00:00.000Z"
            }
          ]
        : []
    };
  })
];
