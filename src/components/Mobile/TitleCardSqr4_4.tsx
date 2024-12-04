import { TitleData4_4Type } from "../../constants/Mobile/TitleCard4_4Data";
import SmallInsideCard from "./SmallInsideCard";

function TitleCardSqr4_4(props: TitleData4_4Type) {
  return (
    <div>
      <div className="my-[2px] bg-[#FFF] overflow-auto py-[12px] px-[15px] ">
        {/* Card Title */}
        <div className="pb-[8px] ">
          <h3 className="font-ember font-[700] text-[18px] leading-[1.25]">
            <span className="leading-[1.3em] max-h-[2.6em] block relative w-full overflow-hidden ">
              <span className="h-auto inline-block w-full whitespace-normal ">
                {props.title}
              </span>
            </span>
          </h3>
        </div>
        {/* Card Body */}
        <div className="p-0 relative ">
          <div className="card-body-wrapper">
            {/* Inside sm card */}
            {props.item.map((it, i) => (
              <SmallInsideCard {...it} key={i} />
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="pt-[13px] font-ember ">
          <div>
            <a href="" className="text-[#007185]">
              <span className="leading-[1.3em] max-h-[1.3em] block relative w-full overflow-hidden ">
                <span className="h-auto inline-block w-full whitespace-normal">
                  {props.footer}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleCardSqr4_4;
