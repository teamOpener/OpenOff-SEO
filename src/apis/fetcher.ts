import { PromiseResponse } from '@/model/event';

const baseURL = process.env.NEXT_PUBLIC_PROD_SERVER;
const prefix = process.env.NEXT_PUBLIC_FETCH_HEADER_PREFIX ?? '';
const nonAuthenticationToken = `Bearer ${process.env.NEXT_PUBLIC_NON_AUTHENTICATION_TOKEN}`;

const fetcher = async <T>(url: string) => {
  const response = await fetch(`${baseURL}${url}`, {
    headers: { openoff: prefix, Authorization: nonAuthenticationToken },
    cache: 'force-cache', // or no-store
  });

  const data = (await response.json()) as PromiseResponse<T>;

  return (await data).data;
};

export default fetcher;
