import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/login-freelancer");
  }, [navigate]);

  const onFreelacerTextClick = useCallback(() => {
    navigate("/login-freelancer");
  }, [navigate]);

  return (
    <form className="m-0 w-[972px] flex flex-col items-end justify-start gap-[59px] max-w-full mq750:gap-[29px_59px]">
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1 pl-[5px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[17px] max-w-full">
          <h1 className="m-0 self-stretch h-[124px] relative text-66xl font-semibold font-titre-grey text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center inline-block shrink-0 [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] mq450:text-6xl mq1050:text-23xl">
            Login the Pitchini
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[29px] max-w-full">
              <div className="self-stretch relative text-6xl leading-[37px] font-medium font-titre-grey text-grey1 text-center mq450:text-xl mq450:leading-[29px]">{`Are you using PITCHINI as a Recruiter or a Freelancer ? `}</div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <img
                  className="h-[667px] flex-1 relative max-w-full overflow-hidden object-cover"
                  loading="lazy"
                  alt=""
                  src="/login02-converti02-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[18px] pr-5 pl-[21px] box-border max-w-full">
        <div
          className="w-[595px] flex flex-row items-start justify-start gap-[9px] max-w-full cursor-pointer mq750:flex-wrap"
          onClick={onGroupContainerClick}
        >
          <button className="cursor-pointer pt-[27px] pb-[26px] pr-[73px] pl-[74px] bg-white flex-1 rounded-md shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-start justify-start min-w-[190px] border-[3px] border-solid border-grey hover:bg-gainsboro hover:box-border hover:border-[3px] hover:border-solid hover:border-gray-400 mq450:pl-5 mq450:pr-5 mq450:box-border mq750:flex-1">
            <div className="h-[79px] w-[293px] relative rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border hidden border-[3px] border-solid border-grey" />
            <div
              className="h-[26px] w-[140px] relative text-9xl tracking-[-0.01em] font-medium font-montserrat text-grey text-center flex items-center justify-center shrink-0 cursor-pointer z-[1] mq450:text-3xl"
              onClick={onFreelacerTextClick}
            >
              Freelacer
            </div>
          </button>
          <button className="cursor-pointer pt-[27px] px-[77px] pb-[26px] bg-white flex-[0.95] rounded-md shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-start justify-start min-w-[190px] border-[3px] border-solid border-blue hover:bg-gainsboro hover:box-border hover:border-[3px] hover:border-solid hover:border-dodgerblue-100 mq450:pl-5 mq450:pr-5 mq450:box-border mq750:flex-1">
            <div className="h-[79px] w-[293px] relative rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border hidden border-[3px] border-solid border-blue" />
            <div className="h-[26px] w-[133px] relative text-9xl tracking-[-0.01em] font-medium font-montserrat text-blue text-center flex items-center justify-center shrink-0 z-[1] mq450:text-3xl">
              Recruiter
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
        <div className="self-stretch h-[101px] relative">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-silver box-border w-full h-full border-[2px] border-solid border-grey hover:box-border hover:border-[2px] hover:border-solid hover:border-blue active:box-border active:border-[2px] active:border-solid active:border-blue" />
          <input
            className="w-full [border:none] [outline:none] font-medium font-titre-grey text-13xl bg-[transparent] absolute h-[calc(100%_-_2px)] top-[2px] left-[15px] text-darkgray text-left inline-block p-0 z-[1] mq450:text-lgi mq1050:text-7xl"
            placeholder="E-mail Address*"
            type="text"
          />
        </div>
        <div className="self-stretch h-[99px] relative">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-silver box-border w-full h-full border-[2px] border-solid border-grey hover:box-border hover:border-[2px] hover:border-solid hover:border-blue active:box-border active:border-[2px] active:border-solid active:border-blue" />
          <input
            className="w-full [border:none] [outline:none] font-medium font-titre-grey text-13xl bg-[transparent] absolute h-full top-[0px] left-[21px] text-darkgray text-left inline-block p-0 z-[1] mq450:text-lgi mq1050:text-7xl"
            placeholder="Password*"
            type="text"
          />
        </div>
      </div>
    </form>
  );
};

export default FrameComponent2;
