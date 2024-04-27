import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type InfoCollectorType = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propMinHeight?: CSSProperties["minHeight"];
};

const InfoCollector: FunctionComponent<InfoCollectorType> = ({
  propTop,
  propMinHeight,
}) => {
  const proximityProviderStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const priceTag1IconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div
      className="self-stretch flex flex-row items-start justify-between pt-[29.4px] pb-[29.5px] pr-[44.5px] pl-[45.3px] box-border relative shrink-0 [debug_commit:f6aba90] max-w-full gap-[20px] text-left text-14xl-2 text-blue font-titre-grey mq1050:flex-wrap mq1050:pl-[22px] mq1050:pr-[22px] mq1050:box-border"
      style={proximityProviderStyle}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[27.94px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/rectangle-3184.svg"
      />
      <div className="w-[619.9px] flex flex-col items-start justify-start gap-[23.1px] max-w-full">
        <div className="w-[552px] flex flex-col items-start justify-start gap-[2.3px] max-w-full shrink-0">
          <div className="self-stretch relative leading-[113%] font-semibold shrink-0 [debug_commit:f6aba90] z-[1] mq450:text-xl mq450:leading-[23px] mq1050:text-8xl mq1050:leading-[30px]">
            Create a editable template flyer
          </div>
          <div className="w-[490.8px] h-[27.2px] relative text-base-9 tracking-[-0.01em] leading-[145.45%] font-light text-dimgray-500 flex items-center shrink-0 [debug_commit:f6aba90] z-[1]">
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
              alt=""
              src="/verifiedbadge02-1-2@2x.png"
            />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[6.8px]">
              <div className="h-[27.2px] relative tracking-[-0.01em] leading-[145.45%] font-light flex items-center shrink-0 z-[1]">
                Payment Verified
              </div>
            </div>
          </div>
          <img
            className="self-stretch w-[105.7px] relative max-h-full object-cover min-h-[42px] z-[1]"
            alt=""
            src="/103-1-2@2x.png"
          />
          <div className="w-[82.3px] flex flex-col items-start justify-end pt-0 px-0 pb-[3.8px] box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[6.8px]">
              <img
                className="h-[33.2px] w-[33.2px] relative object-cover z-[1]"
                alt=""
                src="/pricetag-1-2@2x.png"
                style={priceTag1IconStyle}
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="self-stretch h-[27.2px] relative tracking-[-0.01em] leading-[145.45%] font-light flex items-center shrink-0 whitespace-nowrap z-[1]">
                  400$
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[6.1px]">
            <div className="flex flex-row items-end justify-start gap-[6.8px]">
              <img
                className="h-[29.4px] w-[29.4px] relative object-cover min-h-[29px] z-[1]"
                alt=""
                src="/location-1-2@2x.png"
              />
              <div className="h-[27.2px] relative tracking-[-0.01em] leading-[145.45%] font-light flex items-center min-w-[126.1px] z-[1]">
                United Kingdom
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-start py-0 pr-0 pl-px gap-[95.2px]">
        <div className="flex flex-row items-start justify-start gap-[4.6px]">
          <img
            className="h-[36.2px] w-[36.2px] relative object-cover min-h-[36px] z-[1]"
            alt=""
            src="/photoshop-1-2@2x.png"
          />
          <img
            className="h-[36.2px] w-[36.2px] relative object-cover min-h-[36px] z-[1]"
            alt=""
            src="/illustrator-1-2@2x.png"
          />
        </div>
        <img
          className="w-[47.6px] h-[47.6px] relative object-contain z-[1]"
          alt=""
          src="/heart-1@2x.png"
        />
      </div>
    </div>
  );
};

export default InfoCollector;
