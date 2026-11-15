/**
 * The campaign record: one row per problem the AI Scientist Team has been pointed at.
 *
 * Single source of truth for the homepage engine block, the research index and any
 * later portfolio view, so a new campaign is added here once rather than hand-edited
 * into each of them.
 *
 * `domain` stays deliberately generic: no target names, no collaborator names, nothing
 * that dates or discloses. `proves` is why the campaign is in the set at all, and each
 * entry proves something the others do not. `validation` names who did the measuring,
 * which is the part an external reader weighs; it describes the mode, never a claimed
 * outcome. `href` is set only once a published post exists.
 */
export interface Campaign {
  domain: string;
  proves: string;
  validation: string;
  href?: string;
}

export const campaigns: Campaign[] = [
  {
    domain: "Antibiotic peptide design",
    proves: "De novo discovery beyond known templates",
    validation: "Published benchmark",
    href: "/posts/de-novo-antimicrobial-peptides",
  },
  {
    domain: "Inhibitor design for neurodegeneration",
    proves: "Candidates taken into the laboratory",
    validation: "In-vitro, clinical collaborator",
  },
  {
    domain: "Oncology binder design",
    proves: "Recovers published top performers",
    validation: "Retrospective, published measurements",
  },
  {
    domain: "Multi-objective peptide optimization",
    proves: "Competing objectives satisfied at once",
    validation: "Published benchmark",
  },
  {
    domain: "Protein design competition",
    proves: "Epitope-selective binding, single-residue discrimination",
    validation: "Blind, externally scored",
  },
  {
    domain: "Enzyme design",
    proves: "Transfer beyond therapeutics, to catalysis",
    validation: "In-vitro, academic collaborator",
  },
];
