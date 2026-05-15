// src/app/page.js
"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link"; // <-- Don't forget to import this!
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white p-8">
      <header className="mb-20 flex justify-between items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-2">Portfolio 2026</p>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-7xl font-black tracking-tighter italic"
          >
            SELECTED WORKS
          </motion.h1>
        </div>

        {/* --- THE INTER-PAGE LINK --- */}
        <Link href="/about" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors cursor-none mb-2 pb-1 border-b border-gray-800">
          About Me →
        </Link>
      </header>

      {/* ... the rest of your grid code ... */}
      {/* THE MASTER GRID */}
      {/* We start with 1 column, but switch to 12 on medium screens */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 gap-x-10">
        
        {/* ROW 1: One large, one small */}
        <div className="md:col-span-8">
           <ProjectCard title="Mountain Silence" category="Nature" imageUrl="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" />
        </div>
        <div className="md:col-span-4 self-center">
           <ProjectCard title="Urban" category="City" imageUrl="https://images.unsplash.com/photo-1449824913935-59a10b8d2000" />
        </div>

        {/* ROW 2: One centered small one */}
        <div className="md:col-start-4 md:col-span-6">
           <ProjectCard title="Desert Gold" category="Adventure" imageUrl="https://images.unsplash.com/photo-1473580044384-7ba9967e16a0" />
        </div>

        {/* ROW 3: Two even ones but with different heights */}
        <div className="md:col-span-6">
           <ProjectCard title="Ocean Breath" category="Travel" imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" />
        </div>
        <div className="md:col-span-6 mt-20"> {/* This 'mt-20' offsets it vertically */}
           <ProjectCard title="The Void" category="Abstract" imageUrl="https://images.unsplash.com/photo-1550684848-fac1c5b4e853" />
        </div>

      </div>
      <Footer/>
    </main>
  );
}