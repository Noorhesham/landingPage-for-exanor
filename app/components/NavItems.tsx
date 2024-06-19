import { Button } from "@/components/ui/button";
import React from "react";
const PRODUCT_CATEGORIES = ['Home', 'About', 'Pricing','Media','Blog'];
const NavItems = () => {
  return (
    <div className="flex items-center justify-center gap-4  h-full">
      {PRODUCT_CATEGORIES.map((category, i) => (
        <Button key={i} variant={ "ghost"}  className="gap-1.5 text-gray-600">
          {category}
        </Button>
      ))}
    </div>
  );
};

export default NavItems;
