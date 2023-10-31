'use client';

import Image from 'next/image';
import cloud from '../../../../public/img/cloud.png';
import styles from './BackgroundCloudImage.module.scss';
import imageLoader from '@/utils/imageLoader';

export default function BackgroundCloudImage() {
  return (
    <Image
      loader={imageLoader}
      alt="background image"
      src={cloud}
      fill
      sizes="100vw"
      className={styles.image}
      placeholder="blur"
      priority
    />
  );
}
