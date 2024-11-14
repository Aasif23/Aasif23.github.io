import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './Navigation';
import InteractiveButton from './InteractiveButton';
import RoleRotator from './RoleRotator';

export default function Header() {
  return (
    <header className="relative bg-gray-900 text-white">
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="text-5xl lg:text-7xl font-bold mb-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gray-100">Hi, I'm</span>
              <motion.span 
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% 100%',
                  animation: 'gradient 8s linear infinite'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
                Asif
              </motion.span>
              <motion.span
                className="inline-block text-5xl lg:text-6xl"
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              >
                👋
              </motion.span>
            </motion.div>
            
            <motion.div
              className="text-2xl lg:text-3xl mb-12 flex items-center justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-gray-300">I'm a</span>
              <RoleRotator />
            </motion.div>
            
            <div className="flex gap-4 justify-center lg:justify-start">
              <InteractiveButton className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium">
                <a href="#portfolio">View Work</a>
              </InteractiveButton>
              <InteractiveButton className="px-8 py-4 border border-gray-700 hover:border-gray-600 rounded-lg text-lg font-medium">
                <a href="#contact">Contact Me</a>
              </InteractiveButton>
            </div>
          </motion.div>
          
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <div className="relative w-full h-full rounded-full border-2 border-blue-500/20 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                  alt="Portfolio Hero"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}