import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

type category = (typeof PRODUCT_CATEGORIES)[number];

interface NavitemProps {
  category: category;
  close: () => void;
  handleopen: () => void;
  isopen: boolean;
  isAnyopen: boolean;
}

const Navitem = ({ category, close, isopen, isAnyopen }: NavitemProps) => {
  return (
    <div>
      <div>
        <Button>
          {category.label}
          <ChevronDown />
        </Button>
      </div>
    </div>
  );
};

export default Navitem;
