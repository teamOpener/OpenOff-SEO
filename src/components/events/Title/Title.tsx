import { motion } from 'framer-motion';
import CONST from '@/constants/Constants';
import { fadeInToTop } from '@/styles/animation';
import styles from './Title.module.scss';

export default function Title() {
  return (
    <motion.div className={styles.title} {...fadeInToTop}>
      <p>{CONST.YOU}</p>
      <p>{CONST.INVITED}</p>
    </motion.div>
  );
}
