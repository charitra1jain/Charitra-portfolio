import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#FFF7EA] rounded-[40px_20px_20px_20px] overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8 p-8 lg:p-12">
        <div className="flex-1 flex flex-col justify-center gap-8 lg:pr-8 z-10">
          <div className="flex flex-col items-start gap-6">
            <h1 className="[font-family:'Futura_PT-Demi',Helvetica] font-bold text-[#1C1C1C] text-5xl lg:text-[64px] tracking-[1.5px] leading-[1.1]">
              Hi I'm{" "}
              <span className="text-[#FF6B3D]">Charitra Jain</span>
            </h1>

            <p className="[font-family:'Futura_PT-Book',Helvetica] font-medium text-[#1C1C1C] text-xl lg:text-2xl tracking-[0.5px] leading-normal opacity-80">
              Undergrad Student | Graphic designer | Figma designer
            </p>
          </div>

          <div className="w-full max-w-[500px] h-[2px] bg-gradient-to-r from-[#FF6B3D] to-transparent"></div>

          <p className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-[#1C1C1C] text-lg lg:text-xl text-justify tracking-[0.4px] leading-[1.6] max-w-[540px]">
            A driven student leader with a proven record in event management,
            digital marketing, and public relations. I also specialize as a
            UI/UX freelancer, designing intuitive digital experiences that
            enhance user satisfaction and drive business results.
          </p>

          <div className="flex flex-wrap gap-5 mt-4">
            <button
              className="relative w-full sm:w-[264px] h-[64px] bg-[#FF6B3D] text-white rounded-[18px] border-[3px] border-solid border-[#1C1C1C] [font-family:'Futura_PT-Demi',Helvetica] font-bold text-xl tracking-[1.5px] uppercase transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px]"
              style={{
                boxShadow: "4px 4px 0 #FFD447",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "6px 6px 0 #FFD447";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "4px 4px 0 #FFD447";
              }}
            >
              Contact me
            </button>

            <button
              className="relative w-full sm:w-[264px] h-[64px] bg-transparent text-[#3559E0] rounded-[18px] border-[3px] border-dashed border-[#3559E0] [font-family:'Futura_PT-Demi',Helvetica] font-bold text-xl tracking-[1.5px] uppercase transition-all duration-200 hover:bg-[#3559E0] hover:text-white"
              style={{
                boxShadow: "3px 3px 0 rgba(53, 89, 224, 0.3)",
              }}
            >
              Download CV
            </button>
          </div>
        </div>

        <div className="flex-shrink-0 relative">
          <div className="relative">
            <img
              className="w-full lg:w-[600px] h-auto lg:h-[680px] object-cover rounded-[20px] relative z-10"
              alt="Profile"
              src="/figmaAssets/image-186.png"
            />
            <div className="absolute inset-0 bg-[#F0E6FF] rounded-[20px] transform translate-x-3 translate-y-3 -z-10"></div>
          </div>
        </div>
      </div>

      <img
        className="absolute top-4 right-[14px] w-[173px] h-28 opacity-60"
        alt="Rectangle"
        src="/figmaAssets/rectangle-4305.svg"
      />

      <img
        className="absolute bottom-[10px] right-[14px] w-[110px] h-[174px] opacity-60"
        alt="Rectangle"
        src="/figmaAssets/rectangle-4306.svg"
      />

      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle, #1C1C1C 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}></div>
      </div>
    </section>
  );
};
