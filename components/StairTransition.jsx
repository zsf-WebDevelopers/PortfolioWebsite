'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Stairs from './Stairs';
const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="fixed top-0 left-0 right-0 z-40 flex w-full h-full pointer-events-none ">
            <Stairs />
          </div>
        </div>
        <motion.div
          className="top-0 left-0 right-0 flex w-full h-full pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: 'easeInOut' } }}
        />
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
