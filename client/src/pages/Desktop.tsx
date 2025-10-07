import React from "react";
import { AiAssistantSection } from "./sections/AiAssistantSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { ProfileSection } from "./sections/ProfileSection";
import { SocialLinksSection } from "./sections/SocialLinksSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen px-4 sm:px-8 lg:px-12 py-8 gap-6" 
         style={{
           background: "linear-gradient(180deg, #FFF7EA 0%, #F0E6FF 100%)",
         }}>
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1C1C1C 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative z-10 flex flex-col gap-6 max-w-[1400px] mx-auto w-full">
        <HeroSection />
        <ProfileSection />
        <ExperienceSection />
        <AiAssistantSection />
        <ContactFormSection />
        <SocialLinksSection />
      </div>
    </div>
  );
};
