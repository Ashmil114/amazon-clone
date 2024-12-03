import { BigCardCarosalType } from "../../constants/BigCardCarosalData";
import BigCard from "./BigCard";

function BigCardCarosal({ title, subtitle, items }: BigCardCarosalType) {
  return (
    <div className="flex-grow basis-full h-auto min-h-0 px-[10px] min-w-[290px] w-full">
      <div className="bg-[#FF6200] max-w-none ">
        <div className="p-[15px] ">
          {/* Title */}
          <div className="flex gap-[12px] ">
            <div className="mb-[12px] p-0 ">
              <h3 className="text-[20px] leading-[26px] font-ember font-[700] text-[#FFFFFF] ">
                <span className="text-start">{title}</span>
              </h3>
            </div>
            <a href="" className="mt-[5px] ">
              <span className="underline text-[15px] text-[#ffffff] font-ember overflow-hidden text-ellipsis">
                {subtitle}
              </span>
            </a>
          </div>
          {/* Body */}
          <div>
            <div>
              <div className="overflow-hidden relative m-0">
                <div className="w-full ">
                  <div className="h-full relative">
                    <div className="m-0 overflow-hidden min-h-[1px] relative ">
                      <div className="h-[305px] w-full overflow-hidden ">
                        <ol className="h-[305px] m-0 whitespace-nowrap overflow-x-visible tracking-[-4px] ">
                          {/* Big Card */}
                          {items.map((item, index) => (
                            <BigCard key={index} {...item} />
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigCardCarosal;
