import { useEffect, useRef } from "react";

/**
 * Hook for storing values between component renders
 * 
 * @param {T} value
 * @returns {T} value passed on previous render
 */
export function usePrevious<T>(value: T): T {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current as T;
};
