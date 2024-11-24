import "./Navbar.css";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  return (
    <div>
      <div className="h-[60px] bg-dark-1 flex w-screen overflow-hidden">
        {/* 1/3 */}
        <div className="flex w-fit">
          {/* Logo */}
          <div className="ml-[11px] pt-[4px] h-[60px] flex">
            <a
              href=""
              className="m-[1px] pt-[1px] pl-[6px] pr-[8px] cursor-pointer flex h-full items-center"
            >
              <div className="logo"></div>

              <div className=" mb-[10px] ml-[1px]">
                <span className="text-white text-[13px]  h-[14px] logo-in">
                  .in
                </span>
              </div>
            </a>
          </div>
          {/* Delivery Location */}
          <div className="ml-[2px]">
            <a
              href=""
              className="my-[5px] mr-[2px] px-[9px] flex items-center flex-nowrap cursor-pointer text-[14px]  h-[50px]"
            >
              <div className="location-icon"></div>
              <div className="ml-[3px] mb-[3px] flex flex-col   ">
                <span
                  className="text-[12px]  leading-[15px]  delivery-pin font-thin font-ember tracking-[-0.1px] "
                  style={{ color: "rgb(204, 204, 204)" }}
                >
                  Delivering to Wayanad 673591
                </span>
                <span className="text-[14px]  text-white leading-[15px] font-ember  font-[600]  ">
                  Update location
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* 2/3  Searcher*/}
        <div className="h-full flex-1">
          <div className="py-[10px] pl-[3px] pr-[4px] mx-[10px] flex  flex-1">
            <form
              action=""
              className="rounded-tl-[4px] rounded-bl-[4px]  h-full overflow-y-hidden flex  flex-1"
            >
              <div className=" bg-[#e6e6e6] pl-[5px] h-[40px]   flex items-center relative pr-[5px] border-r-[#c5c5c5] border-r-[1px]">
                <span className="ml-[5px]  text-[#555] mr-[21px]  text-[12px] font-ember  pt-[1px]">
                  All
                </span>

                <IoMdArrowDropdown className=" text-[#555] absolute right-1" />
              </div>

              <div className=" bg-[#ffff] overflow-hidden pl-[8px] w-full">
                <input
                  type="text"
                  className="  h-[38px] outline-none text-[15px]  placeholder:text-[#7e7e7e] placeholder:font-ember  placeholder:font-[300]"
                  placeholder="Search Amazon.in"
                />
              </div>
              <div>
                <div className="nav-search-icon bg-primary-1 rounded-br-[4px] rounded-tr-[4px]"></div>
              </div>
            </form>
          </div>
        </div>
        {/* 3/3 */}
        <div className="  h-[60px] mr-[25px]">
          <div className="mt-[2px] pt-[3px]  h-[55px] flex">
            {/* Languange Selection Section */}

            <a
              href=""
              className="ml-[1px] px-[9px] pb-[11px]  flex flex-col justify-center"
            >
              <div className="flex items-end mt-[19px] ml-[1px]  ">
                <div className="india-flag mr-[2px] mb-[3px] "></div>
                <div className="h-full flex">
                  <h1 className="font-ember text-[14px] text-white font-[600]">
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
                  <span
                    className="text-[12px]  leading-[15px]  delivery-pin font-thin font-ember tracking-[-0.1px] "
                    style={{ color: "rgb(204, 204, 204)" }}
                  >
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
                  <span
                    className="text-[12px]  leading-[15px]  delivery-pin font-thin font-ember tracking-[-0.1px] "
                    style={{ color: "rgb(204, 204, 204)" }}
                  >
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
                    <h1 className="absolute right-[11px] top-[-8px] font-ember font-[600] text-primary">
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
      <div className="h-[39px] bg-dark-2"></div>
    </div>
  );
}

export default Navbar;
