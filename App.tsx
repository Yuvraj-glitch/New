import React from 'react';
import svgPaths from "./imports/svg-zxtb9ifksy";
import imgImage334 from "figma:asset/e4137dc86e3de9588b4d7427f6f217d7be590edc.png";
import imgImage336 from "figma:asset/527b33f21282b8e297b5f1dd2772014b406861ee.png";
import imgImage337 from "figma:asset/fdc4d59fefca2938949af1bcc0ef54b5e876906b.png";
import imgBirdigoLogoWhite1024X5002 from "figma:asset/9c551b30cd5fa15c7d2549cfbaf5792bfe58de60.png";

// Facebook Ad - WhatsApp CTA Component
function CtaButton() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/‎+918047488607/?text=Hi%2C%20I%20saw%20a%20AutoEdge%20ad%20and%20I%27m%20interested", "_blank");
  };

  return (
    <div 
      className="absolute bg-[#e4e6eb] box-border content-stretch flex gap-1.5 items-center justify-center right-[20px] px-2 py-[4.8px] rounded-[6.4px] top-[472px] cursor-pointer hover:bg-[#d8dadf] transition-colors" 
      data-name="CTA button"
      onClick={handleWhatsAppClick}
    >
      <div aria-hidden="true" className="absolute border border-[#dbdde2] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="font-['Font_Awesome_6_Brands:Regular',_sans-serif] h-5 leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] text-center w-3.5">
        <p className="leading-[20.8px]">whatsapp</p>
      </div>
      <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1e1e1e] text-[10.4px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.4px] whitespace-pre">Send Message</p>
      </div>
    </div>
  );
}

function Ad1() {
  return (
    <div className="h-[640px] relative drop-shadow-[0px_8px_16px_rgba(0,0,0,0.15)] shrink-0 w-72" data-name="ad-1">
      <div className="absolute bg-center bg-contain bg-no-repeat h-[640px] left-0 top-0 w-72" data-name="image 334" style={{ backgroundImage: `url('${imgImage334}')` }} />
      <CtaButton />
    </div>
  );
}

// Google Display Ad - Book Now CTA Component
function Frame29() {
  const handleBookNowClick = () => {
    window.open("https://embed.birdigo.com/embed/RWpBUTc2ekZDRWNPbjhhMTArZmZVL1diR0xNd2RGbmVrdGVXZ2tKcFh5az0=", "_blank");
  };

  return (
    <div 
      className="absolute bg-[#333333] h-[28px] right-[25px] overflow-clip rounded-[3.8px] shadow-[0px_3.04px_3.04px_0px_rgba(0,0,0,0.14)] top-[492px] w-28 cursor-pointer hover:bg-[#555555] transition-colors flex items-center justify-center"
      onClick={handleBookNowClick}
    >
      <div className="font-['Mukta:Regular',_sans-serif] leading-[0] not-italic text-[12.92px] text-nowrap text-white tracking-[0.3876px]">
        <p className="leading-[100.125%] whitespace-pre">Book Now</p>
      </div>
    </div>
  );
}

function Ad2() {
  return (
    <div className="h-[640px] relative drop-shadow-[0px_8px_16px_rgba(0,0,0,0.15)] shrink-0 w-72" data-name="ad-2">
      <div className="absolute bg-center bg-contain bg-no-repeat h-[640px] left-0 top-0 w-72" data-name="image 336" style={{ backgroundImage: `url('${imgImage336}')` }} />
      <Frame29 />
    </div>
  );
}

// Google Search Ad - Call CTA Components
function MaterialSymbolsCall() {
  return (
    <div className="relative shrink-0 size-4" data-name="material-symbols:call">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:call">
          <path d={svgPaths.p2d2d1400} fill="var(--fill-0, #1B1B1B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[0.8px] items-start justify-center relative shrink-0 w-[240px]">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f1f1f] text-[11.2px] text-nowrap w-[220.8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[16px] overflow-inherit">Call Now</p>
      </div>
    </div>
  );
}

function Cta() {
  const handleCallClick = () => {
    window.open("tel:+917892740690", "_self");
  };

  return (
    <div 
      className="absolute bg-white box-border content-stretch flex gap-2 items-center justify-start left-[10px] p-[12px] rounded-[6.4px] top-[332px] right-[10px] cursor-pointer hover:bg-gray-50 transition-colors" 
      data-name="CTA"
      onClick={handleCallClick}
    >
      <div aria-hidden="true" className="absolute border-[#e7e7e7] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <MaterialSymbolsCall />
      <Frame5 />
    </div>
  );
}

function Ad3() {
  return (
    <div className="h-[640px] relative drop-shadow-[0px_8px_16px_rgba(0,0,0,0.15)] shrink-0 w-72" data-name="ad-3">
      <div className="absolute bg-center bg-contain bg-no-repeat h-[640px] left-0 top-0 w-72" data-name="image 337" style={{ backgroundImage: `url('${imgImage337}')` }} />
      <Cta />
    </div>
  );
}

// Powered by Birdigo component
function Powered() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-center relative shrink-0 w-[178px]" data-name="Powered">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#cccccc] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20.8px] whitespace-pre">{`Powered by `}</p>
      </div>
      <div className="bg-[0%_50.7%] bg-no-repeat bg-size-[100%_175.83%] h-6 shrink-0 w-[87px]" data-name="birdigo-logo-white-1024x500 2" style={{ backgroundImage: `url('${imgBirdigoLogoWhite1024X5002}')` }} />
    </div>
  );
}

// Main responsive component
export default function App() {
  return (
    <div className="bg-[#631adb] relative min-h-screen" data-name="ad-previews">
      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden lg:flex flex-row items-center justify-center relative min-h-screen">
        <div className="box-border content-stretch flex gap-[120px] items-center justify-center p-[24px] relative w-full h-full">
          <Ad1 />
          <Ad2 />
          <Ad3 />
          <div className="absolute bottom-5 right-5">
            <Powered />
          </div>
        </div>
      </div>

      {/* Mobile Layout - Hidden on desktop */}
      <div className="flex lg:hidden flex-col items-center justify-center relative min-h-screen">
        <div className="box-border content-stretch flex flex-col gap-[120px] items-center justify-center px-6 py-20 relative w-full h-full">
          <Ad1 />
          <Ad2 />
          <Ad3 />
          <Powered />
        </div>
      </div>
    </div>
  );
}