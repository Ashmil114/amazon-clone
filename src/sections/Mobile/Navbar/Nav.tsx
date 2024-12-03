import "./Nav.css";
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
          <div></div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
