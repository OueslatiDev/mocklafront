import { FunctionComponent } from "react";

interface Login1Props {
  title: string;
  description: string;
  imageUrl: string;
}

const Login1: FunctionComponent<Login1Props> = ({ title, description, imageUrl }) => {
  return (
    <div>
      <h1 className="m-0 self-stretch h-[124px] relative text-inherit font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] mq450:text-6xl mq975:text-23xl">
        {title}
      </h1>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[30px] pb-[42px] box-border max-w-full text-6xl mq700:pb-[27px] mq700:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[29px] max-w-full">
          <div className="self-stretch relative leading-[37px] font-medium mq450:text-xl mq450:leading-[29px]">
            {description}
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <img
              className="h-[667px] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src={imageUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login1;
