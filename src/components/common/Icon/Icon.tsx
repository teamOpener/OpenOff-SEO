'use client';

import * as Icons from '@/assets/icons';
import styles from './Icon.module.scss';

type IconProps = {
  name: keyof typeof Icons;
  className?: string;
  size?: number;
};

const Icon = ({ name, className, size = 20 }: IconProps) => {
  const CustomIcon = Icons[name];

  return (
    <CustomIcon
      className={`${styles.icon} ${className}`}
      width={size}
      height={size}
    />
  );
};

export default Icon;
