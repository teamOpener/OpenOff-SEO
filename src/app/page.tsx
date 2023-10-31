import { Event } from '@/model/event';
import Main from '@/components/events/Main/Main';

const sampleEvent: Event = {
  title: 'OPEN OFF EVENT',
  address: '서울 강남구 언주로164길 14 1,2층(신사동)',
  dateTime: '11월 3, 5, 6, 7일 18:00',
  imgUrl: 'kk',
};

export default function Home() {
  return <Main event={sampleEvent} />;
}
