import { FunctionComponent, useState, useCallback } from "react";
import POPUPNotification from "./POPUPNotification";
import PortalPopup from "./PortalPopup";
import POPUPMessage from "./POPUPMessage";

const LogicGate: FunctionComponent = () => {
  const [isPOPUPNotificationOpen, setPOPUPNotificationOpen] = useState(false);
  const [isPOPUPMessageOpen, setPOPUPMessageOpen] = useState(false);

  const openPOPUPNotification = useCallback(() => {
    setPOPUPNotificationOpen(true);
  }, []);

  const closePOPUPNotification = useCallback(() => {
    setPOPUPNotificationOpen(false);
  }, []);

  const openPOPUPMessage = useCallback(() => {
    setPOPUPMessageOpen(true);
  }, []);

  const closePOPUPMessage = useCallback(() => {
    setPOPUPMessageOpen(false);
  }, []);

  return (
    <>
      <div className="  flex-1 bg-whitesmoke-100 flex flex-row items-start justify-end pt-[23px] px-[141.3px] pb-[23.1px] box-border gap-[25.8px] max-w-full text-center text-base-1 text-gray-200 font-titre-grey mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[70px] mq750:pr-[70px] mq750:box-border">
        <div className="h-[95.9px] w-[1449.8px] relative bg-whitesmoke-100 hidden max-w-full" />
        <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
          <img
            className="w-[25.7px] h-[30.2px] relative object-cover cursor-pointer z-[1]"
            loading="lazy"
            alt=""
            src="/notf01@2x.png"
            onClick={openPOPUPNotification}
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
          <img
            className="w-[33.2px] h-[30.2px] relative object-cover cursor-pointer z-[1]"
            loading="lazy"
            alt=""
            src="/notf02@2x.png"
            onClick={openPOPUPMessage}
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
          <img
            className="w-[36.2px] h-[30.2px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/notf03@2x.png"
            onClick={openPOPUPMessage}
          />
        </div>
        <div className="w-[50px] flex flex-col items-start justify-start pt-[13.2px] px-0 pb-0 box-border">
          <div className="self-stretch h-[23px] relative tracking-[-0.01em] font-medium flex items-center justify-center z-[1]">
            Orders
          </div>
        </div>
        <img
          className="h-[49.8px] w-[49.8px] relative object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
      </div>
      {isPOPUPNotificationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPNotification}
        >
          <POPUPNotification //onClose={closePOPUPNotification}
           />
        </PortalPopup>
      )}
      {isPOPUPMessageOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPMessage}
        >
          <POPUPMessage //onClose={closePOPUPMessage}
           />
        </PortalPopup>
      )}
    </>
  );
};

export default LogicGate;
