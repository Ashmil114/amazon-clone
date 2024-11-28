function SingleItemCard({
  title,
  url,
  footer,
}: {
  title: string;
  url: string;
  footer: string;
}) {
  return (
    <div className="px-[10px] basis-[290px] z-20  flex-grow flex-shrink-0 text-[13px] h-[420px] leading-[19px] max-w-[400px] min-h-[420px] min-w-[290px] ">
      <div className="pt-[20px] pb-[15px] flex h-full flex-col overflow-hidden bg-[#ffff]">
        {/* Card Title Section */}
        <div className="px-[20px] mb-[10px]">
          <h2 className="text-[21px] font-ember leading-[27.3px] max-h-[54.6px] text-ellipsis font-[700]">
            {title}
          </h2>
        </div>
        {/* Card Image Section */}

        <div className="mb-[44px] px-[20px]  h-[275px]  flex-grow ">
          <div className="h-[100%] w-full relative overflow-hidden">
            <img
              src={url}
              alt=""
              className="h-auto max-w-none m-auto overflow-clip   absolute align-top left-[-9999px] right-[-9999px]  pl-[2px] "
            />
          </div>
        </div>
        <div className="px-[20px]    relative">
          <span className="font-ember absolute bottom-[5px] text-[13px] text-[#007185] leading-[1.3em] max-h-[1.3em] overflow-hidden">
            {footer}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SingleItemCard;
