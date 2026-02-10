export type JobCategory =
  | "creative"
  | "entertainment"
  | "tech_business"
  | "lifestyle"
  | "public_service"
  | "fun_gamey"
  | "fan_culture";

export interface Job {
  id: string;
  label: string;
  category: JobCategory;
  visualHint: string;   // SVG icon key for scanning animation
  image: string;        // WebP path for result modal
  textTemplate: string; // Contains "{member}" placeholder
}
