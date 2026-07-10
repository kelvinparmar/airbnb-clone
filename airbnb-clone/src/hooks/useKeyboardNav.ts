import { useEffect } from 'react';
export function useKeyboardNav(active: boolean, handlers: { onEscape?: () => void; onLeft?: () => void; onRight?: () => void; }) {
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape': handlers.onEscape?.(); break;
        case 'ArrowLeft':  handlers.onLeft?.();  break;
        case 'ArrowRight': handlers.onRight?.(); break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, handlers]);
}
