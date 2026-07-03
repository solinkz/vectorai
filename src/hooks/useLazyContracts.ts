import { useCallback, useEffect, useState } from "react";

const BATCH_SIZE = 12;

export function useLazyContracts(totalCount: number) {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [loadingMore, setLoadingMore] = useState(false);

  const resetVisibleCount = useCallback(() => {
    setVisibleCount(BATCH_SIZE);
  }, []);

  const loadMore = useCallback(() => {
    setVisibleCount((current) => {
      if (current >= totalCount) return current;
      setLoadingMore(true);
      window.setTimeout(() => setLoadingMore(false), 220);
      return Math.min(current + BATCH_SIZE, totalCount);
    });
  }, [totalCount]);

  useEffect(() => {
    setVisibleCount((current) => Math.min(Math.max(current, BATCH_SIZE), totalCount || BATCH_SIZE));
  }, [totalCount]);

  return {
    visibleCount,
    hasMore: visibleCount < totalCount,
    loadingMore,
    loadMore,
    resetVisibleCount
  };
}
