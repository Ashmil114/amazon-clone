type smallItemCardType = {
  url: string;
  title: string;
};

function SmallItemCard({ url, title }: smallItemCardType) {
  return (
    <div className="pb-[36px] w-[47.5%] relative h-full leading-[16px] inline-block ">
      <div className="h-full w-full relative overflow-hidden ">
        <img
          src={url}
          alt=""
          className="h-full max-w-none m-auto overflow-clip   absolute align-top left-[-9999px] right-[-9999px]  "
        />
      </div>
      <div className=" h-[36px] align-middle inline-block ">
        <span className="text-[12px]  text-ellipsis overflow-hidden max-h-[36px]  leading-[18px] font-ember">
          {title}
        </span>
      </div>
    </div>
  );
}

export default SmallItemCard;
