'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './BackgroundStarImage.module.scss';
import localImageLoader from '@/services/imageLoader';
import { fadeIn } from '@/styles/animation';
import stars from '../../../../public/img/stars.png';

export default function BackgroundStarImage() {
  return (
    <motion.div {...fadeIn}>
      <Image
        loader={localImageLoader}
        alt="background image"
        src={stars}
        sizes="100vw"
        className={styles.image}
        placeholder="blur"
      />
    </motion.div>
  );
}
