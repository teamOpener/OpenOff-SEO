'use client';

import Image from 'next/image';
import stars from '../../../../public/img/stars.png';
import styles from './BackgroundStarImage.module.scss';
import imageLoader from '@/utils/imageLoader';

export default function BackgroundStarImage() {
  return (
    <Image
      loader={imageLoader}
      alt="background image"
      src={stars}
      sizes="100vw"
      className={styles.image}
      placeholder="blur"
    />
  );
}
