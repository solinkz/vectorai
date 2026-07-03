import { useEffect } from "react";

type Options = {
  onNext: () => void;
  onPrevious: () => void;
  onFocusRemember: () => void;
  onFocusSearch: () => void;
  onReturnToList: () => void;
  onSaveContext: () => void;
  onOpenSelected: () => void;
};

export function useKeyboardShortcuts({
  onNext,
  onPrevious,
  onFocusRemember,
  onFocusSearch,
  onReturnToList,
  onSaveContext,
  onOpenSelected
}: Options) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const tagName = target?.tagName;
      const isInput = tagName === "INPUT" || tagName === "TEXTAREA";

      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        event.preventDefault();
        onSaveContext();
        return;
      }

      if (isInput) {
        if (event.key === "Escape") {
          event.preventDefault();
          onReturnToList();
        }
        return;
      }

      if (event.key === "ArrowDown" || event.key.toLowerCase() === "j") {
        event.preventDefault();
        onNext();
        return;
      }

      if (event.key === "ArrowUp" || event.key.toLowerCase() === "k") {
        event.preventDefault();
        onPrevious();
        return;
      }

      if (event.key.toLowerCase() === "r") {
        event.preventDefault();
        onFocusRemember();
        return;
      }

      if (event.key === "/") {
        event.preventDefault();
        onFocusSearch();
        return;
      }

      if (event.key === "Enter") {
        event.preventDefault();
        onOpenSelected();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    onNext,
    onPrevious,
    onFocusRemember,
    onFocusSearch,
    onReturnToList,
    onSaveContext,
    onOpenSelected
  ]);
}
