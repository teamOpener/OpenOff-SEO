import { AnimationProps } from 'framer-motion';

const fadeIn: AnimationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4 },
};

export default fadeIn;
