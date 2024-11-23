import "./Navbar.css";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  return (
    <div>
      <div className="h-[60px] bg-dark-1 flex w-screen ">
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
                  Delivering to Indore 453331
                </span>
                <span className="text-[14px]  text-white leading-[15px] font-ember  font-[600]  ">
                  Update location
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* 2/3  Searcher*/}
        <div className="h-full ">
          <div className="py-[10px] pl-[3px] pr-[4px] mx-[10px] flex  ">
            <form
              action=""
              className="rounded-tl-[4px] rounded-bl-[4px]  h-full overflow-y-hidden flex  "
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
                  className="  h-[38px] outline-none text-[15px]  placeholder:text-[#7e7e7e]  placeholder:font-[300]"
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
        <div className="  h-[60px]">
          <div className="mt-[2px] pt-[3px]  h-[55px]">
            <a
              href=""
              className="ml-[1px] px-[9px] pb-[5px]  flex flex-col justify-center"
            >
              <span className="flex items-end mt-[12px] ml-[1px]">
                <div className="india-flag mr-[2px] mb-[1px]"></div>
                <span className="font-ember text-[14px] text-white">EN</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="h-[39px] bg-dark-2"></div>
    </div>
  );
}

export default Navbar;
