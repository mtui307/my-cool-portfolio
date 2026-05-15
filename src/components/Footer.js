// src/components/Footer.js
"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-gray-900 pt-16 pb-12">
      {/* Huge Call to Action */}
      <div className="mb-20 overflow-hidden">
        <motion.h2 
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[8vw] font-black uppercase leading-none tracking-tighter text-gray-200"
        >
          LET'S WORK <br /> TOGETHER.
        </motion.h2>
      </div>

      {/* Grid for Links and Info */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm">
        
        {/* Left Side: Email Contact */}
        <div className="md:col-span-6">
          <p className="text-gray-500 uppercase tracking-widest text-xs mb-2">Main Office</p>
          <a 
            href="mailto:hello@yourdomain.com" 
            className="text-xl font-bold hover:text-gray-400 transition-colors cursor-none border-b border-gray-800 pb-1"
          >
            hello@yourdomain.com
          </a>
        </div>

        {/* Right Side: Social Media Links */}
        <div className="md:col-span-6 md:text-right flex flex-col md:items-end gap-2">
          <p className="text-gray-500 uppercase tracking-widest text-xs mb-2">Connect</p>
          
          {/* We use basic motion tags to make links lift up slightly on hover */}
          <motion.a whileHover={{ x: -5 }} href="#" className="hover:text-gray-400 cursor-none transition-colors">Instagram ↗</motion.a>
          <motion.a whileHover={{ x: -5 }} href="#" className="hover:text-gray-400 cursor-none transition-colors">LinkedIn ↗</motion.a>
          <motion.a whileHover={{ x: -5 }} href="#" className="hover:text-gray-400 cursor-none transition-colors">Twitter ↗</motion.a>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-24 pt-8 border-t border-gray-900 flex justify-between items-center text-xs text-gray-600">
        <p>© 2026 YOUR NAME. ALL RIGHTS RESERVED.</p>
        <p className="font-mono">BUILT WITH NEXT.JS & FRAMER MOTION</p>
      </div>
    </footer>
  );
}