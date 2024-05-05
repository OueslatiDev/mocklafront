import React, { FunctionComponent } from "react";

import "./LeftIsm.css"
const LeftIsm: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row  items-start justify-start py-0 pr-0 pl-[18.8px] box-border max-w-full">
      <div className="flex-1 flex   flex-row items-end justify-start gap-[31.3px] max-w-full mq700:gap-[16px] mq975:flex-wrap">
        <div className="w-[337.9px] flex flex-col items-start justify-start gap-[27.3px] min-w-[337.90000000000146px] max-w-full mq450:min-w-full mq975:flex-1 self-start pt-5">
          <div className="w-[186.3px] flex flex-col items-start justify-start pt-[3.8px] px-0 pb-0 box-border font-poppins top-0">
            Discussion
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[8.3px] pr-2.5 pl-0 gap-[8.1px] text-xs text-dimgray-800 font-montserrat">
            <div className="self-stretch flex flex-row items-end justify-start gap-[8.1px]">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                <img
                  className="w-[22.3px] h-[18.2px]  Pt-40px relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/vecteezy-notificationiconsvectordesign-10654946-converti05-15@2x.png"
                />
              </div>
              <div className="h-[20.3px] flex-1 relative leading-[120%] font-light flex items-center">
                <input
                  className="w-[calc(100%_-_0px)] [border:none] [outline:none] font-medium font-titre-grey text-lg bg-[transparent] self-stretch h-[33px] relative tracking-[-0.01em] text-gray-200 text-left flex items-center shrink-0 min-w-[112px] [debug_commit:1de1738] p-0"
                  placeholder="SEARCH MESSAGES"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch h-[0.7px] relative box-border border-t-[0.7px] border-solid border-dimgray-600" />
          </div>
          <div className="w-[303.8px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[27.1px] text-sm text-blue">
            <div className="h-[40.7px] w-[110.2px] relative tracking-[-0.01em] flex items-center shrink-0">
              Messagerie
            </div>
            <div className="h-[40.7px] flex-1 relative tracking-[-0.01em] text-gray-200 flex items-center">
              Communautés
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[22px] box-border w-[920px]  text-5xl ">
          <div className="  h-[150px]  self-stretch bg-[#c7def3] overflow-hidden flex flex-col items-start justify-start mt-0 py-0 px-[35px] box-border max-w-full z-[1]">
            <div className="self-stretch  bg-[#c7def3] flex flex-row items-center justify-between py-0 px-0 box-border max-w-full gap-[10px] mq975:flex-wrap">
               <div className="w-[19.2px] flex flex-row items-center justify-start gap-[16px]  mq450:flex-wrap">
                <img
                  className="h-[96.7px] w-[96.2px] relative"
                  loading="lazy"
                  alt=""
                  src="/mask-group@2x.png"
                />
                <div className="h-[33px] flex-1 relative tracking-[-0.01em] font-medium flex items-center min-w-[128px] mq450:text-lgi">
                  LOREM UPSUM
                </div>
              </div>
              <div className="h-[25.3px] w-[50.4px] relative text-xs tracking-[-0.01em] font-light text-gray-500 text-left flex items-center shrink-0 whitespace-nowrap">
                11:03 am ( 23 hours ago)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftIsm;