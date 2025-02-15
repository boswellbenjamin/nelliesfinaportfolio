export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    year: string;
    fullDescription?: string;
    techStack?: string[];
    images?: string[];
  }
  
  export const projects: Project[] = [
    {
      id: '1',
      title: 'Project One',
      description: 'UX Research • Interface Design',
      imageUrl: '/project1.jpg',
      category: 'Mobile App',
      year: '2024',
      fullDescription: 'A detailed look at the first project...',
      techStack: ['React Native', 'Figma', 'Firebase'],
      images: ['/project1/image1.jpg', '/project1/image2.jpg']
    },
    // Add more projects here
  ];