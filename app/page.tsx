import Image from "next/image";
import { ThreeDCardDemo } from "./components/ThreeCardContent";

export default function Home() {
  return (
    <main className=" w-full h-full pt-32 overflow-hidden relative min-h-screen">
      <div className=" hidden sm:block wave right-0  -top-10  absolute w-full h-[110%]"></div>
      <div className=" hidden sm:block wave2  right-0 -top-10  absolute w-full h-[110%]"></div>
      <div className="flex flex-col items-center  ">
        <h1 className=" text-center  text-[#25333e] text-4xl lg:text-6xl leading-relaxed font-semibold sm:font-[500]">
          Providing intelligent <br /> solutions to businesses.
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col items-center gap-2 sm:gap-5 justify-center px-10 sm:px-14">
        <ThreeDCardDemo
          three={true}
          position={[-0.5, -3, -1]}
          img="/neural_networks_of_the_brain.glb"
          text="AI-Powered Sales Insights"
          desc=" Boost your sales with machine learning"
        />
        <ThreeDCardDemo btn three={false} animation={true}  text="Onboard your store" desc="A 3D store" />
        <ThreeDCardDemo
          three={true}
          img="/chess_queen.glb"
          text="Market Intelligence"
          downDesc=" gain competitive advantage with (comprehensive) market intelligence"
        />
      </div>
    </main>
  );
}
