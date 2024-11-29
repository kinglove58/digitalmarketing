"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type category = (typeof PRODUCT_CATEGORIES)[number];

interface NavitemProps {
  category: category;
  close: () => void;
  handleopen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const Navitem = ({
  category,
  close,
  isOpen,
  isAnyOpen,
  handleopen,
}: NavitemProps) => {
  return (
    <div className="flex">
      <div className="relative items-center">
        <Button
          className="gap-1.5"
          onClick={handleopen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>
      {isOpen ? (
        <div
          onClick={() => close()}
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground",
            {
              "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen,
            }
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          />
          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                <div className="col-span-4 col-start-1 grid-cols-3 grid gap-x-8">
                  {category.featured.map((item) => (
                    <div
                      onClick={() => close}
                      key={item.name}
                      className="group text-base sm:text-sm"
                    >
                      <div className="relative group-hover:opacity-75 aspect-video overflow-hidden rounded-lg bg-gray-100 ">
                        <Image
                          src={item.imageSrc}
                          alt="product image icons"
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <Link
                        href={item.href}
                        className="mt-6 block font-medium text-gray-600"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1" aria-hidden="true">
                        Shop now
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navitem;
