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
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    text: "+91 9538233449",
    bgColor: "bg-white",
    textColor: "text-black",
  },
];

export const ContactFormSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-5 p-5 bg-white rounded-[20px] overflow-hidden backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
      <div className="flex items-center justify-between gap-5">
        <img
          className="flex-1 max-w-[660px] rounded-[10px] border-2 border-solid border-black object-cover"
          alt="Image"
          src="/figmaAssets/image-186-1.png"
        />

        <div className="flex flex-col w-full max-w-[585px] items-start gap-[23px]">
          <div className="flex flex-col items-center gap-2.5 w-full">
            <h2 className="w-full h-[72px] [font-family:'Futura_PT-Demi',Helvetica] font-normal text-black text-7xl tracking-[1.44px] leading-[72px] flex items-center justify-center">
              Contact me !
            </h2>
          </div>

          <div className="flex flex-col min-w-80 items-center gap-6 p-6 w-full bg-white rounded-lg border border-solid border-[#d9d9d9]">
            {formFields.map((field) => (
              <div
                key={field.id}
                className="flex flex-col items-start gap-2 w-full"
              >
                <Label
                  htmlFor={field.id}
                  className="font-body-base font-[number:var(--body-base-font-weight)] text-[#1e1e1e] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]"
                >
                  {field.label}
                </Label>

                {field.type === "input" ? (
                  <Input
                    id={field.id}
                    placeholder={field.placeholder}
                    className="min-w-60 px-4 py-3 w-full bg-white rounded-lg border border-solid border-[#d9d9d9] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-[#b3b3b3] text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] [font-style:var(--single-line-body-base-font-style)]"
                  />
                ) : (
                  <div className="relative w-full">
                    <Textarea
                      id={field.id}
                      placeholder={field.placeholder}
                      className="min-w-60 min-h-20 px-4 py-3 w-full bg-white rounded-lg border border-solid border-[#d9d9d9] font-body-base font-[number:var(--body-base-font-weight)] text-[#b3b3b3] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)] resize-none"
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
              <Button className="flex-1 h-auto items-center justify-center gap-2 p-3 bg-[#2c2c2c] rounded-lg overflow-hidden border border-solid hover:bg-[#3c3c3c]">
                <span className="font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-neutral-100 text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)]">
                  Submit
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 w-full">
        {contactButtons.map((button, index) => (
          <Button
            key={index}
            className={`h-auto flex-1 max-w-[661px] px-2.5 py-3 ${button.bgColor} rounded-[10px] border border-solid border-black hover:opacity-90`}
          >
            <span
              className={`[font-family:'Futura_PT-Book',Helvetica] font-normal ${button.textColor} text-2xl tracking-[0.48px] leading-[normal]`}
            >
              {button.text}
            </span>
          </Button>
        ))}
      </div>
    </section>
  );
};
