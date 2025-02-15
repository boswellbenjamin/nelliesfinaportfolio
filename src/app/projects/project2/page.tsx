import Image from 'next/image';
import Link from 'next/link';

export default function Project2() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-24 md:px-6">
      <Link 
        href="/"
        className="inline-flex items-center text-gray-600 mb-8 hover:text-black transition-colors"
      >
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-bold mb-4">Project 2 Title</h1>
      
      <div className="flex gap-2 mb-8">
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
          Mobile App
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
          2024
        </span>
      </div>

      {/* Project specific content */}
    </main>
  );
}