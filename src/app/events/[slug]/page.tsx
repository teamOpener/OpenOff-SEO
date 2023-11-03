import { Metadata } from 'next';
import { fetchEvent, fetchEventIds } from '@/apis/event-instance';
import META from '@/constants/Meta';
import Main from '@/components/events/Main/Main';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = await fetchEvent(params.slug);

  return {
    title: META.TITLE,
    description: `${event.title}`,
    openGraph: {
      title: `${event.title}`,
      description: META.DESCRIPTION,
      images: [event.imageUrl],
    },
  };
}

export default async function Page({ params }: Props) {
  const event = await fetchEvent(params.slug);

  return <Main event={event} />;
}

export async function generateStaticParams() {
  const eventIds = await fetchEventIds();

  return eventIds.eventIdList.map((event) => ({
    slug: event.toString(),
  }));
}
