function FooterRtItem({ title }: { title: string }) {
  return (
    <li className="float-right clear-right pl-[4px] pr-0 w-1/2 block mb-0 mt-[25px] ">
      <a href="" className="block text-[#111] text-[15px] leading-[16px] ">
        <span className="whitespace-normal text-[#fff] inline-block max-w-full text-ellipsis">
          {title}
        </span>
      </a>
    </li>
  );
}

export default FooterRtItem;
