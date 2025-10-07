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
    <Card className="w-full max-w-[1370px] bg-white rounded-[20px] border border-solid border-black backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
      <CardContent className="p-0">
        <div className="flex flex-col w-full items-center gap-[76px]">
          <div className="flex flex-col w-full items-center justify-center gap-5">
            <div className="flex flex-col w-full items-start gap-2.5">
              <div className="flex w-full h-[87px] items-center gap-5 px-5 py-6 bg-white rounded-[20px_20px_0px_0px] border-b border-solid border-black">
                <img
                  className="w-[61px] h-[41.97px]"
                  alt="Vector"
                  src="/figmaAssets/vector.svg"
                />
                <div className="flex items-center justify-center w-[212px] h-[39px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-2xl tracking-[0.48px] leading-[normal]">
                  Charitra&apos;s AI assistant
                </div>
              </div>
            </div>

            <div className="flex h-56 items-center justify-center gap-5 w-full">
              <div className="flex w-1/2 items-start gap-2.5 pl-5 pr-[200px] py-5">
                <Avatar className="w-[50px] h-[50px] bg-[#e1e1e1] rounded-[25px] border border-solid border-black" />
                <div className="flex items-center justify-center gap-2.5 p-[15px] bg-white rounded-[10px] border border-solid border-black max-w-[735px]">
                  <div className="flex items-center justify-center opacity-60 [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-2xl tracking-[0.48px] leading-[normal]">
                    A pre set welcome message will be generated here
                  </div>
                </div>
              </div>

              <div className="flex w-1/2 items-end justify-end gap-2.5 p-5">
                <div className="flex items-center justify-center gap-2.5 p-[15px] bg-white rounded-[10px] border border-solid border-black max-w-[634px]">
                  <div className="flex items-center justify-center opacity-60 [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-2xl tracking-[0.48px] leading-[normal]">
                    User&apos;s message and requests will be here
                  </div>
                </div>
                <Avatar className="w-[50px] h-[50px] bg-[#e1e1e1] rounded-[25px] border border-solid border-black rotate-180" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex items-center justify-center gap-3 px-5 py-2.5 w-full">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="flex-1 h-10 bg-white rounded-[10px] border border-solid border-black opacity-60 [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-2xl tracking-[0.48px] leading-[normal] hover:opacity-100"
                >
                  {question}
                </Button>
              ))}
            </div>

            <div className="w-full">
              <div className="w-full h-[100px] bg-white rounded-[0px_0px_20px_20px] border-t border-solid border-black">
                <div className="flex w-full items-center gap-5 p-5">
                  <div className="flex-1 h-[60px] relative">
                    <Input
                      placeholder="type in your message here......."
                      className="w-full h-[60px] bg-[#e1e1e1] rounded-[10px] border border-solid border-black pl-[31px] opacity-60 [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-2xl tracking-[0.48px] leading-[normal] placeholder:opacity-60"
                    />
                  </div>
                  <Button className="w-[60px] h-[60px] p-0 bg-transparent border-0 hover:bg-transparent">
                    <img
                      className="w-[60px] h-[60px]"
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
