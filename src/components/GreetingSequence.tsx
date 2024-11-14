import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Greeting {
  text: string;
  language: string;
}

const greetings: Greeting[] = [
  { text: "नमस्ते" },
  { text: "Hello" },
  { text: "Hola" },
  { text: "Bonjour" },
  { text: "Ciao" },
  { text: "Hallo" },
  { text: "Allegra" }
];

export default function GreetingSequence({ onComplete }: { onComplete: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < greetings.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsVisible(false);
        setTimeout(onComplete, 800);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentIndex, onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
        >
          <motion.button
            onClick={handleSkip}
            className="absolute top-8 right-8 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skip
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <motion.div
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
                style={{
                  textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
              >
                {greetings[currentIndex].text}
              </motion.div>
              <motion.div
                className="text-blue-400 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
              >
                {greetings[currentIndex].language}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {greetings.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-700'
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}