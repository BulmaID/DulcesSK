import { cn } from "@/lib/utils";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ weight: "400", subsets: ["latin"] });

export const SliderItem = () => {
  return (
    <li
      className={cn(
        "absolute inset-0 overflow-hidden after:absolute after:w-full after:h-full after:left-0 after:bottom-0 after:bg-slider transition-all duration-500"
      )}
    >
      <div className="relative w-full h-full">
        <Image src="/imgs/headersk1.jpg" alt="Image" fill className="object-cover"></Image>
        
      </div>
      <div className="space-y-8 items-center absolute left-[25%] top-[30%] w-[500px] text-4xl max-w-[80%] z-10">
        <p className={cn("uppercase tracking-[10px] text-indigo-800 traslate-y-[30px] blur-[20px] opacity-0 animate-show-content")}>
         El toque dulce
        </p>
        <h2 className={cn(
            dancingScript.className,
            'text-[poiretOne] text-6xl text-center lg:text-8xl m-0 text-indigo-500 font-bold translate-y-[25px] blur-[20px] opacity-0 animate-show-content animation-delay-4',
            'drop-shadow-2xl'
        )}>
            para tus celebraciones
        </h2>
        <a
          href="https://wa.link/47hvan" // Replace with your link
          className="inline-flex items-center px-4 py-2 bg-teal-500 text-white rounded-3xl hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 translate-y-[25px] blur-[20px] opacity-0 animate-show-content animation-delay-6n"
        >
          Contáctanos
        </a>
      </div>
      
    </li>
  );
};
