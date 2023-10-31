import Main from '@/components/events/Main/Main';
import { Event } from '@/model/event';

const sampleEvent: Event = {
  title: 'OPEN OFF EVENT',
  address: '서울 강남구 언주로164길 14 1,2층(신사동)',
  dateTime: '11월 3, 5, 6, 7일 18:00',
  imgUrl:
    'https://github.com/teamOpener/OpenOff-SEO/assets/97719273/a686c96b-4464-416e-95b1-d1220a2fef04',
};

export default function Page({ params }: { params: { slug: string } }) {
  return <Main event={sampleEvent} />;
}

export async function generateStaticParams() {
  const events = [1, 2, 3, 4, 5];

  return events.map((event) => ({
    slug: event.toString(),
  }));
}
