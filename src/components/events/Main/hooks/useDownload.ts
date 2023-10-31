import { RefObject } from 'react';
import downloadFile from '@/services/fileDownload';

// TODO
export default function useDownload() {
  const downloadTicket = async (ref: RefObject<HTMLDivElement>) => {
    if (!ref) return;
    if (!ref.current) return;

    await downloadFile(ref, 'event');
  };

  return { downloadTicket };
}
