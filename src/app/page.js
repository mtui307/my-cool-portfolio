// src/app/page.js
"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import Footer from "@/components/Footer";

// Your Computer Science Project Data Array
const PROJECTS_DATA = [
  {
    id: 1,
    title: "Distributed Ledger Engine",
    category: "Systems / Go / gRPC",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-8"
  },
  {
    id: 2,
    title: "Autonomous CV Pipeline",
    category: "AI / Python / PyTorch",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-4 self-center"
  },
  {
    id: 3,
    title: "Quantum-Safe Chat Protocol",
    category: "Security / Rust / WASM",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-start-4 md:col-span-6"
  },
  {
    id: 4,
    title: "Real-time Analytics Indexer",
    category: "Architecture / Kafka / Elixir",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-6"
  }
];

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white p-8 md:p-16">
      
      {/* NAVIGATION BAR */}
      <nav className="flex justify-between items-center mb-24">
        <div className="font-mono text-xs tracking-widest text-gray-400">
          [ ARCHIVE // 2026 ]
        </div>
        <Link href="/about" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors cursor-none pb-1 border-b border-gray-800">
          About & Resume →
        </Link>
      </nav>

      {/* HERO SECTION WITH IMAGE SPLIT */}
      <header className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-center">
        
        {/* Left Side: Technical Typography */}
        <div className="md:col-span-7">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-xs font-mono uppercase tracking-[0.4em] text-emerald-500 mb-4"
          >
             Computer Science Graduate
          </motion.p>
          
          <div className="overflow-hidden mb-6">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none"
            >
              Engineering <br /> Intelligent <br /> Systems.
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 max-w-md text-lg leading-relaxed font-light"
          >
            Specializing in distributed systems, full-stack architecture, and machine learning integration. Designing high-throughput web applications with mathematical precision.
          </motion.p>
        </div>

        {/* Right Side: Profile Picture */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:col-span-5 h-[450px] w-full bg-gray-950 border border-gray-900 overflow-hidden relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
            alt="Profile" 
            className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
          />
          <div className="absolute bottom-4 left-4 font-mono text-[10px] text-gray-500 bg-black/50 backdrop-blur-sm px-2 py-1 border border-gray-800">
            LOC // TERMINAL_ID_01
          </div>
        </motion.div>

      </header>

      {/* SECTION LABEL */}
      <div className="border-b border-gray-900 pb-4 mb-16">
        <p className="text-xs font-mono tracking-widest text-gray-500">CAPSTONE & PRODUCTION PROJECTS</p>
      </div>

      {/* THE MASTER GRID LOOP */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 gap-x-10">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className={project.gridClass}>
            <ProjectCard 
              title={project.title} 
              category={project.category} 
              imageUrl={project.imageUrl} 
            />
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}