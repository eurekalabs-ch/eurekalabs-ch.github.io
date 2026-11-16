/**
 * Single source of truth for site-wide facts: external URLs, contact details and
 * social profiles.
 *
 * An empty string means "we do not have this yet": the components then render
 * nothing rather than a dead control. Fill a value in here and it appears
 * everywhere it belongs.
 */

export const site = {
  name: "EurekaLabs",

  /**
   * Public URL of the Research Pilot product.
   * Empty until the product is reachable: the previous value
   * (https://www.reseatchpilot.me) was NXDOMAIN, so every "Try Research Pilot"
   * button on the site was a dead link. The corrected spelling
   * (researchpilot.me) currently serves a domain parking page.
   */
  productUrl: "",

  /**
   * Contact address for the partner and careers calls to action.
   * A role address on our own domain, which forwards via the registrar's
   * email forwarding (Namecheap eforward, see the domain's MX records).
   * Setting it here lights up the homepage CTA button and the footer contact
   * block. Post bodies are Markdown and cannot read this file, so a post that
   * closes with a call to action spells the address out; `git grep` for it
   * before changing this value.
   */
  contactEmail: "contact@eurekalabs.ch",

  /** Social profiles. Only non-empty entries are rendered. */
  social: {
    linkedin: "",
    twitter: "",
    github: "",
  } as Record<string, string>,
};

export type Site = typeof site;
