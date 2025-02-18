import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import ProjectShowcase from './components/ProjectShowcase';
import { Project } from './types';

async function getProjects() {
  const mockProjects: Project[] = [
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
    {
      id: '2',
      title: 'Another Project',
      description: 'Product Design • User Testing',
      imageUrl: '/picpic.jpg',
      category: 'Web App',
      year: '2024',
      tags: [
        { text: 'Product Designer', color: 'blue' },
        { text: 'Web Platform', color: 'green' },
        { text: '3 months', color: 'yellow' }
      ]
    },
    {
      id: '3',
      title: 'Third Project',
      description: 'UI Design • Development',
      imageUrl: '/picpic.jpg',
      category: 'Desktop App',
      year: '2023',
      tags: [
        { text: 'UI Designer', color: 'blue' },
        { text: 'Desktop App', color: 'green' },
        { text: '2 months', color: 'yellow' }
      ]
    }
  ];
  
  return mockProjects;
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-violet-600"></div>
                  <span className="text-sm font-medium text-violet-600">UX/UI Designer</span>
                  <div className="h-px w-12 bg-violet-600"></div>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-black inline-block text-transparent bg-clip-text">
                  Creating digital experiences with purpose
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Hi, I&apos;m Nellie. I craft user-centered digital solutions that blend beauty with functionality. Currently designing products that make a difference.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  <Link 
                    href="#work" 
                    className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-300"
                  >
                    View My Work
                    <svg 
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                  <Link 
                    href="/process" 
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-violet-200 text-violet-600 rounded-full hover:bg-violet-50 hover:border-violet-300 transition-all duration-300"
                  >
                    My Process
                  </Link>
                </div>
              </div>

              <div className="order-1 md:order-2 relative">
                <div className="w-72 h-72 relative rounded-full overflow-hidden mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10"></div>
                  <img 
                    src="/profilepic.jpg"
                    alt="Nellie's portrait"
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-10 -left-0 bg-white p-3 rounded-xl shadow-xl">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium">Open to Opportunities</span>
                  </div>
                  <div className="text-sm text-gray-600">Looking for internships & collaborations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Showcase Section */}
        <ProjectShowcase projects={projects} />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">© {new Date().getFullYear()} Nellie Farzaneh. All rights reserved.</p>
          <div className="flex gap-6 text-gray-600">
            <Link href="#" className="hover:text-black transition-colors">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
