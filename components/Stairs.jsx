import { motion } from 'framer-motion';

const variants = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};

const reverseIndex = (index) => {
  const count = 8;
  return count - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(8)].map((_, index) => (
        <motion.div
          className="relative w-full h-full bg-white"
          key={index}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.1 * reverseIndex(index) }}
        >
          {reverseIndex(index)}
        </motion.div>
      ))}
    </>
  );
};

export default Stairs;
