export interface Page {
    id: string;
    imageUrl: string;
    links: {
      left?: string;
      right?: string;
    };
  }