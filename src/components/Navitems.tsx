"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import Navitem from "./Navitem";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const Navitems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));
  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleopen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const close = () => {
          setActiveIndex(null);
        };

        const isOpen = i === activeIndex;
        return (
          <Navitem
            category={category}
            close={close}
            isOpen={isOpen}
            handleopen={handleopen}
            isAnyOpen={isAnyOpen}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Navitems;
