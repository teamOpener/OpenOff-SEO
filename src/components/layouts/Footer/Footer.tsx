'use client';

import Link from 'next/link';
import CONST from '@/constants/Constants';
import Spacing from '../../common/Spacing';
import Icon from '../../common/Icon/Icon';
import AppButton from '../AppButton/AppButton';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Spacing height={3.5} />
      <AppButton />
      <Spacing height={9} />
      <Link
        href={CONST.OFFICIAL_INSTA_LINK}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon name="IconInsta" size={25} />
      </Link>
      <Spacing height={0.5} />
      <p className={styles.insta}>{CONST.OFFICIAL_INSTA_ID}</p>
      <Spacing height={1.44} />
      <p className={styles.copyright}>{CONST.COPYRIGHT}</p>
      <Spacing height={0.25} />
      <h5 className={styles.logo}>{CONST.OPEN_OFF}</h5>
    </footer>
  );
}
