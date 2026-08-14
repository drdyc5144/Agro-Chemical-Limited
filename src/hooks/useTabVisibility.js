import { useEffect, useState } from "react";

/**
 * Custom hook to detect when user returns to the tab
 * @returns {Object} { isVisible, wasHidden }
 */
export const useTabVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [wasHidden, setWasHidden] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setWasHidden(true);
        setIsVisible(false);
      } else {
        setIsVisible(true);
        // If the tab was hidden and now visible, refresh the page
        if (wasHidden) {
          window.location.reload();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [wasHidden]);

  return { isVisible, wasHidden };
};

export default useTabVisibility;
