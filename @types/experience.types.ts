type ExperienceType = {
  role: string;
  company: string;
  description: string[];
  dateRange: string;
  location: string;
  logoUrl: string;
  technologies: string[];
};

type ExperienceEntryProps = {
  experience: ExperienceType;
  headerRef: React.RefObject<HTMLHeadingElement>;
  headerRefs: React.RefObject<HTMLHeadingElement>[]; // Include this prop in the type definition
  showProgressBar: boolean;
  index: number;
  total: number;
};
