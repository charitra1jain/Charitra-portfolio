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
    <section className="w-full bg-white rounded-[20px] border border-solid border-black overflow-hidden">
      <Tabs defaultValue="skills" className="w-full">
        <TabsList className="w-full h-auto p-5 bg-transparent rounded-none border-none grid grid-cols-3 gap-[5px]">
          <TabsTrigger
            value="skills"
            className="h-10 rounded-[10px] border border-solid border-black data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:opacity-60 data-[state=inactive]:bg-white data-[state=inactive]:text-black [font-family:'Futura_PT-Book',Helvetica] font-normal text-2xl tracking-[0.48px] leading-[normal]"
          >
            Skills
          </TabsTrigger>
          <TabsTrigger
            value="projects"
            className="h-10 rounded-[10px] border border-solid border-black data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:opacity-60 data-[state=inactive]:bg-white data-[state=inactive]:text-black [font-family:'Futura_PT-Book',Helvetica] font-normal text-2xl tracking-[0.48px] leading-[normal]"
          >
            Projects
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="h-10 rounded-[10px] border border-solid border-black data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:opacity-60 data-[state=inactive]:bg-white data-[state=inactive]:text-black [font-family:'Futura_PT-Book',Helvetica] font-normal text-2xl tracking-[0.48px] leading-[normal]"
          >
            Education
          </TabsTrigger>
        </TabsList>

        <TabsContent value="skills" className="mt-0">
          <div className="grid grid-cols-3 gap-0">
            {skillsData.map((skill) => (
              <div
                key={skill.id}
                className="h-[68px] flex items-center justify-center gap-5 px-5 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <PlusCircleIcon className="w-12 h-12 flex-shrink-0" />
                <div className="flex-1 flex items-center justify-center [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-2xl tracking-[0.48px] leading-[normal]">
                  {skill.label}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projects" className="mt-0">
          <div className="p-5 text-center [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-2xl">
            Projects content
          </div>
        </TabsContent>

        <TabsContent value="education" className="mt-0">
          <div className="p-5 text-center [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-2xl">
            Education content
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};
