import { SingleImgType } from "../../constants/Mobile/SingleImgCard";

function SingleImgCard({ title, url }: SingleImgType) {
  return (
    <div>
      <div className="my-[2px] bg-[#FFF] overflow-auto py-[12px] px-[15px] ">
        {/* Card Title */}
        <div className="pb-[8px] ">
          <h3 className="font-ember font-[700] text-[18px] leading-[1.25]">
            <span className="leading-[1.3em] max-h-[2.6em] block relative w-full overflow-hidden ">
              <span className="h-auto inline-block w-full whitespace-normal ">
                {title}
              </span>
            </span>
          </h3>
        </div>
        {/* Card Body */}
        <div className="relative p-0 ">
          <a href="">
            <img
              src={url}
              alt=""
              className="rounded-[4px] align-top max-w-full "
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SingleImgCard;
