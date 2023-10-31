import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import { RefObject } from 'react';

const downloadFile = async (
  divRef: RefObject<HTMLDivElement>,
  title: string,
) => {
  // TODO
  if (!divRef) return;
  if (!divRef.current) return;

  try {
    const div = divRef.current;

    const canvas = await html2canvas(div, {
      scale: 4,
      logging: true,
      useCORS: true,
      width: 500,
      height: 1000,
      allowTaint: true,
    });
    canvas.toBlob((blob) => {
      if (blob !== null) {
        saveAs(blob, `openoff_${title}.png`);
      }
    });
  } catch (error) {
    console.error('Error converting div to image:', error);
  }
};

export default downloadFile;
