'use client';

import Link from 'next/link';
import CONST from '@/constants/Constants';
import Spacing from './Spacing';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center pt-36">
      <Link
        href={CONST.OFFICIAL_INSTA_LINK}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon name="IconInsta" size={25} />
      </Link>
      <Spacing height={0.5} />
      <p className="font-light ">{CONST.OFFICIAL_INSTA_ID}</p>
      <Spacing height={1.44} />
      <p className="font-newyork">{CONST.COPYRIGHT}</p>
      <Spacing height={0.25} />
      <h5 className="pb-4 text-2xl font-newyork">{CONST.OPEN_OFF}</h5>
    </footer>
  );
}
