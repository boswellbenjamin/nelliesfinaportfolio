'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from '../styles/profile.module.css';

export default function ProfileImage() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angle = Math.atan2(y - centerY, x - centerX);
      const degrees = angle * (180 / Math.PI) + 90;
      
      wrapper.style.setProperty('--gradient-angle', `${degrees}deg`);
    };

    wrapper.addEventListener('mousemove', handleMouseMove);
    return () => wrapper.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="order-1 md:order-2 relative">
      <div 
        ref={wrapperRef}
        className={`w-72 h-72 relative mx-auto ${styles.profileWrapper} group`}
      >
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10" />
          <Image 
            src="/profilepic.jpg"
            alt="Nellie's portrait"
            fill
            className="object-cover rounded-full transform group-hover:scale-105 transition-all duration-700"
            priority
          />
        </div>
      </div>
      
      <div className="absolute -bottom-10 -left-0 bg-white p-3 rounded-xl shadow-xl">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-sm font-medium">Open to Opportunities</span>
        </div>
        <div className="text-sm text-gray-600">Looking for internships & collaborations</div>
      </div>
    </div>
  );
}