import Image from "next/image";
import React from "react";
import { MacbookScroll } from "../Components/ui/macbook-scroll";
import Link from "next/link";
import "./heroStyle.css";
export default function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span className="text-4xl text-green-500">
            Enjoy the thrill of playing Mines without the risk—same excitement,
            zero losses!
          </span>
        }
        badge={
          <Link href="https://github.com/Rohitk131">
            <Badge
              className="h-10 w-10 transform -rotate-12 badge-class rounded-full"
              src="https://avatars.githubusercontent.com/u/113338596?v=4"
              alt="Badge"
            />
          </Link>
        }
        src="/image.png"
        showGradient={false}
      />
      <div className="mb-20 justify-center items-center flex">
        <Link href="/play">
        
        <button
          className={"group/button rounded-lg bg-white text-black mt-6"}
          
        >
          <span
            className={
              "block -translate-x-1 -translate-y-1 rounded-lg border-2 border-[#222222] bg-green-400 px-4 py-1 text-6xl font-medium tracking-tight transition-all group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0"
            }
          >
            PLAY GAME
          </span>
        </button>
        </Link>
      </div>
    </div>
  );
}
// Peerlist logo
const Badge = ({
  className,
  src,
  alt,
}: {
  className?: string;
  src: string;
  alt: string;
}) => {
  return (
    <img width="24" height="24" src={src} alt={alt} className={className} />
  );
};
