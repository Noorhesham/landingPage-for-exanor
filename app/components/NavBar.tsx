"use client";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Logo from "./Logo";
import NavItems from "./NavItems";
import { buttonVariants } from "@/components/ui/button";
import PhoneNav from "./PhoneNav";
const PRODUCT_CATEGORIES: string[] = ["Home", "About", "Pricing", "Media", "Blog"];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav className={` ${isScrolled ? "bg-white" : "bg-transparent"} duration-150  fixed z-50  top-0  inset-0 h-16`}>
      <header className={` ${isScrolled ? "bg-white" : "bg-transparent"} duration-150  relative `}>
        <MaxWidthWrapper>
          <div className=" border-b pb-2 border-gray-200">
            <div className=" flex  h-16 items-center">
              {/* mobile nav */}
              <div className=" ml-4 flex ">
                <Link href={"/"}>
                  <Logo />
                </Link>
              </div>
              <div className="hidden flex-grow  lg:block  z-50">
                <NavItems nav={PRODUCT_CATEGORIES} />
              </div>
              <div className="  mr-6  lg:mr-0 ml-auto flex items-center">
                <Link
                  className={buttonVariants({
                    variant: "ghost",
                    className: "rounded-full bg-white text-gray-900 font-semibold px-5 shadow-md",
                  })}
                  href={"/signin"}
                >
                  Sign in
                </Link>
                <PhoneNav navigation={PRODUCT_CATEGORIES} />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </nav>
  );
};

export default NavBar;
