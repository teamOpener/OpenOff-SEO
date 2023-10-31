import CONST from '@/constants/Constants';
import styles from './Title.module.scss';

export default function Title() {
  return (
    <div className={styles.title}>
      <p>{CONST.YOU}</p>
      <p>{CONST.INVITED}</p>
    </div>
  );
}
