'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          className="fixed top-0 w-full h-full pointer-events-none bg-primary"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: 'easeInOut' } }}
          exit={{ opacity: 1 }}
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
