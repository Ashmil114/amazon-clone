import { ReactNode } from "react";

function End({ section }: { section: ReactNode[] }) {
  return (
    <div>
      <div className="">
        {/* End text */}
        <div className="text-[#555] flex text-[13px]  relative whitespace-nowrap z-10">
          <div className="flex-grow relative end-arrow"></div>
          <span className="overflow-hidden px-[5px] text-ellipsis  font-ember leading-[1.35]">
            You've reached the end. Keep exploring!
          </span>
          <div className="flex-grow relative end-arrow"></div>
        </div>

        {section}
      </div>
    </div>
  );
}

export default End;
