import Main from '@/components/events/Main/Main';
import { sampleEvent2 } from '@/mock/sampleEvent';

type Props = {
  params: { slug: string };
};

export default function Page({ params }: Props) {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const index = params.slug;
  return <Main event={sampleEvent2} />;
}

export async function generateStaticParams() {
  const events = [1, 2, 3, 4, 5];

  return events.map((event) => ({
    slug: event.toString(),
  }));
}
