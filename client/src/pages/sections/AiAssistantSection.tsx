import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const suggestedQuestions = [
  "suggested/common questions",
  "suggested/common questions",
];

export const AiAssistantSection = (): JSX.Element => {
  return (
    <Card className="w-full bg-[#FFF7EA] rounded-[20px] border-2 border-solid border-[#1C1C1C]">
      <CardContent className="p-0">
        <div className="flex flex-col w-full items-center gap-12 sm:gap-16 lg:gap-[76px]">
          <div className="flex flex-col w-full items-center justify-center gap-5">
            <div className="flex flex-col w-full items-start gap-2.5">
              <div className="flex w-full h-auto sm:h-[87px] items-center gap-3 sm:gap-5 px-4 sm:px-5 py-4 sm:py-6 bg-[#D84315] rounded-[20px_20px_0px_0px] border-b-2 border-solid border-[#1C1C1C]">
                <img
                  className="w-10 sm:w-[61px] h-7 sm:h-[41.97px]"
                  alt="Vector"
                  src="/figmaAssets/vector.svg"
                />
                <div className="flex items-center justify-center w-auto sm:w-[212px] h-auto sm:h-[39px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-lg sm:text-2xl tracking-[0.48px] leading-[normal]">
                  Charitra&apos;s AI assistant
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row h-auto lg:h-56 items-center justify-center gap-5 w-full px-4 sm:px-0">
              <div className="flex w-full lg:w-1/2 items-start gap-2.5 pl-0 sm:pl-5 pr-0 sm:pr-[200px] py-5">
                <Avatar className="w-10 sm:w-[50px] h-10 sm:h-[50px] bg-[#F0E6FF] rounded-[25px] border-2 border-solid border-[#3559E0]" />
                <div className="flex items-center justify-center gap-2.5 p-3 sm:p-[15px] bg-white rounded-[10px] border-2 border-solid border-[#3559E0] max-w-full lg:max-w-[735px]"
                     style={{
                       boxShadow: "3px 3px 0 rgba(53, 89, 224, 0.3)",
                     }}>
                  <div className="flex items-center justify-center opacity-60 [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#1C1C1C] text-base sm:text-xl lg:text-2xl tracking-[0.48px] leading-[normal]">
                    A pre set welcome message will be generated here
                  </div>
                </div>
              </div>

              <div className="flex w-full lg:w-1/2 items-end justify-end gap-2.5 p-5">
                <div className="flex items-center justify-center gap-2.5 p-3 sm:p-[15px] bg-white rounded-[10px] border-2 border-solid border-[#3559E0] max-w-full lg:max-w-[634px]"
                     style={{
                       boxShadow: "3px 3px 0 rgba(53, 89, 224, 0.3)",
                     }}>
                  <div className="flex items-center justify-center opacity-60 [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#1C1C1C] text-base sm:text-xl lg:text-2xl tracking-[0.48px] leading-[normal]">
                    User&apos;s message and requests will be here
                  </div>
                </div>
                <Avatar className="w-10 sm:w-[50px] h-10 sm:h-[50px] bg-[#F0E6FF] rounded-[25px] border-2 border-solid border-[#3559E0] rotate-180" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 sm:px-5 py-2.5 w-full">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full sm:flex-1 h-10 bg-white rounded-[10px] border-2 border-solid border-[#3559E0] opacity-60 [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#1C1C1C] text-base sm:text-xl lg:text-2xl tracking-[0.48px] leading-[normal] hover:opacity-100 hover:bg-[#F0E6FF] transition-all"
                >
                  {question}
                </Button>
              ))}
            </div>

            <div className="w-full">
              <div className="w-full h-auto sm:h-[100px] bg-[#FFF7EA] rounded-[0px_0px_20px_20px] border-t-2 border-solid border-[#1C1C1C]">
                <div className="flex flex-col sm:flex-row w-full items-center gap-5 p-4 sm:p-5">
                  <div className="flex-1 h-[60px] relative w-full">
                    <Input
                      placeholder="type in your message here......."
                      className="w-full h-[60px] bg-white rounded-[10px] border-2 border-solid border-[#3559E0] pl-4 sm:pl-[31px] opacity-60 [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#1C1C1C] text-base sm:text-xl lg:text-2xl tracking-[0.48px] leading-[normal] placeholder:opacity-60"
                    />
                  </div>
                  <Button 
                    className="w-[60px] h-[60px] p-0 bg-[#D84315] border-2 border-[#1C1C1C] rounded-[10px] hover:bg-[#E64A19] transition-all"
                    style={{
                      boxShadow: "3px 3px 0 #FFD447",
                    }}
                  >
                    <img
                      className="w-8 h-8"
                      alt="Send"
                      src="/figmaAssets/group-406.png"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
