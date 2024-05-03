import { FunctionComponent, useCallback, useState } from "react";

const Nav: FunctionComponent = () => {
    const [isPOPUPNotificationOpen, setPOPUPNotificationOpen] = useState(false);
    const [isPOPUPFREELANCEROpen, setPOPUPFREELANCEROpen] = useState(false);
    const [isPOPUPFREELANCER1Open, setPOPUPFREELANCER1Open] = useState(false);
    const onLogoPitchini1Click = useCallback(() => {
        // Please sync "Home Page" to the project
      }, []);
    
      const openPOPUPFREELANCER1 = useCallback(() => {
        setPOPUPFREELANCER1Open(true);
      }, []);
      const openPOPUPNotification = useCallback(() => {
        setPOPUPNotificationOpen(true);
      }, []);
      const openPOPUPFREELANCER = useCallback(() => {
        setPOPUPFREELANCEROpen(true);
      }, []);
    
  return (
    <section className="self-stretch bg-whitesmoke-100 flex flex-row flex-wrap items-start justify-start pt-[15px] px-[38px] pb-[14.8px] box-border gap-[14.8px] shrink-0 [debug_commit:1de1738] max-w-full text-center text-base-3 text-gray-900 font-titre-grey">
    <div className="h-[50.2px] flex-1 relative min-w-[844px] max-w-full mq450:h-auto mq450:min-h-[50.19999999999982] mq975:min-w-full">
      <div className="absolute top-[0px] left-[150px] w-[1232.9px] flex flex-row items-start justify-end pt-[13.6px] px-[26px] pb-[13.5px] box-border gap-[40.7px] w-1400 mq450:flex-wrap">
        <img
          className="h-[23.1px] w-[20.4px] relative object-contain min-h-[23px] cursor-pointer z-[1]"
          alt=""
          src="/notf012@2x.png"
          onClick={openPOPUPNotification}
        />
        <img
          className="h-[23.1px] w-[25.8px] relative object-contain min-h-[23px] cursor-pointer z-[1]"
          alt=""
          src="/notf021@2x.png"
          onClick={openPOPUPFREELANCER}
        />
        <img
          className="self-stretch w-[29.9px] relative max-h-full object-contain min-h-[23px] z-[1]"
          alt=""
          src="/notf032@2x.png"
        />
        <div className="w-[59.7px] flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0 box-border">
          <div className="self-stretch h-[17.7px] relative tracking-[-0.01em] font-medium flex items-center justify-center shrink-0 min-w-[59.7px] z-[1]">
            Orders
          </div>
        </div>
      </div>
      <img
        className="absolute top-[2.7px] left-[0px] w-[148px] h-[44.8px] object-contain cursor-pointer z-[1]"
        alt=""
        src="/logo-pitchini-12@2x.png"
        onClick={onLogoPitchini1Click}
      />
    </div>
    <img
      className="h-[50.2px] w-[50.2px] relative object-contain min-h-[50px] cursor-pointer"
      alt=""
      src="/mask-group@2x.png"
      onClick={openPOPUPFREELANCER1}
    />
  </section>
  );
};

export default Nav;