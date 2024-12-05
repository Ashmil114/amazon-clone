function FooterLfItem({ title }: { title: string }) {
  return (
    <li className="w-1/2 block mb-0 pr-[4px] mt-[25px] ">
      <a href="" className="block text-[#111] text-[15px] leading-[16px]">
        <span className="whitespace-normal text-[#fff] inline-block max-w-full text-ellipsis">
          {title}
        </span>
      </a>
    </li>
  );
}

export default FooterLfItem;
