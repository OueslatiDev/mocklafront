import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type SignInWithGoogleContainerType = {
  /** Style props */
  propBorder?: CSSProperties["border"];
  propColor?: CSSProperties["color"];

  /** Action props */
  onGoogleFormInputClick?: () => void;
  onSIGNINTextClick?: () => void;
  handleLogin?: () => void;

};

const SignInWithGoogleContainer: FunctionComponent<
  SignInWithGoogleContainerType
> = ({ propBorder, propColor, onGoogleFormInputClick, onSIGNINTextClick,handleLogin }) => {
  const googleFormInputStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const sIGNINStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full">
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-[79px] relative" onClick={handleLogin}>
        <div
          className="absolute top-[0px] left-[0px] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-full h-full cursor-pointer border-[3px] border-solid border-gray-4 hover:box-border hover:border-[3px] hover:border-solid hover:border-blue"
          onClick={onGoogleFormInputClick}
          style={googleFormInputStyle}
        />
        <div
          className="absolute top-[27px] left-[163px] text-5xl tracking-[-0.01em] leading-[29.6px] font-medium font-montserrat text-gray-4 text-center flex items-center justify-center w-[313.4px] h-[25.5px] cursor-pointer z-[1] hover:text-blue mq450:text-lgi"
          onClick={onSIGNINTextClick}
          style={sIGNINStyle}
        >
          SIGN IN
        </div>
      </button>
      <button className="cursor-pointer py-6 pr-12 pl-[53px] bg-white self-stretch rounded-md shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border flex flex-row flex-wrap items-start justify-center gap-[6px] max-w-full border-[3px] border-solid border-gray-4 mq700:pl-[26px] mq700:pr-6 mq700:box-border">
        <div className="h-[79px] w-[639px] relative rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[3px] border-solid border-gray-4" />
        <img
          className="h-[31px] w-[31px] relative object-contain min-h-[31px] z-[1]"
          alt=""
          src="/googleicon2048x2048czn3g8x8-1@2x.png"
        />
       <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[322px] max-w-full">
  <div className="self-stretch relative text-5xl tracking-[-0.01em] font-medium font-montserrat text-center z-[1] mq450:text-lgi">
    SIGN IN WITH YOUR GOOGLE ACCOUNT
  </div>
</div>

      </button>
    </div>
  );
};

export default SignInWithGoogleContainer;
