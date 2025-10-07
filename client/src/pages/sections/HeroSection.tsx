import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  const buttons = [{ label: "Contact me" }, { label: "Download CV" }];

  return (
    <section className="relative w-full bg-white rounded-[40px_20px_20px_20px] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8 p-5">
        <div className="flex-shrink-0">
          <img
            className="w-full lg:w-[660px] h-auto lg:h-[716px] object-cover"
            alt="Profile"
            src="/figmaAssets/image-186.png"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-8 pt-8 lg:pt-16 px-4 lg:px-0">
          <div className="flex flex-col items-start gap-4">
            <h1 className="[font-family:'Futura_PT-Demi',Helvetica] font-normal text-black text-5xl lg:text-7xl tracking-[1.44px] leading-[1.2]">
              Hi I&apos;m Charitra Jain
            </h1>

            <p className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xl lg:text-2xl tracking-[0.24px] leading-normal">
              Undergrad Student | Graphic designer | Figma designer
            </p>
          </div>

          <img
            className="w-full max-w-[500px] h-1"
            alt="Line"
            src="/figmaAssets/line-111.svg"
          />

          <p className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xl lg:text-2xl text-justify tracking-[0.48px] leading-normal max-w-[541px]">
            A driven student leader with a proven record in event management,
            digital marketing, and public relations. I also specialize as a
            UI/UX freelancer, designing intuitive digital experiences that
            enhance user satisfaction and drive business results.
          </p>

          <div className="flex flex-wrap gap-[18px] mt-8">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full sm:w-[252px] h-[50px] bg-[#d9d9d9] rounded-[10px] border-2 border-solid border-black hover:bg-[#c9c9c9] [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-2xl tracking-[0.48px]"
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <img
        className="absolute top-4 right-[14px] w-[173px] h-28"
        alt="Rectangle"
        src="/figmaAssets/rectangle-4305.svg"
      />

      <img
        className="absolute bottom-[10px] right-[14px] w-[110px] h-[174px]"
        alt="Rectangle"
        src="/figmaAssets/rectangle-4306.svg"
      />
    </section>
  );
};
