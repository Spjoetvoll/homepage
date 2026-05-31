import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useAnimateIn(margin: string = '-100px') {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: margin as `${number}px ${number}px ${number}px ${number}px` });
  return { ref, isInView };
}
