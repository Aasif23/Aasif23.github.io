import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  "Data Science Enthusiast",
  "Automation Engineer",
  "Python Developer",
  "Technical Support Specialist",
  "Linux Engineer",
  "Software Developer"
];

export default function RoleRotator() {
  const [currentRole, setCurrentRole] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 lg:h-12 relative overflow-hidden w-fit min-w-[300px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentRole}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute whitespace-nowrap bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold"
          style={{
            backgroundSize: '200% 100%',
            animation: 'gradient 8s linear infinite'
          }}
        >
          {roles[currentRole]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}