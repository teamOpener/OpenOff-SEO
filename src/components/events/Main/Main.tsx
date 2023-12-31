'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import ShareButton from '@/components/events/ShareButton/ShareButton';
import { Event } from '@/model/event';
import { fadeIn } from '@/styles/animation';
import styles from './Main.module.scss';
import Title from '../Title/Title';
import Ticket from '../Ticket/Ticket';
import DownloadButton from '../DownloadButton/DownloadButton';
import useDownload from './hooks/useDownload';

interface Props {
  event: Event;
}

export default function Main({ event }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { downloadTicket } = useDownload();

  // TODO
  const handleDown = async () => {
    if (!ref || !ref.current) {
      return;
    }

    ref.current.style.setProperty('background', '#191919');
    await downloadTicket(ref);
    ref.current.style.removeProperty('background');
  };

  return (
    <main className={styles.main}>
      <section ref={ref}>
        <Title />
        <Ticket event={event} />
      </section>

      <motion.section className={styles.buttons} {...fadeIn}>
        <DownloadButton onClick={handleDown} />
        <ShareButton eventIndex={event.eventId} />
      </motion.section>
    </main>
  );
}
