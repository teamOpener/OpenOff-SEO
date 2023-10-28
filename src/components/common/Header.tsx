'use client';

import CONST from '@/constants/Constants';

export default function Header() {
  return (
    <header className="flex flex-col items-center pt-24">
      <p className="text-6xl font-newyork">{CONST.YOU}</p>
      <p className="text-6xl font-newyork">{CONST.INVITED}</p>
    </header>
  );
}
