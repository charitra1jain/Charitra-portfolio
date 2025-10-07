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
    <nav className="flex flex-wrap max-w-[1370px] items-center justify-center gap-[10px_10px] p-2.5 w-full bg-white rounded-[20px] overflow-hidden backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
      <h2 className="flex items-center justify-center w-[200px] h-9 [font-family:'Futura_PT-Medium',Helvetica] font-medium text-black text-4xl tracking-[0.72px] leading-9 whitespace-nowrap">
        Socials
      </h2>

      {socialLinks.map((link, index) => (
        <Button
          key={index}
          variant="ghost"
          className="inline-flex items-center gap-[26px] h-auto p-0 hover:bg-transparent"
          asChild
        >
          <a href="#" className="inline-flex items-center gap-[26px]">
            <img
              className="w-10 h-10"
              alt={`${link.name} icon`}
              src={link.icon}
            />
            <span className="flex items-center justify-center w-[200px] h-9 [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-4xl tracking-[0.72px] leading-9 whitespace-nowrap">
              {link.name}
            </span>
          </a>
        </Button>
      ))}
    </nav>
  );
};
