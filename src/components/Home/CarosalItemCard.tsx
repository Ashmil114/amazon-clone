import "./styles.css";
export type CarosalType = {
  title: string;
  subtitle: string;
  image: string[];
};

const ImageItem = ({ url }: { url: string }) => {
  return (
    <li className="inline-block mr-[10px] text-center min-w-[145px] max-w-[270px] max-h-[200px]  overflow-hidden relative whitespace-nowrap min-h-[200px] ">
      <a
        href=""
        className="inline-flex justify-center items-center text-center  relative min-w-[145px] "
      >
        <img
          src={url}
          alt=""
          className="w-auto h-auto max-w-[270px] max-h-[200px] align-middle  "
        />
      </a>
    </li>
  );
};
function CarosalItemCard({ title, subtitle, image }: CarosalType) {
  return (
    <div className="px-[10px]">
      <div className="bg-[#fff] mb-0 ">
        <div className="px-[20px] py-[10px] relative group">
          {/* Title */}
          <div className="mt-[10px] overflow-hidden whitespace-nowrap flex">
            <h2 className="w-auto text-[21px] leading-[31.5px] overflow-hidden text-ellipsis pb-0 font-ember font-[700]">
              <span>{title}</span>
            </h2>
            <span className="w-auto text-right text-[14px] font-ember align-middle pl-[15px] leading-[35px] overflow-hidden text-ellipsis">
              <a href="" className="text-[#007185] ">
                {subtitle}
              </a>
            </span>
          </div>
          {/* Carosal body */}
          <div className="w-full relative overflow-hidden mb-0">
            <div className="w-full min-h-[220px] whitespace-nowrap overflow-hidden relative overflow-x-scroll carosalitemcard">
              <ul className="inline-block relative  mb-[14px] left-0 ">
                {/* Single img */}
                {image.map((img, index) => (
                  <ImageItem key={index} url={img} />
                ))}
              </ul>
            </div>
          </div>
          {/* <span className="absolute h-[6px] bottom-[10px] left-[20px] w-full hidden group-hover:block">
            <span className="h-0 bg-[#eee] rounded-[4px] w-full relative top-[2px] m-0">
              <span className="w-[702px] left-0 bg-[#aaa] h-[6px] absolute rounded-[6px] top-[-2px] inline "></span>
            </span>
          </span> */}
        </div>
      </div>
    </div>
  );
}

export default CarosalItemCard;
