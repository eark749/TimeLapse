export interface CaseStudy {
  id: number;
  title: string;
  industry: string;
  summary: string;
  image: string;
  metrics: Array<{
    value: string;
    label: string;
  }>;
}