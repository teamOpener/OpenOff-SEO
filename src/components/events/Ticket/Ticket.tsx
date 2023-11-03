import Image from 'next/image';
import { motion } from 'framer-motion';
import { Event } from '@/model/event';
import { CardTopLine, CardRightLine, CardBottomLine } from '@/assets/icons';
import { fadeIn } from '@/styles/animation';
import styles from './Ticket.module.scss';
import { remoteImageLoader } from '@/services/imageLoader';

interface Props {
  event: Event;
}

export default function Ticket({ event }: Props) {
  return (
    <motion.section className={styles.card} {...fadeIn}>
      <CardTopLine />

      <div className={styles.inner}>
        <div className={styles.top}>
          <h4>{event.title}</h4>
        </div>

        <div className={styles.middle}>
          <div className={styles.left}>
            <div className={styles.info}>
              <p>{`${event.streetLoadAddress}${event.detailAddress}`}</p>
            </div>

            <div className={styles.info}>
              {/* TODO */}
              <p>{event.eventDateList[0].toString()}</p>
            </div>

            <Image
              loader={remoteImageLoader}
              src={event.imageUrl}
              alt="poster"
              width={288}
              height={288}
              className={styles.poster}
            />
          </div>

          <div className={styles.right}>
            <CardRightLine />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <CardBottomLine />
      </div>
    </motion.section>
  );
}
