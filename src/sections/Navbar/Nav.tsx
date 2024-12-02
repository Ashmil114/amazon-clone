import "./Nav.css";
function Nav() {
  return (
    <header>
      <div className="nav-container">
        {/* First Nav */}
        <div className="first-nav h-[60px] flex flex-row flex-nowrap w-full z-[5]">
          {/* Nav left */}
          <div className="h-[60px] flex w-auto">
            {/* Logo */}
            <div className="xl:ml-[11px] w-auto pt-[4px] flex relative leading-0 h-full">
              <a
                href=""
                className="flex pt-[1px] pr-[8px] pl-[6px] m-[1px] h-[50px] w-full cursor-pointer"
              >
                <span className="logo mt-[11px]"></span>
              </a>
            </div>
            <div className="xl:ml-[2px] w-auto p-0 m-0 h-[60px] flex overflow-hidden">
              <span className="flex w-fit ">
                <a
                  href=""
                  className="px-[9px] py-0 my-[5px] mr-[2px] ml-0 flex flex-row flex-nowrap w-fit h-auto items-center overflow-hidden text-[#d6d6d6]"
                >
                  <div className="location-icon"></div>
                  <div className="ml-[3px] flex flex-col flex-nowrap">
                    <span className="text-[#ccc] mt-0 pr-0 text-[12px] leading-[14px] h-[14px] font-ember inline-block whitespace-nowrap">
                      Deliver to
                    </span>
                    <span className="pb-[1px] pr-0 text-[#fff] text-[14px] leading-[15px] font-ember font-[700] inline-block whitespace-nowrap  ">
                      India
                    </span>
                  </div>
                </a>
              </span>
            </div>
          </div>
          {/* Nav Fill */}
          <div className="h-[60px] flex flex-grow flex-shrink basis-auto overflow-visible w-auto whitespace-nowrap ">
            <div className="xl:mx-[10px]  mx-[6px] my-0 py-[10px] pr-[4px] pl-[3px] h-[60px] flex flex-grow flex-shrink basis-auto whitespace-nowrap  overflow-hidden w-auto ">
              <div></div>
              <form
                action=""
                className="flex flex-grow flex-shrink basis-0 h-[40px] mb-0"
              >
                {/* All section */}
                <div className="flex h-auto w-auto whitespace-nowrap ">
                  <div>
                    <div className="seacher-all flex relative bg-[#e6e6e6] h-[40px] m-0 pl-[5px] overflow-hidden ">
                      <div className="relative float-left overflow-hidden top-[3px] ">
                        <span className="block overflow-hidden whitespace-nowrap text-ellipsis text-[#555] text-[12px] leading-[33px] mr-[21px] ml-[5px] min-w-[19px] font-ember">
                          All
                        </span>
                        <i className="searcher-arrow"></i>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Input Section */}
                <div className="flex flex-grow flex-shrink basis-0 h-auto w-auto whitespace-nowrap">
                  <div className="flex flex-grow flex-shrink basis-0 border-t-[1px] border-solid border-t-transparent h-[40px] bg-[#fff] ">
                    <div className="relative h-full w-full ">
                      <input
                        type="text"
                        placeholder="Search Amazon"
                        className="flex  w-full leading-[15px] pt-[7px] pr-[10px] pb-[10px] m-0 border-0 h-[38px] text-[15px] text-[#111]  outline-0 indent-[8px] align-middle font-ember placeholder:text-[#747373]"
                      />
                    </div>
                  </div>
                </div>
                {/* Search Icon Section */}
                <div className="flex h-auto w-auto ">
                  <div className="flex bg-[#a9176f] w-[45px] h-[40px] overflow-hidden cursor-pointer rounded-tr-[4px] rounded-br-[4px] ">
                    <span className="search-icon"></span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Nav Right */}
          <div className="h-[60px] flex w-auto ">
            <div className="flex mt-[2px] pt-[3px] ">
              <a
                href=""
                className="mr-0 ml-[1px] pl-[9px] pb-[5px] pr-[9px] flex flex-shrink-0 flex-col flex-nowrap justify-center h-[50px] overflow-hidden leading-[44px] cursor-pointer"
              >
                <span className="pb-[2px] pr-[8px] flex items-center h-[14px] leading-[14px] "></span>
                <span className="ml-[1px] flex items-center p-0 m-0 text-[#fff] text-[14px] leading-[15px] font-ember font-[700] whitespace-nowrap ">
                  <span className="nav-lang-icon"></span>
                  <div>EN</div>
                  <span className="nav-lang-arrow-icon"></span>
                </span>
              </a>
              <a
                href=""
                className="lg:ml-[2px] px-[9px] flex relative items-start pb-[5px] justify-center h-[50px] overflow-hidden leading-[44px] cursor-pointer"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
