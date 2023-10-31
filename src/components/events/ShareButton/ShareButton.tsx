'use client';

import { Toaster } from 'react-hot-toast';
import CopyToClipboard from 'react-copy-to-clipboard';
import CONST from '@/constants/Constants';
import Icon from '../../common/Icon/Icon';
import styles from './ShareButton.module.scss';
import useCopy from './hooks/useCopy';

interface Props {
  eventIndex: number;
}

export default function ShareButton({ eventIndex }: Props) {
  const { handleSuccessCopy } = useCopy();

  return (
    <div>
      <CopyToClipboard
        text={`${CONST.SITE_URL}/events/${eventIndex}`}
        onCopy={handleSuccessCopy}
      >
        <button type="button" className={styles.button}>
          <Icon name="IconShare" />
        </button>
      </CopyToClipboard>
      <Toaster position="bottom-center" />
    </div>
  );
}
