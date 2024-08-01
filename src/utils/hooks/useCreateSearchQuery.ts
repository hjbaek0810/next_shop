'use client';

import { useCallback } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

const useCreateSearchQuery = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null || value === '') {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams],
  );

  const getPathQuery = useCallback(
    (name: string, value: string | null) => {
      return `${pathname}?${createQueryString(name, value)}`;
    },
    [pathname, createQueryString],
  );

  return getPathQuery;
};

export default useCreateSearchQuery;
