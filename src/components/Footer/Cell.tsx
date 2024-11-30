type cellType = {
  title: string;
  items: string[];
};
function Cell({ title, items }: cellType) {
  return (
    <div className="table-cell px-[10px] py-0 leading-[106%] text-[#333] align-top ">
      <div className="font-[700] text-[#fff] text-[16px] mt-[6px] mb-[14px] whitespace-nowrap">
        {title}
      </div>
      <ul className="text-[14px] ">
        {items.map((item, index) => (
          <li
            className="mb-[10px] whitespace-nowrap first:pt-[1px] "
            key={index}
          >
            <a href="" className="text-[#ddd] whitespace-normal ">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cell;
