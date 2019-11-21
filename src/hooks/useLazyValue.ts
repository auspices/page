import React from "react";

const ONE_REM = "16px";

export const useLazyValue = <T>(
  value: T,
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = { rootMargin: ONE_REM }
): [T | null] => {
  const [lazyValue, setLazyValue] = React.useState<typeof value | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries, observer): void => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setLazyValue(value);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return (): void => observer.disconnect();
  }, [options, ref, value]);

  return [lazyValue];
};
