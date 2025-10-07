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
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <Card className="w-full bg-white rounded-[20px] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] border-0">
      <CardContent className="p-5">
        <div className="flex items-center gap-2.5 px-2.5 py-[3px] bg-black rounded-[10px] border border-solid mb-5">
          <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-2xl tracking-[0.48px] leading-[normal] py-1.5">
            Experiences
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {experienceData.map((experience, index) => (
            <Card
              key={index}
              className="bg-[#e5e5e5] rounded-[20px] border-2 border-black transition-all duration-200"
            >
              <CardContent className="p-5">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleCard(index)}
                >
                  <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xl tracking-[0.40px] leading-[normal]">
                    {experience.title}
                  </div>
                  {expandedCards.has(index) ? (
                    <MinusCircleIcon className="w-8 h-8 flex-shrink-0" />
                  ) : (
                    <PlusCircleIcon className="w-8 h-8 flex-shrink-0" />
                  )}
                </div>

                {expandedCards.has(index) && (
                  <div className="mt-4 space-y-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2.5"
                      >
                        <PlusCircleIcon className="w-6 h-6 flex-shrink-0" />
                        <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-lg tracking-[0.36px] leading-[normal]">
                          {skill}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
