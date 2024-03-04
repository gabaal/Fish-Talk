'use client'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
    <img src="/aquarium.jpg" placeholder="blur" className="background-container"></img>
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.5 }}
    >
    <h1 className="overlay-text">Welcome to Fish Talk, the website for tropical aquariums.</h1>
    </motion.div>
    
    </div>
  );
}
