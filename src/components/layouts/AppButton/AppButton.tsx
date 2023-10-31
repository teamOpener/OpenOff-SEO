'use client';

import Link from 'next/link';
import CONST from '@/constants/Constants';
import styles from './AppButton.module.scss';

export default function AppButton() {
  return (
    <Link
      href={CONST.APP_STORE_LINK}
      rel="noopener noreferrer"
      target="_blank"
      className={styles.link}
    >
      <button type="button" className={styles.button}>
        {CONST.JOIN_THE_EVENT}
      </button>
    </Link>
  );
}
