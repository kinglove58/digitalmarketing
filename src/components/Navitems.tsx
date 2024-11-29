"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useState } from "react";
import Navitem from "./Navitem";

const Navitems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  return (
    <div className="flex gap-4 h-full">
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

        const isopen = i === activeIndex;
        return (
          <Navitem
            category={category}
            close={close}
            isopen={isopen}
            handleopen={handleopen}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Navitems;
