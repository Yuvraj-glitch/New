import svgPaths from "./svg-62prnhqf2g";
import imgImage334 from "figma:asset/e4137dc86e3de9588b4d7427f6f217d7be590edc.png";
import imgImage336 from "figma:asset/527b33f21282b8e297b5f1dd2772014b406861ee.png";
import imgImage337 from "figma:asset/fdc4d59fefca2938949af1bcc0ef54b5e876906b.png";
import imgBirdigoLogoWhite1024X5002 from "figma:asset/9c551b30cd5fa15c7d2549cfbaf5792bfe58de60.png";

function CtaButton() {
  return (
    <div className="absolute bg-[#e4e6eb] box-border content-stretch flex gap-1.5 items-center justify-center left-[165px] px-2 py-[4.8px] rounded-[6.4px] top-[494px]" data-name="CTA button">
      <div aria-hidden="true" className="absolute border border-[#dbdde2] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="font-['Font_Awesome_6_Brands:Regular',_sans-serif] h-5 leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center w-3.5">
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
    <div className="h-[640px] relative shadow-[0px_3px_8px_0px_rgba(0,0,0,0.24)] shrink-0 w-72" data-name="ad-1">
      <div className="absolute bg-center bg-cover bg-no-repeat h-[640px] left-0 top-0 w-72" data-name="image 334" style={{ backgroundImage: `url('${imgImage334}')` }} />
      <CtaButton />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute bg-[#333333] h-[30px] left-[152px] overflow-clip rounded-[3.8px] shadow-[0px_3.04px_3.04px_0px_rgba(0,0,0,0.14)] top-[517px] w-28">
      <div className="absolute font-['Mukta:Regular',_sans-serif] leading-[0] left-[27px] not-italic text-[12.92px] text-nowrap text-white top-1 tracking-[0.3876px]">
        <p className="leading-[100.125%] whitespace-pre">Book Now</p>
      </div>
    </div>
  );
}

function Ad2() {
  return (
    <div className="h-[640px] relative shadow-[0px_3px_8px_0px_rgba(0,0,0,0.24)] shrink-0 w-72" data-name="ad-2">
      <div className="absolute bg-center bg-cover bg-no-repeat h-[640px] left-0 top-0 w-72" data-name="image 336" style={{ backgroundImage: `url('${imgImage336}')` }} />
      <Frame29 />
    </div>
  );
}

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
    <div className="content-stretch flex flex-col gap-[0.8px] items-start justify-center relative shrink-0 w-[228.8px]">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1f1f1f] text-[11.2px] text-nowrap w-[220.8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[16px] overflow-inherit">Call Now</p>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-2 items-center justify-start left-1/2 p-[12px] rounded-[6.4px] top-[338px] translate-x-[-50%] w-[264px]" data-name="CTA">
      <div aria-hidden="true" className="absolute border-[#e7e7e7] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <MaterialSymbolsCall />
      <Frame5 />
    </div>
  );
}

function Ad3() {
  return (
    <div className="h-[640px] relative shrink-0 w-72" data-name="ad-3">
      <div className="absolute bg-center bg-cover bg-no-repeat h-[640px] left-0 top-0 w-72" data-name="image 337" style={{ backgroundImage: `url('${imgImage337}')` }} />
      <Cta />
    </div>
  );
}

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

export default function AdPreviewsMobile() {
  return (
    <div className="bg-[#631adb] relative size-full" data-name="ad-previews_mobile">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[120px] items-center justify-center px-6 py-20 relative size-full">
          <Ad1 />
          <Ad2 />
          <Ad3 />
          <Powered />
        </div>
      </div>
    </div>
  );
}