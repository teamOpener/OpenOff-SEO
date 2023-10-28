'use client';

import * as Icons from '@/assets/icons';

type IconProps = {
  name: keyof typeof Icons;
  className?: string;
  size?: number;
};

const Icon = ({
  name,
  className = 'fill-white/[.8]',
  size = 20,
}: IconProps) => {
  const CustomIcon = Icons[name];

  return (
    <CustomIcon
      className={`cursor-pointer hover:opacity-80 ${className}`}
      width={size}
      height={size}
    />
  );
};

export default Icon;
