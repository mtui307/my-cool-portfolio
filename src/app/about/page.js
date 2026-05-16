// src/app/about/page.js
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black min-h-screen text-white p-8 md:p-16"
    >
      <nav className="mb-24">
        <Link href="/" className="text-xs font-mono tracking-widest text-gray-400 hover:text-white cursor-none">
          ← RETURN_TO_DASHBOARD
        </Link>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Academic Statement */}
        <div className="md:col-span-5">
          <h1 className="text-5xl font-black uppercase tracking-tighter leading-none mb-6">
            EDUCATION & <br /> CORE STACK
          </h1>
          <p className="font-mono text-emerald-500 text-sm mb-4"> B.S. in Computer Science</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Focused on algorithmic complexity, database operating systems, and distributed software engineering methodologies. 
          </p>
        </div>

        {/* Technical Competencies Breakdown */}
        <div className="md:col-span-6 md:col-start-7 space-y-12">
          
          {/* Tech Domain 1 */}
          <div className="border-t border-gray-900 pt-6">
            <span className="text-xs font-mono text-gray-500">01 / LANGUAGES & FRAMEWORKS</span>
            <p className="text-xl font-bold mt-2">TypeScript, Go, Rust, Python, Next.js, React, Node.js</p>
          </div>

          {/* Tech Domain 2 */}
          <div className="border-t border-gray-900 pt-6">
            <span className="text-xs font-mono text-gray-500">02 / INFRASTRUCTURE & DATABASES</span>
            <p className="text-xl font-bold mt-2">Docker, AWS, PostgreSQL, Redis, Apache Kafka, GraphQL</p>
          </div>

          {/* Tech Domain 3 */}
          <div className="border-t border-gray-900 pt-6">
            <span className="text-xs font-mono text-gray-500">03 / ACADEMIC FOCUS AREAS</span>
            <p className="text-xl font-bold mt-2">Data Structures & Algorithms, Distributed Systems, Object-Oriented Design</p>
          </div>

        </div>
      </div>

      <Footer />
    </motion.main>
  );
}