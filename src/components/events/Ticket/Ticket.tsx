import Image from 'next/image';
import { Event } from '@/model/event';
import styles from './Ticket.module.scss';
import { CardTopLine, CardRightLine, CardBottomLine } from '@/assets/icons';

interface Props {
  event: Event;
}

export default function Ticket({ event }: Props) {
  return (
    <section className={styles.card}>
      <CardTopLine />

      <div className={styles.inner}>
        <div className={styles.top}>
          <h4>{event.title}</h4>
        </div>

        <div className={styles.middle}>
          <div className={styles.left}>
            <div className={styles.info}>
              <p>{event.address}</p>
            </div>

            <div className={styles.info}>
              <p>{event.dateTime}</p>
            </div>

            <Image
              src={event.imgUrl}
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
    </section>
  );
}
