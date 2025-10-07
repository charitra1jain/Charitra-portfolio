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
    <Card className="w-full bg-[#FFF7EA] rounded-[20px] border-2 border-[#1C1C1C]">
      <CardContent className="p-5">
        <div className="flex items-center gap-2.5 px-2.5 py-[3px] bg-[#1C1C1C] rounded-[10px] border border-solid mb-5">
          <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-xl sm:text-2xl tracking-[0.48px] leading-[normal] py-1.5">
            Experiences
          </div>
        </div>

        {selectedIndex === null ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {experienceData.map((experience, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(index)}
                className="flex items-center gap-3 px-4 sm:px-5 py-3 bg-[#FFF7EA] rounded-[15px] border-2 border-[#1C1C1C] hover:bg-[#F0E6FF] transition-all"
                style={{
                  boxShadow: "3px 3px 0 #FFD447",
                }}
              >
                <PlusCircleIcon className="w-6 sm:w-8 h-6 sm:h-8 flex-shrink-0 text-[#1C1C1C]" />
                <div className="flex-1 text-left [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#1C1C1C] text-sm sm:text-base lg:text-lg tracking-[0.40px] leading-[normal]">
                  {experience.title}
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/3 bg-[#1C1C1C] rounded-[15px] border-2 border-white p-2">
              {experienceData.map((experience, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(index)}
                  className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-[12px] transition-all mb-1 last:mb-0 ${
                    selectedIndex === index
                      ? "bg-[#FF6B3D] text-white"
                      : "bg-transparent text-white hover:bg-white/10"
                  }`}
                  style={
                    selectedIndex === index
                      ? { boxShadow: "3px 3px 0 #FFD447" }
                      : undefined
                  }
                >
                  {selectedIndex === index ? (
                    <MinusCircleIcon className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
                  ) : (
                    <PlusCircleIcon className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
                  )}
                  <div className="flex-1 text-left [font-family:'Futura_PT-Book',Helvetica] font-normal text-sm sm:text-base tracking-[0.40px] leading-[normal]">
                    {experience.title}
                  </div>
                </button>
              ))}
            </div>

            <div 
              className="flex-1 bg-white rounded-[15px] border-2 border-[#3559E0] p-4 sm:p-6"
              style={{
                boxShadow: "4px 4px 0 rgba(53, 89, 224, 0.3)",
              }}
            >
              <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-[#1C1C1C] text-lg sm:text-xl tracking-[0.40px] leading-[normal] mb-4">
                {experienceData[selectedIndex].title}
              </div>
              <div className="space-y-3">
                {experienceData[selectedIndex].skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3"
                  >
                    <PlusCircleIcon className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0 text-[#3559E0]" />
                    <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-[#1C1C1C] text-sm sm:text-base tracking-[0.36px] leading-[normal]">
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
