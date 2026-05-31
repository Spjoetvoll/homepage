export interface Project {
  id: string;
  url?: string;
  codeUrl?: string;
}

export interface Technology {
  name: string;
  icon?: string;
}

export interface TechCategory {
  key: string;
  items: Technology[];
}
