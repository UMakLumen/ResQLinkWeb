import imgImage1 from "figma:asset/eb9231ea38c27b65a7aeffd5f705a3ca2f2699fb.png";
import imgImage2 from "figma:asset/f0180f9257823fb2942503d1f1debf75d2f968ee.png";
import imgImage3 from "figma:asset/b2c1f1ce00ea477c2b09e612058fc1591cf1e800.png";
import imgV872Batch11WanPresentationAsddasdsd1 from "figma:asset/03eb311a4d1504f3bd326f69b0b2e0ce5b7360fb.png";
import imgRectangle1 from "figma:asset/49343f0fedcf446977bbbed6d7af01c9c7d3a39f.png";
import { imgBgElements, imgArrow1, imgVector150 } from "./svg-lr6s7";

function BgElements() {
  return (
    <div className="absolute h-[238.209px] left-0 top-0 w-[1919.73px]" data-name="BG Elements">
      <div className="absolute inset-[-219.97%_-20.84%_-203.94%_-27.3%]">
        <img className="block max-w-none size-full" src={imgBgElements} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex items-center justify-between p-[10px] relative shrink-0 w-[89px]">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-[69px]" data-name="image 1" style={{ backgroundImage: `url('${imgImage1}')` }} />
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative shrink-0 w-[206px]">
      <div className="aspect-[1089/234] bg-center bg-cover bg-no-repeat shrink-0 w-full" data-name="image 2" style={{ backgroundImage: `url('${imgImage2}')` }} />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex gap-[23px] items-center justify-start left-[102px] top-[55px] w-[1716px]">
      <Frame6 />
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute box-border content-stretch flex gap-[59px] items-center justify-start left-[118px] px-[35px] py-5 rounded-[5px] top-[683px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[5px]" />
      <div className="font-['Atkinson_Hyperlegible:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Learn more</p>
      </div>
      <div className="flex h-[1.034px] items-center justify-center relative shrink-0 w-[89.994px]">
        <div className="flex-none rotate-[0.659deg]">
          <div className="h-0 relative w-[90px]">
            <div className="absolute bottom-[-7.36px] left-0 right-[-1.11%] top-[-7.36px]">
              <img className="block max-w-none size-full" src={imgArrow1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[22px] items-center justify-start leading-[0] left-[305px] text-center top-[1448px] w-[1310px]">
      <div className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] font-['Atkinson_Hyperlegible:Regular',_sans-serif] not-italic relative shrink-0 text-[#e0eaff] text-[70px] w-full">
        <p className="leading-[normal]">
          <span>{`In `}</span>
          <span className="font-['Atkinson_Hyperlegible:Bold',_sans-serif] not-italic">2024</span>
          <span>{`, typhoons and floods displaced `}</span>
          <span className="font-['Atkinson_Hyperlegible:Bold',_sans-serif] not-italic">700,000</span>
          <span>{` Filipinos and claimed `}</span>
          <span className="font-['Atkinson_Hyperlegible:Bold',_sans-serif] not-italic">160 lives.</span>
        </p>
      </div>
      <div className="font-['Atkinson_Hyperlegible:Italic',_sans-serif] italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[normal]">Typhoons and Floods Context and Impact. Shelter Cluster Website.</p>
      </div>
    </div>
  );
}

export default function CoverPage() {
  return (
    <div className="bg-[#161613] relative size-full" data-name="Cover Page">
      <div className="absolute bg-center bg-cover bg-no-repeat h-[917px] left-[432px] top-[2090px] w-[412px]" data-name="image 3" style={{ backgroundImage: `url('${imgImage3}')` }} />
      <div className="absolute flex h-[1099.193px] items-center justify-center left-[802px] top-[33.69px] w-[1244.664px]">
        <div className="flex-none rotate-[334.862deg]">
          <div className="h-[729.731px] relative w-[1032.47px]">
            <div className="absolute inset-[-44.52%_-31.47%]">
              <img className="block max-w-none size-full" src={imgVector150} />
            </div>
          </div>
        </div>
      </div>
      <BgElements />
      <div className="absolute flex h-[1285px] items-center justify-center right-[-531px] top-40 w-[1433px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-left bg-no-repeat bg-size-[173.74%_100.02%] h-[1285px] opacity-20 w-[1433px]" data-name="v872batch11-wan-presentation-asddasdsd 1" style={{ backgroundImage: `url('${imgV872Batch11WanPresentationAsddasdsd1}')` }} />
        </div>
      </div>
      <Frame7 />
      <div className="absolute font-['Atkinson_Hyperlegible:Bold',_sans-serif] leading-[0] left-[110px] not-italic text-[#fefdf5] text-[100px] top-[410px] w-[1148px]">
        <p className="leading-[normal]">Actionable Intelligence when lives depend on it</p>
      </div>
      <Frame8 />
      <div className="absolute bg-[#000000cc] bg-[position:0%_0%,_50%_50%] bg-size-[auto,cover] h-[692px] left-0 top-[1193px] w-[1920px]" style={{ backgroundImage: `url('${imgRectangle1}')` }} />
      <Frame9 />
      <div className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] absolute font-['Atkinson_Hyperlegible:Bold',_sans-serif] leading-[0] left-[959px] not-italic text-[#e0eaff] text-[70px] text-center top-[1972px] translate-x-[-50%] w-[1682px]">
        <p className="leading-[normal]">What if it could be changed with</p>
      </div>
      <div className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] absolute font-['Atkinson_Hyperlegible:Bold',_sans-serif] leading-[0] left-[1189px] not-italic text-[#e0eaff] text-[70px] text-center top-[2059px] translate-x-[-50%] w-[690px]">
        <p className="leading-[normal]">One. Simple. Click.</p>
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter bg-[rgba(217,217,217,0.3)] h-[829px] left-[886px] rounded-[14px] top-[2178px] w-[615px]" />
      <div className="absolute font-['Atkinson_Hyperlegible:Bold',_sans-serif] leading-[0] left-[925px] not-italic text-[30px] text-nowrap text-white top-[2217px]">
        <p className="leading-[normal] whitespace-pre">Analyzing Situation...</p>
      </div>
    </div>
  );
}