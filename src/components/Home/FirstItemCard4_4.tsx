import SmallItemCard from "./SmallItemCard";

type ItemType = {
  title: string;
  images: {
    url: string;
    title: string;
  }[];
  footer: string;
};

function FirstItemCard4_4({ title, images, footer }: ItemType) {
  return (
    <div className="px-[10px] basis-[290px] z-20  flex-grow flex-shrink-0 text-[13px] h-[420px] leading-[19px] max-w-[400px] min-h-[420px] min-w-[290px] ">
      <div className="pt-[20px] pb-[15px] flex flex-col h-full overflow-hidden bg-[#ffff]">
        {/* Card Title Section */}
        <div className="px-[20px] mb-[10px]">
          <h2 className="text-[21px] font-ember leading-[27.3px] max-h-[54.6px] text-ellipsis font-[700]">
            {title}
          </h2>
        </div>
        {/* Card Image Section */}

        <div className="mb-[44px] px-[20px] h-[275px]   flex-grow">
          {/* First Row */}
          <div className="mb-[8px] h-[50%] overflow-hidden flex justify-between">
            {/* Small Card */}
            <SmallItemCard url={images[0].url} title={images[0].title} />
            <SmallItemCard url={images[1].url} title={images[1].title} />
          </div>

          {/* Second Row */}
          <div className=" h-[50%] overflow-hidden flex justify-between">
            <SmallItemCard url={images[2].url} title={images[2].title} />
            <SmallItemCard url={images[3].url} title={images[3].title} />
          </div>
        </div>
        <div className="px-[20px]    relative">
          <span className="font-ember absolute bottom-[5px] text-[13px] text-[#007185] leading-[16.9px] max-h-[16.9px] overflow-hidden">
            {footer}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FirstItemCard4_4;
