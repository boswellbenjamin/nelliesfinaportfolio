import Link from 'next/link';
import Image from 'next/image';
import ProjectTag from './ProjectTag';
import { Project } from '../types';

const project = {
  id: '1',
  title: 'Project Name',
  description: 'Project Description',
  imageUrl: '/project1.jpg',
  category: 'Mobile App',
  year: '2024',
  tags: [
    { text: 'Lead UX/UI Designer', color: 'blue' },
    { text: 'iOS, Android, Web', color: 'green' },
    { text: '4 months', color: 'yellow' },
    { text: 'Figma', color: 'purple' },
    { text: 'User Interviews', color: 'orange' }
  ]
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
    <div className="relative aspect-video">
      <Image 
        src={project.imageUrl} 
        alt={project.title}
        fill
        className="object-cover"
      />
    </div>
    
    <div className="p-6 space-y-4">
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <ProjectTag
            key={index}
            text={tag.text}
            color={tag.color}
          />
        ))}
      </div>
      
      <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
      
      <Link 
        href={`/projects/project${project.id}`}
        className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 mt-4 text-center text-white bg-black rounded-full hover:bg-black/90 transition-all"
      >
        View Case Study
      </Link>
    </div>
  </div>
);

const ProjectShowcase = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="uppercase tracking-wider">Some of my projects</span>
        </div>
        
        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;