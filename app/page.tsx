import Motion from "./components/Motion";
import { ThreeDCardDemo } from "./components/ThreeCardContent";
const cardData = [
  {
    text: "AI-Powered Sales Insights",
    desc: "Boost your sales with machine learning",
    img: "/neural_networks_of_the_brain.glb",
    three: true,
  },
  {
    text: "Onboard your store",
    desc: "A 3D store",
    img: "",
    three: false,
    animation: true,
    btn: true,
  },
  {
    text: "Market Intelligence",
    desc: "Gain competitive advantage with comprehensive market intelligence",
    img: "/chess_queen.glb",
    three: true,
  },
];

export default function Home() {
  return (
    <main className="w-full h-full pt-32 overflow-hidden relative min-h-screen">
      <Motion className="hidden sm:block wave right-0 -top-10 absolute w-full h-[110%]" />
      <Motion className="hidden sm:block wave2 right-0 -top-10 absolute w-full h-[110%]" />
      <Motion
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center"
      >
        <h1 className="text-center text-[#25333e] text-4xl lg:text-6xl leading-relaxed font-semibold sm:font-[500]">
          Providing intelligent <br /> solutions to businesses.
        </h1>
      </Motion>
      <div className="flex lg:flex-row flex-col items-center gap-2 sm:gap-5 justify-center px-10 sm:px-14">
        {cardData.map((card, index) => (
          <ThreeDCardDemo
            key={index}
            text={card.text}
            desc={card.desc}
            img={card.img}
            three={card.three}
            animation={card.animation}
            btn={card.btn}
            position={[-0.5, -3, -1]}
          />
        ))}
      </div>
    </main>
  );
}
