import { PlusCircleIcon } from "lucide-react";
import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const skillsData = [
  { id: 1, label: "Design & User Experience (UI/UX)" },
  { id: 2, label: "Marketing, Communication & PR" },
  { id: 3, label: "Management & Interpersonal Skills" },
  { id: 4, label: "Technical & Analytical Skills" },
  { id: 5, label: "Digital Media & Content Creation" },
  { id: 6, label: "Software & Productivity Tools" },
];

export const ProfileSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#FFF7EA] rounded-[20px] border-2 border-solid border-[#1C1C1C] overflow-hidden">
      <Tabs defaultValue="skills" className="w-full">
        <TabsList className="w-full h-auto p-5 bg-transparent rounded-none border-none grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-[5px]">
          <TabsTrigger
            value="skills"
            className="h-10 rounded-[10px] border-2 border-solid border-[#1C1C1C] data-[state=active]:bg-[#FF6B3D] data-[state=active]:text-white data-[state=inactive]:bg-[#FFF7EA] data-[state=inactive]:text-[#1C1C1C] data-[state=inactive]:border-[#3559E0] [font-family:'Futura_PT-Book',Helvetica] font-normal text-lg sm:text-xl md:text-2xl tracking-[0.48px] leading-[normal] transition-all"
            style={{
              boxShadow: "3px 3px 0 #FFD447",
            }}
          >
            Skills
          </TabsTrigger>
          <TabsTrigger
            value="projects"
            className="h-10 rounded-[10px] border-2 border-solid border-[#1C1C1C] data-[state=active]:bg-[#FF6B3D] data-[state=active]:text-white data-[state=inactive]:bg-[#FFF7EA] data-[state=inactive]:text-[#1C1C1C] data-[state=inactive]:border-[#3559E0] [font-family:'Futura_PT-Book',Helvetica] font-normal text-lg sm:text-xl md:text-2xl tracking-[0.48px] leading-[normal] transition-all"
            style={{
              boxShadow: "3px 3px 0 #FFD447",
            }}
          >
            Projects
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="h-10 rounded-[10px] border-2 border-solid border-[#1C1C1C] data-[state=active]:bg-[#FF6B3D] data-[state=active]:text-white data-[state=inactive]:bg-[#FFF7EA] data-[state=inactive]:text-[#1C1C1C] data-[state=inactive]:border-[#3559E0] [font-family:'Futura_PT-Book',Helvetica] font-normal text-lg sm:text-xl md:text-2xl tracking-[0.48px] leading-[normal] transition-all"
            style={{
              boxShadow: "3px 3px 0 #FFD447",
            }}
          >
            Education
          </TabsTrigger>
        </TabsList>

        <TabsContent value="skills" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
            {skillsData.map((skill, index) => (
              <div
                key={skill.id}
                className={`h-[68px] flex items-center justify-center gap-3 sm:gap-4 md:gap-5 px-3 sm:px-4 md:px-5 py-2.5 cursor-pointer transition-all border-2 border-dashed border-transparent hover:border-[#3559E0] hover:bg-[#F0E6FF] ${
                  index % 2 === 0 ? "bg-[#FFF7EA]" : "bg-[#F0E6FF]"
                }`}
              >
                <PlusCircleIcon className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 flex-shrink-0 text-[#1C1C1C]" />
                <div className="flex-1 flex items-center justify-center [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#1C1C1C] text-base sm:text-lg md:text-2xl tracking-[0.48px] leading-[normal] text-center">
                  {skill.label}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projects" className="mt-0">
          <div className="p-5 text-center [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#1C1C1C] text-xl sm:text-2xl bg-[#F0E6FF]">
            Projects content
          </div>
        </TabsContent>

        <TabsContent value="education" className="mt-0">
          <div className="p-5 text-center [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#1C1C1C] text-xl sm:text-2xl bg-[#F0E6FF]">
            Education content
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};
