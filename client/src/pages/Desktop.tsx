import React from "react";
import { AiAssistantSection } from "./sections/AiAssistantSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { ProfileSection } from "./sections/ProfileSection";
import { SocialLinksSection } from "./sections/SocialLinksSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-[#2b2b2b]">
      <HeroSection />
      <ProfileSection />
      <ExperienceSection />
      <AiAssistantSection />
      <ContactFormSection />
      <SocialLinksSection />
    </div>
  );
};
