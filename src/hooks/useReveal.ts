import { useEffect, useRef, useState } from 'react';

const REVEAL_THRESHOLD = 0.12;
const REVEAL_ROOT_MARGIN = '0px 0px -8% 0px';

export const useReveal = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: REVEAL_THRESHOLD, rootMargin: REVEAL_ROOT_MARGIN },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};
