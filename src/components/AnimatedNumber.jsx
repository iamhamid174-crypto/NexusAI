import { useEffect, useMemo, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default function AnimatedNumber({
  value,
  durationMs = 900,
  start = 0,
  format,
}) {
  const shouldReduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(start);

  const formatter = useMemo(() => {
    if (typeof format === 'function') return format;
    return (n) => String(Math.round(n));
  }, [format]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setCurrent(value);
      return;
    }

    let rafId = 0;
    const from = Number.isFinite(start) ? start : 0;
    const to = Number.isFinite(value) ? value : 0;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(t);
      const next = from + (to - from) * eased;
      setCurrent(next);
      if (t < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [durationMs, shouldReduceMotion, start, value]);

  return <>{formatter(current)}</>;
}

