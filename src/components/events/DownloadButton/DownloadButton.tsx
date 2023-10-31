'use client';

import Icon from '../../common/Icon/Icon';
import styles from './DownloadButton.module.scss';

interface Props {
  onClick: () => void;
}

export default function DownloadButton({ onClick }: Props) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <Icon name="IconDownload" />
    </button>
  );
}
