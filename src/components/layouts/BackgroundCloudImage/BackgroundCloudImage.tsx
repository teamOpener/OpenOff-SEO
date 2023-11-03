'use client';

import Image from 'next/image';
import cloud from '../../../../public/img/cloud.png';
import styles from './BackgroundCloudImage.module.scss';
import localImageLoader from '@/services/imageLoader';

export default function BackgroundCloudImage() {
  return (
    <Image
      loader={localImageLoader}
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
