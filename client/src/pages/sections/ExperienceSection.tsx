import { PlusCircleIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const experienceItems = [
  "Design & User Experience (UI/UX)",
  "Marketing, Communication & PR",
  "Management & Interpersonal Skills",
  "Technical & Analytical Skills",
  "Software & Productivity Tools",
  "Digital Media & Content Creation",
];

export const ExperienceSection = (): JSX.Element => {
  return (
    <Card className="w-full bg-white rounded-[20px] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] border-0">
      <CardContent className="p-5">
        <div className="flex items-center gap-2.5 px-2.5 py-[3px] bg-black rounded-[10px] border border-solid mb-5">
          <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-2xl tracking-[0.48px] leading-[normal] py-1.5">
            Experiences
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {experienceItems.map((item, index) => (
            <Card
              key={index}
              className="bg-[#e5e5e5] rounded-[20px] border-2 border-black"
            >
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xl tracking-[0.40px] leading-[normal]">
                    {item}
                  </div>
                  <PlusCircleIcon className="w-8 h-8 flex-shrink-0" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
