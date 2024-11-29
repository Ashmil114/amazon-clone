import { BigCardType } from "../../constants/BigCardCarosalData";

function BigCard({
  title,
  url,
  discount,
  event,
  price,
  subprice,
  og_price,
}: BigCardType) {
  return (
    <li className="h-full w-[240px] ml-[12px] first:ml-0 overflow-hidden align-top text-left min-h-full inline-block whitespace-normal tracking-normal m-0">
      <div className="h-full">
        <div className="mb-0 p-0 h-full bg-[#fff] relative mt-0 overflow-hidden rounded-[8px] text-start">
          <a href="" className="pb-[4px] h-full overflow-hidden ">
            {/* Card Img Section */}
            <div className="relative rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[0px] rounded-br-[0px] overflow-hidden ">
              <img
                src={url}
                alt=""
                className="w-full object-contain p-[8px] align-top"
              />
            </div>
            {/* Detail Section */}
            <div className="pt-[8px]  px-[4px] pb-[0px] mb-0 relative font-ember">
              {/* Rating */}
              <div className="min-h-[24px] mb-[4px]">
                <div className="flex flex-wrap gap-y-[4px] gap-x-[6px] items-center">
                  <div className="bg-[#CC0C39] text-[#ffffff] inline-block min-w-fit leading-[12px] rounded-[2px] px-[6px] py-[4px] ">
                    <span className="text-[12px] leading-[16px]">
                      {discount}
                    </span>
                  </div>
                  <div className="text-[#CC0C39] flex-1 font-[700] inline-block leading-[12px]">
                    <span className="text-[12px] leading-[16px]">{event}</span>
                  </div>
                </div>
              </div>
              {/* Price */}
              <div className="pb-[4px] flex flex-wrap items-center">
                <div className=" text-[18px] leading-[24px] text-[#0f1111] relative flex ">
                  <span className="text-[18px] leading-[24px] text-[#0f1111] mr-[4px]">
                    <span className="top-[-.5em] text-[10px] leading-[16px] relative">
                      $
                    </span>
                    <span className="text-[18px] leading-[24px]">{price}</span>
                    <span className="top-[-.5em] text-[10px] leading-[16px] relative">
                      {subprice}
                    </span>
                  </span>
                  <div className=" flex flex-wrap items-center mb-0">
                    <span className="mr-[3px] text-[#565959] text-[12px] leading-[16px]">
                      List:
                    </span>
                    <span className="inline-block text-[12px] leading-[16px] text-[#565959] line-through">
                      {og_price}
                    </span>
                  </div>
                </div>
              </div>
              {/* Name */}
              <span className="text-[#0F1111] inline-block font-ember pb-[4px] max-h-[1.3em] leading-[1.3em] text-ellipsis overflow-hidden min-w-[60px] w-full text-[13px] whitespace-nowrap">
                {title}
              </span>
            </div>
          </a>
        </div>
      </div>
    </li>
  );
}

export default BigCard;
