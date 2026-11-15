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

  /** Contact address for the careers and partner calls to action. */
  contactEmail: "",

  /** Social profiles. Only non-empty entries are rendered. */
  social: {
    linkedin: "",
    twitter: "",
    github: "",
  } as Record<string, string>,
};

export type Site = typeof site;
