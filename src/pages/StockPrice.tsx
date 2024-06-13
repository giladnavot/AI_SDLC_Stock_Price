import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent1";

const StockPrice: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[417px] box-border gap-[299px] leading-[normal] tracking-[normal] mq450:gap-[75px] mq750:gap-[149px]">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/backgroundimage@2x.png"
      />
      <header className="self-stretch bg-gold-200 flex flex-row items-start justify-start pt-[13px] px-[33px] pb-2.5 box-border top-[0] z-[99] sticky max-w-full text-left text-5xl text-crimson font-delivery">
        <div className="h-14 w-[1440px] relative bg-gold-200 hidden max-w-full" />
        <b className="w-[414px] relative inline-block shrink-0 whitespace-nowrap max-w-full z-[2]">
          Stock Price Portal
        </b>
      </header>
      <FrameComponent />
    </div>
  );
};

export default StockPrice;
