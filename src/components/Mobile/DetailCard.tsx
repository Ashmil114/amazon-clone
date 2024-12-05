import { DetailCardType } from "../../constants/Mobile/DetailCard";

function DetailCard(props: DetailCardType) {
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
        <div className="relative p-0 ">
          {/* Single item */}
          {props.items.map((item, index) => (
            <div className="mb-[13px] last:mb-0" key={index}>
              <a href="" className="flex ">
                {/* Image */}
                <div className="flex-1 relative ">
                  <img
                    src={item.url}
                    alt=""
                    className="h-full object-contain w-full p-[4px] aspect-square bottom-0 top-0 left-0 right-0 max-h-full max-w-full "
                  />
                </div>
                {/* Details */}
                <div className="basis-[70%] ml-[12px] font-ember">
                  <span className="text-[#0f1111]">
                    <span className="leading-[1.3em] max-h-[2.6em] block relative w-full overflow-hidden ">
                      <span className="h-[2.6em] inline-block w-full whitespace-normal ">
                        {item.title}
                      </span>
                    </span>
                  </span>
                  <div className="flex">
                    <span className="text-[18px] leading-[24px] text-[#0f1111] mr-[4px]">
                      <span className="top-[-.5em] text-[10px] leading-[16px] relative">
                        $
                      </span>
                      <span className="text-[18px] leading-[24px]">
                        {item.price}
                      </span>
                      <span className="top-[-.5em] text-[10px] leading-[16px] relative">
                        {item.subprice}
                      </span>
                    </span>
                    {item.ogprice ? (
                      <div className=" flex flex-wrap items-end mb-0 ">
                        <span className="mr-[3px] text-[#565959] text-[13px] leading-[1.35]">
                          List:
                        </span>

                        <span className="inline-block text-[13px] leading-[1.35] text-[#565959] line-through ml-[1px]">
                          ${item.ogprice}
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
