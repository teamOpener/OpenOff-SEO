import Image from 'next/image';
import cloud from 'public/img/cloud.png';
import styles from './BackgroundCloudImage.module.scss';

export default function BackgroundCloudImage() {
  return (
    <Image
      alt="background image"
      src={cloud}
      fill
      sizes="100vw"
      className={styles.image}
    />
  );
}
