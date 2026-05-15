// src/app/about/page.js
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer"

export default function About() {
  return (
    <motion.main 
      /* Page Fade-In Animation */
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black min-h-screen text-white p-8"
    >
      {/* Navigation back to Home */}
      <nav className="flex justify-between items-center mb-32">
        <Link href="/" className="text-xl font-bold tracking-tighter italic cursor-none">
          ← BACK TO HOME
        </Link>
      </nav>

      {/* Grid Layout for About Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <h1 className="text-6xl font-black uppercase leading-none tracking-tighter mb-8">
            The Lens <br /> Behind The <br /> Canvas
          </h1>
        </div>

        <div className="md:col-span-6 md:col-start-7 text-gray-400 space-y-6 text-lg leading-relaxed">
          <p>
            I am a visual storyteller specializing in minimalist landscapes and urban geometry. 
            My work captures the silent spaces between movements, finding stillness in chaos.
          </p>
          <p>
            Inspired by architectural lines and natural lighting gradients, this space serves 
            as an archive of moments frozen in time.
          </p>
          
          <div className="pt-8 border-t border-gray-800">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Capabilities</p>
            <p className="text-white font-mono text-sm">Art Direction / Editorial Photography / Digital Post-Processing</p>
          </div>
        </div>
      </div>
      <Footer/>
    </motion.main>
  );
}