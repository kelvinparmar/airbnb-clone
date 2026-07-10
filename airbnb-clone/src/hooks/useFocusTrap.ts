import { useEffect, type RefObject } from 'react';

export function useFocusTrap<T extends HTMLElement>(ref: RefObject<T>, active: boolean) {
  useEffect(() => {
    if (!active) return;
    const node = ref.current;
    if (!node) return;
    const prev = document.activeElement as HTMLElement | null;
    const selector =
      'a[href], area[href], button:not([disabled]), input:not([disabled]),' +
      ' select:not([disabled]), textarea:not([disabled]), iframe, object,' +
      ' embed, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]';
    const focusables = (): HTMLElement[] => {
      const nodes = node.querySelectorAll(selector) as NodeListOf<HTMLElement>;
      return Array.from(nodes).filter(
        (el: HTMLElement) => !el.hasAttribute('disabled') && el.offsetParent !== null,
      );
    };
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const list = focusables();
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    node.addEventListener('keydown', onKey);
    return () => { node.removeEventListener('keydown', onKey); prev?.focus?.(); };
  }, [ref, active]);
}
