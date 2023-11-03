import { ImageLoaderProps } from 'next/image';

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${process.env.NEXT_PUBLIC_FRONT_SERVER}${src}?w=${width}&q=${quality}`;
};

export const remoteImageLoader = ({ src }: ImageLoaderProps) => {
  return src;
};

export default imageLoader;
