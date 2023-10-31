import Image from 'next/image';
import stars from 'public/img/stars.png';
import styles from './BackgroundStarImage.module.scss';

export default function BackgroundStarImage() {
  return (
    <Image
      alt="background image"
      src={stars}
      sizes="100vw"
      className={styles.image}
    />
  );
}
