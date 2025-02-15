"use client";

import Header from '@/app/components/Header';
import React from 'react';
import { 
  Laptop,
  Timer,
  User,
  Wrench,
  ArrowRight
} from 'lucide-react';

const ProjectDetailPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Main Content */}
      <div className="relative">
        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-12">
          {/* Hero Section */}
          <div className="h-screen flex flex-col justify-center relative">
            {/* Blurred Balls */}
            <div className="absolute -left-48 top-0 w-96 h-96 rounded-full bg-blue-100 mix-blend-multiply filter blur-xl opacity-70" />
            <div className="absolute -right-24 bottom-0 w-96 h-96 rounded-full bg-purple-100 mix-blend-multiply filter blur-xl opacity-70" />
            <div className="absolute left-1/4 top-1/3 w-72 h-72 rounded-full bg-blue-50 mix-blend-multiply filter blur-xl opacity-70" />
            <div className="absolute right-1/4 bottom-1/4 w-72 h-72 rounded-full bg-purple-50 mix-blend-multiply filter blur-xl opacity-70" />
            <div className="absolute left-1/2 top-1/2 w-48 h-48 rounded-full bg-green-100 mix-blend-multiply filter blur-xl opacity-70" />
            <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-red-100 mix-blend-multiply filter blur-xl opacity-70" />
            <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-yellow-100 mix-blend-multiply filter blur-xl opacity-70" />

            <div className="max-w-4xl relative z-10">
              <p className="text-blue-600 font-medium mb-6 tracking-wide">CASE STUDY — 2025</p>
              <h1 className="text-8xl font-bold tracking-tight leading-none mb-8">
                Reimagining Digital Banking
              </h1>
              <p className="text-xl text-gray-600 max-w-xl mb-12">
                A revolutionary approach to personal banking that challenges traditional interfaces.
              </p>

              {/* Project Details Pills */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-full">
                  <User className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">Lead UX/UI Designer</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full">
                  <Laptop className="w-4 h-4 text-green-600" />
                  <span className="font-medium">iOS, Android, Web</span>
                </div>
                <div className="flex items-center gap-2 bg-yellow-50 text-yellow-800 px-4 py-2 rounded-full">
                  <Timer className="w-4 h-4 text-yellow-600" />
                  <span className="font-medium">4 months</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 text-purple-800 px-4 py-2 rounded-full">
                  <Wrench className="w-4 h-4 text-purple-600" />
                  <span className="font-medium">Figma, Principle, Framer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining sections */}
          <div className="py-24 space-y-48">
            {/* Overview Section */}
            <section className="relative">
              <span className="absolute -right-12 top-0 text-[20rem] font-black text-gray-50 leading-none -z-10">
                01
              </span>
              <div className="max-w-3xl">
                <h2 className="text-7xl font-bold mb-12 tracking-tight">Overview</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-16">
                  Through extensive research and iterative design, we crafted a banking experience
                  that puts user needs first while maintaining the robustness required for financial operations.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl group relative">
                    <img 
                      src="/api/placeholder/600/450"
                      alt="Banking interface"
                      className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-6 left-6 text-white">
                        <p className="font-medium text-lg">User Interface</p>
                        <p className="text-sm text-gray-300">Final Design</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-rows-2 gap-8">
                    <div className="bg-gray-100 rounded-xl p-8">
                      <p className="text-5xl font-bold text-blue-600 mb-2">94%</p>
                      <p className="text-gray-600">User Satisfaction Rate</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-8">
                      <p className="text-5xl font-bold text-blue-600 mb-2">45%</p>
                      <p className="text-gray-600">Time Saved on Tasks</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Remaining sections continue as before */}
            {/* Process Section */}
            <section className="relative">
              <span className="absolute -left-24 top-0 text-[20rem] font-black text-gray-50 leading-none -z-10">
                02
              </span>
              <div className="max-w-4xl ml-auto">
                <h2 className="text-7xl font-bold mb-12 tracking-tight">Process</h2>
                <div className="grid grid-cols-2 gap-24">
                  <div>
                    <div className="sticky top-32">
                      <p className="text-xl text-gray-600 leading-relaxed">
                        Our design process focused on creating intuitive interfaces while maintaining
                        the security and trust required for financial operations.
                      </p>
                      <div className="mt-12 space-y-8">
                        <div className="flex items-center gap-4 text-lg">
                          <span className="text-blue-600">01.</span>
                          <p>User Research</p>
                        </div>
                        <div className="flex items-center gap-4 text-lg">
                          <span className="text-blue-600">02.</span>
                          <p>Wireframing</p>
                        </div>
                        <div className="flex items-center gap-4 text-lg">
                          <span className="text-blue-600">03.</span>
                          <p>Visual Design</p>
                        </div>
                        <div className="flex items-center gap-4 text-lg">
                          <span className="text-blue-600">04.</span>
                          <p>Testing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-24">
                    <img 
                      src="/api/placeholder/600/800"
                      alt="Design process 1"
                      className="rounded-xl shadow-2xl"
                    />
                    <img 
                      src="/api/placeholder/600/800"
                      alt="Design process 2"
                      className="rounded-xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Solution Section */}
            <section className="relative pb-48">
              <span className="absolute -right-12 top-0 text-[20rem] font-black text-gray-50 leading-none -z-10">
                03
              </span>
              <div className="max-w-3xl">
                <h2 className="text-7xl font-bold mb-12 tracking-tight">Solution</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-16">
                  The final design delivers a seamless banking experience that prioritizes user needs
                  while maintaining robust security features.
                </p>
                <img 
                  src="/api/placeholder/1200/600"
                  alt="Final solution"
                  className="rounded-xl shadow-2xl mb-24"
                />
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Next Project</p>
                    <h3 className="text-2xl font-bold">E-Commerce Platform</h3>
                  </div>
                  <ArrowRight className="w-12 h-12 text-blue-600" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;