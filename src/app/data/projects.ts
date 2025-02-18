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
    tags?: { text: string; color: string }[];
  }
  
  export const projects: Project[] = [
    {
      id: '1',
      title: 'Project Name',
      description: 'UX Research • Interface Design',
      imageUrl: '/picpic.jpg',
      category: 'Mobile App',
      year: '2024',
      tags: [
        { text: 'Lead UX/UI Designer', color: 'blue' },
        { text: 'iOS, Android, Web', color: 'green' },
        { text: '4 months', color: 'yellow' },
        { text: 'Figma', color: 'purple' },
        { text: 'User Interviews', color: 'orange' }
      ]
    },
    // Add more projects here
  ];