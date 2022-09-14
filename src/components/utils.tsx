import { useState, useEffect } from 'react'

const useIsInViewport = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  let observer = null;

  useEffect(() => {
    observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting),
    )
  }, []);

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};

export default useIsInViewport;