'use client';

import toast, { Toaster } from 'react-hot-toast';
import CopyToClipboard from 'react-copy-to-clipboard';
import Icon from './common/Icon';

interface Props {
  eventIndex: number;
}

export default function ShareButton({ eventIndex }: Props) {
  const handleSuccessCopy = () => {
    // TODO
    toast.success('주소를 복사했습니다.', {
      style: {
        backgroundColor: '#000',
        color: '#fff',
      },
    });
  };

  return (
    <div>
      <CopyToClipboard
        text={`openoff.shop/events/${eventIndex}`}
        onCopy={handleSuccessCopy}
      >
        <button type="button" className="px-1 py-1">
          <Icon name="IconShare" className="fill-white" />
        </button>
      </CopyToClipboard>
      <Toaster position="bottom-center" />
    </div>
  );
}
