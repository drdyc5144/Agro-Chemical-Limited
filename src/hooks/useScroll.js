import { useState, useEffect } from "react";

/**
 * Custom hook to track scroll position
 * @returns {Object} { scrollY, scrollX, isScrolled }
 */
export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;

      setScrollY(currentScrollY);
      setScrollX(currentScrollX);
      setIsScrolled(currentScrollY > 10);
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, scrollX, isScrolled };
};

export default useScroll;
