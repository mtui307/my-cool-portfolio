// src/components/ProjectCard.js
"use client"; // <--- VERY IMPORTANT: This tells Next.js this part is interactive!
import { motion } from "framer-motion";

export default function ProjectCard({ title, category, imageUrl }) {
  return (
    <motion.div 
      /* 1. Start invisible and slightly below its position */
      initial={{ opacity: 0, y: 50 }} 
      /* 2. Animate to full opacity and original position */
      whileInView={{ opacity: 1, y: 0 }} 
      /* 3. Make the movement smooth and slightly delayed for style */
      transition={{ duration: 0.8, ease: "easeOut" }}
      /* 4. Only animate once when it comes into view */
      viewport={{ once: true }}
      
      className="group cursor-pointer border-t border-gray-800 pt-6 transition-all duration-500 hover:scale-[0.98]"
    >
      {/* The rest of the content stays exactly the same */}
      <div className="relative h-[450px] w-full overflow-hidden bg-gray-900">
        <img 
          src={imageUrl} 
          alt={title}
          className="h-full w-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000"
        />
      </div>
      
      <div className="mt-4 flex justify-between items-end">
        <div>
           <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">{category}</span>
           <h3 className="text-2xl uppercase font-black tracking-tighter mt-1">{title}</h3>
        </div>
        <div className="text-2xl font-thin text-gray-600 group-hover:text-white transition-colors">+</div>
      </div>
    </motion.div>
  );
}