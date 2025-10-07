import React from "react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "Linkdin",
    icon: "/figmaAssets/frame.svg",
  },
  {
    name: "Instagram",
    icon: "/figmaAssets/frame-3.svg",
  },
  {
    name: "Figma",
    icon: "/figmaAssets/frame-2.svg",
  },
  {
    name: "Pinterest",
    icon: "/figmaAssets/frame-1.svg",
  },
];

export const SocialLinksSection = (): JSX.Element => {
  return (
    <nav className="flex flex-wrap max-w-[1370px] items-center justify-center gap-[10px_10px] p-4 sm:p-6 w-full bg-[#FFF7EA] rounded-[20px] overflow-hidden border-2 border-[#1C1C1C]"
         style={{
           backgroundImage: "radial-gradient(circle, rgba(28, 28, 28, 0.02) 1px, transparent 1px)",
           backgroundSize: "20px 20px",
         }}>
      <h2 className="flex items-center justify-center w-full sm:w-[200px] h-9 [font-family:'Futura_PT-Medium',Helvetica] font-medium text-[#1C1C1C] text-3xl sm:text-4xl tracking-[0.72px] leading-9 whitespace-nowrap relative">
        Socials
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1C1C1C]"></div>
      </h2>

      {socialLinks.map((link, index) => (
        <Button
          key={index}
          variant="ghost"
          className="inline-flex items-center gap-4 sm:gap-[26px] h-auto px-4 py-2 sm:p-0 bg-transparent border-2 border-transparent rounded-[10px] hover:bg-[#F0E6FF] hover:border-[#3559E0] transition-all"
          asChild
        >
          <a href="#" className="inline-flex items-center gap-4 sm:gap-[26px]">
            <img
              className="w-8 sm:w-10 h-8 sm:h-10"
              alt={`${link.name} icon`}
              src={link.icon}
            />
            <span className="flex items-center justify-center w-auto sm:w-[200px] h-9 [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#1C1C1C] text-2xl sm:text-4xl tracking-[0.72px] leading-9 whitespace-nowrap">
              {link.name}
            </span>
          </a>
        </Button>
      ))}
    </nav>
  );
};
