import { NoTitleType } from "../../constants/Mobile/NoTitleCard";

function NoTitleCard4_4(props: NoTitleType) {
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
        <div className="relative ">
          <div className="notitle-card-body-wrapper ">
            {props.urls.map((url) => (
              <a href="" className="">
                <div className="relative ">
                  <img
                    src={url}
                    alt=""
                    className="h-full  object-contain w-full p-[8px] align-top aspect-square  max-w-full max-h-full bottom-0 top-0 right-0 left-0"
                  />
                </div>
              </a>
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

export default NoTitleCard4_4;
