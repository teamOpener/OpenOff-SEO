'use client';

import Link from 'next/link';
import CONST from '@/constants/Constants';
import styles from './AppButton.module.scss';
import Icon from '@/components/common/Icon/Icon';

interface Props {
  type: 'ios' | 'aos';
}

export default function AppButton({ type }: Props) {
  const url = type === 'ios' ? CONST.APP_STORE_LINK : CONST.PLAY_STORE_LINK;
  const icon = type === 'ios' ? 'IconAppStore' : 'IconPlayStore';

  return (
    <Link
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className={styles.link}
    >
      <button type="button" className={styles.button}>
        <Icon name={icon} />
        {CONST.JOIN_THE_EVENT}
      </button>
    </Link>
  );
}
