import { PlusCircleIcon, MinusCircleIcon } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const experienceData = [
  {
    title: "Design & User Experience (UI/UX)",
    skills: [
      "Marketing, Communication & PR",
      "Management & Interpersonal Skills",
      "Technical & Analytical Skills",
      "Software & Productivity Tools",
      "Digital Media & Content Creation",
    ],
  },
  {
    title: "Marketing, Communication & PR",
    skills: [
      "Design & User Experience (UI/UX)",
      "Management & Interpersonal Skills",
      "Technical & Analytical Skills",
      "Software & Productivity Tools",
      "Digital Media & Content Creation",
    ],
  },
  {
    title: "Management & Interpersonal Skills",
    skills: [
      "Design & User Experience (UI/UX)",
      "Marketing, Communication & PR",
      "Technical & Analytical Skills",
      "Software & Productivity Tools",
      "Digital Media & Content Creation",
    ],
  },
  {
    title: "Technical & Analytical Skills",
    skills: [
      "Design & User Experience (UI/UX)",
      "Marketing, Communication & PR",
      "Management & Interpersonal Skills",
      "Software & Productivity Tools",
      "Digital Media & Content Creation",
    ],
  },
  {
    title: "Software & Productivity Tools",
    skills: [
      "Design & User Experience (UI/UX)",
      "Marketing, Communication & PR",
      "Management & Interpersonal Skills",
      "Technical & Analytical Skills",
      "Digital Media & Content Creation",
    ],
  },
  {
    title: "Digital Media & Content Creation",
    skills: [
      "Design & User Experience (UI/UX)",
      "Marketing, Communication & PR",
      "Management & Interpersonal Skills",
      "Technical & Analytical Skills",
      "Software & Productivity Tools",
    ],
  },
];

export const ExperienceSection = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <Card className="w-full bg-white rounded-[20px] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] border-2 border-white">
      <CardContent className="p-5">
        <div className="flex items-center gap-2.5 px-2.5 py-[3px] bg-black rounded-[10px] border border-solid mb-5">
          <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-2xl tracking-[0.48px] leading-[normal] py-1.5">
            Experiences
          </div>
        </div>

        {selectedIndex === null ? (
          <div className="grid grid-cols-3 gap-3">
            {experienceData.map((experience, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(index)}
                className="flex items-center gap-3 px-5 py-3 bg-white rounded-[15px] border border-white hover:bg-gray-50 transition-colors"
              >
                <PlusCircleIcon className="w-8 h-8 flex-shrink-0" />
                <div className="flex-1 text-left [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-lg tracking-[0.40px] leading-[normal]">
                  {experience.title}
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex gap-4">
            <div className="w-1/3 bg-black rounded-[15px] border border-white p-2">
              {experienceData.map((experience, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(index)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] transition-all mb-1 last:mb-0 ${
                    selectedIndex === index
                      ? "bg-white text-black"
                      : "bg-transparent text-white hover:bg-white/10"
                  }`}
                >
                  {selectedIndex === index ? (
                    <MinusCircleIcon className="w-6 h-6 flex-shrink-0" />
                  ) : (
                    <PlusCircleIcon className="w-6 h-6 flex-shrink-0" />
                  )}
                  <div className="flex-1 text-left [font-family:'Futura_PT-Book',Helvetica] font-normal text-base tracking-[0.40px] leading-[normal]">
                    {experience.title}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex-1 bg-[#e5e5e5] rounded-[15px] border border-white p-6">
              <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xl tracking-[0.40px] leading-[normal] mb-4">
                {experienceData[selectedIndex].title}
              </div>
              <div className="space-y-3">
                {experienceData[selectedIndex].skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3"
                  >
                    <PlusCircleIcon className="w-6 h-6 flex-shrink-0" />
                    <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-base tracking-[0.36px] leading-[normal]">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
