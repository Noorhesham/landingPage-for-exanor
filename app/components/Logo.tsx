import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className=" relative   w-24  h-full">
      <Image src={"/logo.png"} className=" absolute object-cover" width={500} height={500} alt="Logo" />
    </div>
  );
};

export default Logo;
