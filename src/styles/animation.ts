import { AnimationProps } from 'framer-motion';

export const fadeIn: AnimationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.5, duration: 0.4 },
};

export const fadeInToTop: AnimationProps = {
  initial: { y: '20vh', opacity: 0.8 },
  animate: { y: 0, opacity: 1 },
  transition: { delay: 0.1, duration: 0.4 },
};
