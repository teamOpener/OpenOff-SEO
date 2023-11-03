import { Event, EventIdsResponse } from '@/model/event';
import fetcher from './fetcher';

export const fetchEvent = async (id: string): Promise<Event> => {
  const event = fetcher<Event>(`/event-instance/seo/${id}`);
  return event;
};

export const fetchEventIds = async (): Promise<EventIdsResponse> => {
  const eventIds = fetcher<EventIdsResponse>(`/event-instance/seo/ids`);
  return eventIds;
};
