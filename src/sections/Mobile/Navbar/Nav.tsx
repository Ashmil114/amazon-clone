import "./Nav.css";

const data = [
  "Deals",
  "Amazon Basics",
  "Best Sellers",
  "Livestreams",
  "Music",
  "Books",
  "Video",
  "New Releases",
  "Home",
  "PC",
  "Health & Household",
];

// Nav 3/4 Items Component
const Item = ({ title }: { title: string }) => {
  return (
    <a
      href=""
      className="text-[#161d26] mb-[20px] ml-[15px] pr-[3px] leading-[15px] text-[15px] font-ember relative float-left whitespace-nowrap "
    >
      {title}
    </a>
  );
};

function Nav() {
  return (
    <header>
      <div className="relative text-[12px] leading-[1em] min-w-[200px] font-ember ">
        {/* 1/4 */}
        <div className="nav-logobar">
          <div className="flex flex-row flex-nowrap flex-shrink-0 relative w-auto ">
            <a href="" className="float-left p-[14px] ">
              <i className="nav-burger-icon"></i>
            </a>
            <div className="ml-auto relative float-left mt-[13px]  ">
              <a href="" className="clear-both inline-block cursor-pointer ">
                <span className="nav-logo"></span>
              </a>
            </div>
          </div>
          <div className="flex flex-row-reverse flex-wrap overflow-hidden min-w-[60px] relative w-auto ">
            <div className="order-2">
              <a
                href=""
                className="flex ml-[5px] leading-[48px] text-[13px] text-[#fff] "
              >
                Sign in ›
              </a>
            </div>
            <a
              href=""
              className="order-1 flex pt-[9px] pb-[12px] pl-[4px] pr-0 relative w-[39px] "
            >
              <i className="nav-user-icon">your account</i>
            </a>
            <a
              href=""
              className="pl-[7px] order-none flex pt-[10px] pr-[18px] pb-[11px]"
            >
              <div className="order-2 w-[37px] ">
                <span className="nav-sm-cart-icon">
                  <span className="pl-[16.7px]  text-[16px] text-[#fff] text-center leading-[10px] font-ember font-[700] ">
                    0
                  </span>
                </span>
              </div>
            </a>
          </div>
        </div>
        {/* 2/4 */}
        <div className="flex h-[50px] ">
          <form action="" className="nav-form">
            <div className="w-auto overflow-hidden whitespace-nowrap ">
              <div className="nav-form-input-field">
                <input
                  type="text"
                  placeholder="Search Amazon"
                  className="placeholder:text-[#868686]"
                />
              </div>
            </div>
            <div className="nav-form-right">
              <div className="btn-container">
                <input type="submit" />
                <i></i>
              </div>
            </div>
          </form>
        </div>
        {/* 3/4 */}
        <div className="h-[45px] flex overflow-x-scroll pt-[12px] bg-[#ff7a26] w-full overflow-hidden">
          {data.map((title, i) => (
            <Item title={title} key={i} />
          ))}
        </div>
        {/* 4/4 */}
        <div className="bg-[#ffa64d] h-[44px] w-full flex overflow-hidden ">
          <div className="float-left py-[12px] px-[10px] h-full invert flex ">
            <div className="nav-loc-icon"></div>
            <div className="float-left h-[20px] inline-block flex-grow">
              <span className="float-left clear-both text-[13px] leading-[20px] text-[#fff] inline-block font-ember w-full overflow-hidden whitespace-nowrap text-ellipsis">
                Deliver to India ⌵
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
