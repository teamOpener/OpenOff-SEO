'use client';

import Link from 'next/link';
import CONST from '@/constants/Constants';

export default function AppButton() {
  return (
    <Link href={CONST.APP_STORE_LINK} rel="noopener noreferrer" target="_blank">
      <button
        type="button"
        className="w-full py-3 text-xl rounded-lg bg-gradient-to-r from-gradient-100 to-gradient-200 font-newyork opacity-90 hover:opacity-80"
      >
        {CONST.JOIN_THE_EVENT}
      </button>
    </Link>
  );
}
