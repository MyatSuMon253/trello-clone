import { useEffect, useRef } from "react";

export const useFocus = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return ref;
};
