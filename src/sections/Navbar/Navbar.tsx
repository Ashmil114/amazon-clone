import "./Navbar.css";
import { IoMdArrowDropdown } from "react-icons/io";

const Item = ({ title }: { title: string }) => {
  return (
    <div className="h-full w-fit  flex items-center ml-[1px] ">
      <a href="" className="   ">
        <div className="px-[8px] py-[9px] flex items-center">
          <span className="text-[14px] text-white mb-[2px] font-ember font-[400]">
            {title}
          </span>
        </div>
      </a>
    </div>
  );
};
function Navbar() {
  return (
    <div>
      <div className="h-[60px] first-header flex 2xl:mx-[4px]">
        {/* 1/3 */}
        <div className="flex w-fit">
          {/* Logo */}
          <div className="ml-[11px] pt-[4px] h-[60px] flex">
            <a
              href=""
              className="m-[1px] pt-[1px] pl-[6px] pr-[8px] cursor-pointer flex h-full items-center"
            >
              <div className="logo"></div>

              {/* <div className=" mb-[10px] ml-[1px]">
                <span className="text-white text-[13px]  h-[14px] logo-in">
                  .in
                </span>
              </div> */}
            </a>
          </div>
          {/* Delivery Location */}
          <div className="ml-[1px]">
            <a
              href=""
              className="my-[5px] mr-[2px] px-[9px] flex items-center flex-nowrap cursor-pointer text-[14px]  h-[50px]"
            >
              <div className="location-icon"></div>
              <div className="ml-[3px] mb-[3px] flex flex-col   ">
                <span
                  className="text-[12px]  leading-[15px]  delivery-pin font-[400] font-ember "
                  style={{ color: "rgb(204, 204, 204)" }}
                >
                  Deliver to
                </span>
                <span className="text-[14px]  text-white leading-[15px] font-ember  font-[600]  ">
                  India
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* 2/3  Searcher*/}
        <div className="h-full flex-1 ">
          <div className="py-[10px] pl-[3px] pr-[4px] mx-[10px]  flex  flex-1">
            <form
              action=""
              className="rounded-tl-[4px] rounded-bl-[4px]  h-full overflow-y-hidden flex  flex-1"
            >
              <div className=" bg-[#e6e6e6] pl-[5px] h-[40px]   flex items-center relative pr-[6px] border-r-[#c5c5c5] border-r-[1px]">
                <span className="ml-[6px]  text-[#555] mr-[20px]  text-[12px] font-ember  pt-[1px]">
                  All
                </span>

                <IoMdArrowDropdown className=" text-[#555] absolute right-1" />
              </div>

              <div className=" bg-[#ffff] overflow-hidden pl-[8px] w-full">
                <input
                  type="text"
                  className="  h-[38px] outline-none text-[15px]  placeholder:text-[#6d6c6c] placeholder:font-ember  placeholder:font-[400]"
                  placeholder="Search Amazon"
                />
              </div>
              <div>
                <div
                  className="nav-search-icon rounded-br-[4px] rounded-tr-[4px]"
                  style={{ backgroundColor: "rgb(169, 23, 111)" }}
                ></div>
              </div>
            </form>
          </div>
        </div>
        {/* 3/3 */}
        <div className="  h-[60px] mr-[10px]">
          <div className="mt-[2px] pt-[3px]  h-[55px] flex">
            {/* Languange Selection Section */}

            <a
              href=""
              className="ml-[1px] px-[9px] pb-[11px]  flex flex-col justify-center"
            >
              <div className="flex items-end mt-[19px] ml-[1px]  ">
                <div className="india-flag mr-[2px] mb-[3px] "></div>
                <div className="h-full flex ">
                  <h1 className="font-ember text-[14px] text-white font-[600] ">
                    EN
                  </h1>
                  <div className="mt-[6px] ml-[-1.5px] ">
                    <IoMdArrowDropdown className=" text-[#a7acb2] " />
                  </div>
                </div>
              </div>
            </a>

            {/* Account & Lists */}

            <a
              href=""
              className="px-[6px] pb-[8px]  flex flex-col justify-center"
            >
              <div className="flex items-end mt-[16px] ml-[1px]  ">
                <div className=" mb-[10px] flex flex-col   ">
                  <span className="text-[12px]  leading-[15px] text-white delivery-pin  font-ember font-[400]">
                    Hello, sign in
                  </span>
                  <div className="flex">
                    <span className="text-[14px]  text-white leading-[15px] font-ember  font-[600]  ">
                      Account & Lists
                    </span>
                    <div className="pt-[1px] ml-[1px] ">
                      <IoMdArrowDropdown className=" text-[#a7acb2] " />
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Returns & Orders */}
            <a
              href=""
              className="px-[9px] pb-[11px]  flex flex-col justify-center"
            >
              <div className="flex items-end mt-[16px] ml-[1px]  ">
                <div className=" mb-[10px] flex flex-col   ">
                  <span className="text-[12px]  leading-[15px] text-white delivery-pin font-thin font-ember  ">
                    Returns
                  </span>
                  <div className="flex">
                    <span className="text-[14px]  text-white leading-[15px] font-ember  font-[600]  ">
                      & Orders
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* Cart */}
            <a
              href=""
              className="px-[10px] pb-[8px]  flex flex-col justify-center"
            >
              <div className="flex items-end mt-[16px] ml-[1px]  ">
                <div className=" mb-[10px] flex    ">
                  <div className="nav-cart-icon relative">
                    <h1 className="absolute right-[11px] top-[-8px] font-ember font-[600] text-white">
                      0
                    </h1>
                  </div>
                  <div className="flex mt-[12px]">
                    <span className="text-[14px]  text-white leading-[15px] font-ember  font-[600]  ">
                      Cart
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="h-[39px] second-header flex">
        <div className="h-full w-fit pl-[11px] flex items-center ">
          <a href="" className="   ">
            <div className="px-[9px] py-[8px] flex items-center">
              <div className="second-nav-burger-icon"></div>
              <span className="text-[14px] ml-[5px] font-ember text-white font-[600]">
                All
              </span>
            </div>
          </a>
        </div>

        <div className="flex gap-[1px]">
          <Item title="Today's Deals" />
          <Item title="Customer Service" />
          <Item title="Registry" />
          <Item title="Gift Cards" />
          <Item title="Sell" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
