import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  propFlex,
  propAlignSelf,
  propPadding,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propFlex, propAlignSelf, propPadding]);

  return (
    <div
      className="h-[273.4px] flex-1 flex flex-col items-end justify-start pt-0 px-0 pb-[254.5px] box-border gap-[9.8px] max-w-full text-right text-base-9 text-gray-1600 font-titre-grey mq750:pb-[165px] mq750:box-border mq1050:h-auto"
      style={groupDivStyle}
    >
      <div className="w-[192.9px] h-[18.9px] relative tracking-[-0.01em] leading-[145.45%] font-light flex items-center shrink-0 [debug_commit:f6aba90]">
        Posted il y a 6 minutes
      </div>
      <div className="self-stretch flex flex-row items-start justify-between py-[29.5px] pr-[44.6px] pl-[45.3px] relative shrink-0 [debug_commit:f6aba90] text-left text-14xl-2 text-blue mq1050:flex-wrap mq1050:pl-[22px] mq1050:pr-[22px] mq1050:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[27.94px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-3184.svg"
        />
        <div className="w-[619.9px] flex flex-col items-start justify-start gap-[23px] max-w-full">
          <div className="w-[552px] flex flex-col items-start justify-start gap-[2.3px] max-w-full">
            <div className="self-stretch relative leading-[113%] font-semibold z-[1] mq450:text-xl mq450:leading-[23px] mq1050:text-8xl mq1050:leading-[30px]">
              Create a editable template flyer
            </div>
            <div className="w-[490.8px] h-[27.2px] relative text-base-9 tracking-[-0.01em] leading-[145.45%] font-light text-dimgray-500 flex items-center shrink-0 max-w-full z-[1]">
              Price per hour : $25-$50 | Profil : Expert | Time : Less than 1
              mouth
            </div>
          </div>
          <div className="self-stretch h-[27.2px] relative text-2xl-9 tracking-[-0.01em] leading-[145.45%] font-light text-gray-800 flex items-center shrink-0 z-[1] mq450:text-lg mq450:leading-[25px]">
            Edit a flyer that’s been started and allow it to be editable.
          </div>
          <div className="flex flex-row items-end justify-start gap-[17.4px] max-w-full text-base-9 text-dimgray-500 mq750:flex-wrap">
            <div className="flex flex-row items-end justify-start">
              <img
                className="h-[41.5px] w-10 relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/verifiedbadge02-1@2x.png"
              />
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[6.8px]">
                <div className="h-[27.2px] relative tracking-[-0.01em] leading-[145.45%] font-light flex items-center shrink-0 z-[1]">
                  Payment Verified
                </div>
              </div>
            </div>
            <img
              className="self-stretch w-[105.7px] relative max-h-full object-cover min-h-[42px] z-[1]"
              loading="lazy"
              alt=""
              src="/103-1@2x.png"
            />
            <div className="w-[82.3px] flex flex-col items-start justify-end pt-0 px-0 pb-[3.8px] box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[6.8px]">
                <img
                  className="h-[33.2px] w-[33.2px] relative object-cover min-h-[33px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/pricetag-1@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="self-stretch h-[27.2px] relative tracking-[-0.01em] leading-[145.45%] font-light flex items-center shrink-0 whitespace-nowrap z-[1]">
                    400$
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[6.1px]">
              <div className="flex flex-row items-end justify-start gap-[6.9px]">
                <img
                  className="h-[29.4px] w-[29.4px] relative object-cover min-h-[29px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/location-1@2x.png"
                />
                <div className="h-[27.2px] relative tracking-[-0.01em] leading-[145.45%] font-light flex items-center min-w-[126.1px] z-[1]">
                  United Kingdom
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-[95.2px]">
          <div className="flex flex-row items-start justify-start gap-[4.6px]">
            <img
              className="h-[36.2px] w-[36.2px] relative object-cover min-h-[36px] z-[1]"
              loading="lazy"
              alt=""
              src="/photoshop-1@2x.png"
            />
            <img
              className="h-[36.2px] w-[36.2px] relative object-cover min-h-[36px] z-[1]"
              loading="lazy"
              alt=""
              src="/illustrator-1@2x.png"
            />
          </div>
          <img
            className="w-[47.6px] h-[47.6px] relative object-contain z-[3]"
            loading="lazy"
            alt=""
            src="/heart@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
