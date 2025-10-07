import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const formFields = [
  {
    id: "name",
    label: "Name",
    placeholder: "John",
    type: "input",
  },
  {
    id: "surname",
    label: "Surname",
    placeholder: "Smith",
    type: "input",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Johnsmith123@gmail.com",
    type: "input",
  },
  {
    id: "message",
    label: "Message",
    placeholder: "Type your message here",
    type: "textarea",
  },
];

const contactButtons = [
  {
    text: "Charitra2004@gmail.com",
    bgColor: "bg-[#3559E0]",
    textColor: "text-white",
  },
  {
    text: "+91 9538233449",
    bgColor: "bg-transparent",
    textColor: "text-[#3559E0]",
  },
];

export const ContactFormSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-5 p-5 bg-[#FFF7EA] rounded-[20px] overflow-hidden border-2 border-[#1C1C1C]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-5">
        <img
          className="w-full lg:flex-1 lg:max-w-[660px] rounded-[10px] border-2 border-solid border-[#1C1C1C] object-cover"
          alt="Image"
          src="/figmaAssets/image-186-1.png"
          style={{
            boxShadow: "4px 4px 0 #FFD447",
          }}
        />

        <div className="flex flex-col w-full lg:max-w-[585px] items-start gap-[23px] relative">
          <div 
            className="absolute -inset-4 bg-[#F0E6FF] rounded-lg -z-10 hidden lg:block"
            style={{
              transform: "translate(8px, 8px)",
            }}
          />
          
          <div className="flex flex-col items-center gap-2.5 w-full z-10">
            <h2 className="w-full h-auto [font-family:'Futura_PT-Demi',Helvetica] font-normal text-[#1C1C1C] text-4xl sm:text-5xl lg:text-7xl tracking-[1.44px] leading-tight flex items-center justify-center">
              Contact me !
            </h2>
          </div>

          <div className="flex flex-col min-w-80 items-center gap-6 p-6 w-full bg-white rounded-lg border-2 border-solid border-[#3559E0] z-10"
               style={{
                 boxShadow: "4px 4px 0 rgba(53, 89, 224, 0.3)",
               }}>
            {formFields.map((field) => (
              <div
                key={field.id}
                className="flex flex-col items-start gap-2 w-full"
              >
                <Label
                  htmlFor={field.id}
                  className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-[#1C1C1C] text-base"
                >
                  {field.label}
                </Label>

                {field.type === "input" ? (
                  <Input
                    id={field.id}
                    placeholder={field.placeholder}
                    className="min-w-60 px-4 py-3 w-full bg-[#FFF7EA] rounded-lg border-2 border-solid border-[#3559E0] [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#1C1C1C] text-base placeholder:text-[#b3b3b3]"
                  />
                ) : (
                  <div className="relative w-full">
                    <Textarea
                      id={field.id}
                      placeholder={field.placeholder}
                      className="min-w-60 min-h-20 px-4 py-3 w-full bg-[#FFF7EA] rounded-lg border-2 border-solid border-[#3559E0] [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#1C1C1C] text-base placeholder:text-[#b3b3b3] resize-none"
                    />
                    <img
                      className="absolute right-[7px] bottom-2 w-[7px] h-[7px] pointer-events-none"
                      alt="Drag"
                      src="/figmaAssets/drag.svg"
                    />
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center gap-4 w-full">
              <Button 
                className="flex-1 h-auto items-center justify-center gap-2 p-3 bg-[#D84315] text-white rounded-lg overflow-hidden border-2 border-[#1C1C1C] hover:bg-[#E64A19] transition-all [font-family:'Futura_PT-Demi',Helvetica] font-bold text-lg tracking-[1px] uppercase"
                style={{
                  boxShadow: "3px 3px 0 #FFD447",
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
        {contactButtons.map((button, index) => (
          <Button
            key={index}
            className={`h-auto flex-1 w-full sm:max-w-[661px] px-2.5 py-3 ${button.bgColor} rounded-[10px] border-2 border-solid border-[#3559E0] hover:opacity-90 transition-all`}
            style={
              button.bgColor === "bg-transparent"
                ? { boxShadow: "3px 3px 0 rgba(53, 89, 224, 0.3)" }
                : { boxShadow: "3px 3px 0 #FFD447" }
            }
          >
            <span
              className={`[font-family:'Futura_PT-Book',Helvetica] font-normal ${button.textColor} text-lg sm:text-2xl tracking-[0.48px] leading-[normal]`}
            >
              {button.text}
            </span>
          </Button>
        ))}
      </div>
    </section>
  );
};
