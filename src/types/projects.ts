interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Sheet {
  color: string;
  quantity: number;
  width: number;
  height: number;
}

export type Sheets = Sheet[];

interface Project {
  id: string;
  name: string;
  dimensions: Dimensions;
  sheets: Sheets;
  images: string[];
}

export type Projects = Project[];
