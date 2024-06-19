"use client";
import React from "react";
import { motion } from "framer-motion";

const Motion = ({
  children,
  className,
  initial,
  animate,
  transition,
}: {
  children?: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
}) => {
  return (
    <motion.div
      className={className}
      initial={initial||{ opacity: 0, y: 20 }}
      animate={animate||{ opacity: 1, y: 1 }}
      transition={transition||{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
