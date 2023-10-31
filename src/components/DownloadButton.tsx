'use client';

import { useRef } from 'react';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import Icon from './common/Icon';

export default function DownloadButton() {
  const ref = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    // TODO
    if (!ref) return;
    if (!ref.current) return;

    try {
      const div = ref.current;
      const canvas = await html2canvas(div, { scale: 2 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, 'result.png');
        }
      });
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
  };

  return (
    <div ref={ref}>
      <button type="button" className="px-1 py-1" onClick={handleDownload}>
        <Icon name="IconDownload" className="fill-white" />
      </button>
    </div>
  );
}
