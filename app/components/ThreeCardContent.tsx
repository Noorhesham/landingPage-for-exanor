"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import Model3d from "./Model3d";
import AnimatedImage from "./AnimatedImage";
import { Button } from "@/components/ui/button";
import { ChevronRight, HandCoins } from "lucide-react";

export function ThreeDCardDemo({
  text,
  desc,
  img,
  position,
  scale,
  three,
  animation,
  btn,
  downDesc,
}: {
  text: string;
  desc?: string;
  img?: string;
  position?: [number, number, number];
  scale?: [number, number, number];
  three?: boolean;
  animation?: boolean;
  btn?: boolean;
  downDesc?: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#fffdfe] rounded-[2rem] shadow-sm relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-full max-w-[20rem] sm:w-[25rem] h-auto p-6">
        <CardItem translateZ="50" className="text-xl text-center mx-auto font-bold text-[#25333e] dark:text-white">
          {text}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-center mx-auto text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full h-44 mt-4">
          {" "}
          {/* Adjust the height */}
          {three ? (
            <Model3d scale={scale} position={position} className="w-full h-full" model={img || ""} />
          ) : animation ? (
            <AnimatedImage className=" w-72 sm:w-full" />
          ) : (
            <Image src={img || ""} alt="image" className="w-full h-full object-cover" fill />
          )}
        </CardItem>
        {btn && (
          <div className="flex  mx-auto justify-center items-center mt-20">
            <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                <span className="relative z-20 text-gray-400">
                  Get Started <br /> <span className=" text-white">For Free</span>
                </span>
                <HandCoins />
              </span>
            </button>
          </div>
        )}
        {downDesc && (
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500  flex items-center gap-2 text-left mx-auto text-sm max-w-sm my-3 dark:text-neutral-300"
          >
            {downDesc}
            <div className="bg-slate-200  p-2 rounded-2xl">
              <ChevronRight className=" text-gray-800" />
            </div>
          </CardItem>
        )}
      </CardBody>
    </CardContainer>
  );
}