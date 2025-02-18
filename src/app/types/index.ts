export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  year: string;
  tags: {
    text: string;
    color: 'blue' | 'green' | 'yellow' | 'purple' | 'orange';
    icon?: string;
  }[];
}