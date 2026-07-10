import { useEffect } from 'react';
export function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const { overflow, paddingRight } = document.body.style;
    const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarW > 0) document.body.style.paddingRight = `${scrollbarW}px`;
    return () => { document.body.style.overflow = overflow; document.body.style.paddingRight = paddingRight; };
  }, [active]);
}
