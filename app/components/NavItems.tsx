import { Button } from "@/components/ui/button";
import React from "react";
const NavItems = ({nav}:{nav:string[]}) => {
  return (
    <div className="flex items-center justify-center gap-4  h-full">
      {nav.map((category, i) => (
        <Button key={i} variant={ "ghost"}  className="gap-1.5 text-gray-600">
          {category}
        </Button>
      ))}
    </div>
  );
};

export default NavItems;
