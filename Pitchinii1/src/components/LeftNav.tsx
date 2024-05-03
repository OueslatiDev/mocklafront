import React, { FunctionComponent } from "react";
interface UserData {
  id: number;
  last_name: string;
  first_name: string;
  email: string;
  password: string;
  rates?: number;
  creationDate: Date;
  strikesNbr: number;
  status: string;
  nickname?: string;
  role: string;
  resetToken?: string;
  tokenExpiration?: Date;
}
interface MessageAttributes {
  id: number;
  creationDate: Date;
  message: string;
  senderId: number;
  conversationId: number;

}
interface Props {
  user: UserData | undefined;


}

const LeftNav: FunctionComponent<Props> = ({ user }) => {

  return (
    <div className="h-[1307px] w-[214.6px] bg-whitesmoke-300 overflow-hidden shrink-0 flex flex-row items-start justify-start relative gap-[7.5px] [debug_commit:1de1738] mq975:hidden">

      <div className="h-[594px] w-[204.8px] !m-[0] absolute top-[61.4px] left-[calc(50%_-_102.8px)] flex flex-col items-center justify-start gap-[54.6px] z-[1]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[9px]">
          <img
            className="w-[143.7px] h-[143.7px] relative object-contain"
            alt=""
            src="/image3@2x.png"
          />
          <div className="self-stretch relative tracking-[-0.01em] leading-[28.1px] font-semibold mq450:text-xl mq450:leading-[22px] items-center justify-center">
            {user?.first_name}
          </div>
          <div className="w-[186.2px] relative text-xs tracking-[-0.01em] leading-[145.45%] font-light text-gray-1600 flex items-center justify-center whitespace-nowrap">
            {user?.email}
          </div>
        </div>
        <div className="w-[120.8px] flex-1 flex flex-row flex-wrap items-end justify-start py-0 pr-[7.7px] pl-0 box-border gap-[27px_11px] text-left text-sm-5 text-gray-1400 mq450:max-w-[calc(100%_-_8px)]">
          <div
            className="h-[23.1px] w-[22px] relative opacity-[0.29] cursor-pointer"

          >
            <div className="absolute top-[0px] left-[0px] [background:linear-gradient(99.26deg,_#000)] w-[10.2px] h-[13.4px]" />
            <div className="absolute top-[9.7px] left-[11.9px] [background:linear-gradient(99.26deg,_#000)] w-[10.2px] h-[13.4px]" />
            <div className="absolute top-[15px] left-[0px] [background:linear-gradient(99.26deg,_#000)] w-[10.2px] h-[8.1px]" />
            <div className="absolute top-[0px] left-[11.9px] [background:linear-gradient(99.26deg,_#000)] w-[10.2px] h-[8.1px]" />
          </div>
          <div
            className="relative font-medium  !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text]  inline-block opacity-[0.29] min-w-[80px] shrink-0 cursor-pointer"

          >
            Dashboard
          </div>
          <img
            className="h-[25.4px] w-[25px] relative object-contain"
            alt=""
            src="/portfolio-1096059-15@2x.png"
          />
          <div className="relative font-medium inline-block min-w-[62px] shrink-0">
            Portfolio
          </div>
          <img
            className="h-[32.9px] w-[26px] relative object-contain"
            alt=""
            src="/102-1@2x.png"
          />
          <div className="relative font-medium text-gray-1300 inline-block min-w-[70px] shrink-0">
            Find Work
          </div>
          <img
            className="h-[23.2px] w-[26px] relative object-contain"
            alt=""
            src="/inbox-15@2x.png"
          />
          <div className="w-[62px] relative font-medium flex items-center shrink-0">
            Inbox
          </div>
          <img
            className="h-[23.9px] w-[23px] relative object-contain"
            alt=""
            src="/groupe-1@2x.png"
          />
          <div className="relative font-medium inline-block min-w-[62px] shrink-0">
            Contact
          </div>
          <img
            className="h-[23.9px] w-[26px] relative object-contain"
            alt=""
            src="/path-8-1@2x.png"
          />
          <div className="relative font-medium inline-block min-w-[62px] shrink-0">
            Settings
          </div>
          <img
            className="h-[17px] w-[19px] relative"
            alt=""
            src="/-icon-account-login2.svg"
          />
          <div className="relative font-medium inline-block min-w-[55px] shrink-0">
            Log Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
