import React from 'react';

interface Props {
  /** rem 단위 */
  height: number;
}

export default function Spacing({ height }: Props) {
  return <div style={{ height: `${height}rem` }} />;
}
