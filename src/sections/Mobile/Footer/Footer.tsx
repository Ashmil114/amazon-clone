import FooterLfItem from "../../../components/Mobile/FooterLfItem";
import FooterRtItem from "../../../components/Mobile/FooterRtItem";
import { listItem } from "../../../constants/Mobile/Footer";
import "./Footer.css";

const Footer3_4SItem = ({ title }: { title: string }) => {
  return (
    <li className="inline-flex ">
      <a
        href=""
        className="text-[#ccc] inline-block  px-[10px] text-[11px] leading-[8px] font-ember "
      >
        {title}
      </a>
    </li>
  );
};

function Footer() {
  return (
    <footer className="block">
      {/* mb-[2px] put last */}
      <div className="bg-[#0D141E] pb-[35px]   relative w-full min-w-[200px] font-[12px] font-ember leading-[1em] ">
        {/* Top of page */}
        <a
          href=""
          className="h-[50px] bg-[#37475A] pt-[1px] block text-center border-b-[#cdcdcd]"
        >
          <i className="footer-top-arrow"></i>
          <span className="text-[#fff] font-ember block text-[11px] leading-[30px] uppercase ">
            Top of page
          </span>
        </a>
        {/* List Section */}
        <ul className="m-0 pt-0 px-[20px] pb-[25px] bg-[#232F3E] overflow-hidden">
          {listItem.map((ele) =>
            ele.side === "Right"
              ? ele.items.map((item, i) => (
                  <FooterRtItem key={i} title={item} />
                ))
              : ele.items.map((item, i) => (
                  <FooterLfItem key={i} title={item} />
                ))
          )}
        </ul>
        {/* End Section */}
        {/* 1/4 */}

        <div className="pt-[25px] text-center pb-[12px] leading-[1em] font-ember">
          <a
            href=""
            className="inline-flex text-[14px] px-[1em] py-[1em] text-left "
          >
            <div className="footer-lang-icon-sm"></div>
            <span className="text-[#CCC] mt-[2px]">English</span>
          </a>

          <a
            href=""
            className="inline-flex text-[14px] px-[1em] py-[1em] text-left "
          >
            <div className="text-[#fff] mx-[.5em] ">$</div>
            <span className="text-[#CCC]">USD - U.S. Dollar</span>
          </a>
          <a
            href=""
            className="inline-flex text-[14px] px-[1em] py-[.9em]  text-left "
          >
            <div className="footer-flag-icon-sm"></div>
            <span className="text-[#CCC] mt-[-1px]">United States</span>
          </a>
        </div>
        {/* 2/4 */}
        <div className="m-0 py-[25px] text-[#fff] text-[15px] text-center leading-[20px] mt-[-1px]">
          Already a customer?
          <a href="" className="pl-[5px] ">
            Sign in
          </a>
        </div>
        {/* 3/4 */}
        <ul className="mb-[10px] mt-[-1px] leading-[15px] text-center ml-0 mr-0 min-h-[11px] ">
          <Footer3_4SItem title="Conditions of Use" />
          <Footer3_4SItem title="Privacy Notice" />
          <Footer3_4SItem title="Consumer Health Data Privacy Disclosure" />
          {/* <div className="leading-[8px] mt-[1px] ml-[-2px]"> */}
          <span className="px-[1px]">
            <Footer3_4SItem title="Your Ads Privacy Choices" />
          </span>
          <li className="footer-white-blue-sm-btn pl-[10px]  mt-[1px] mr-[3px]"></li>
          {/* </div> */}
        </ul>
        <div className="text-[#ccc] text-center text-[11px] font-ember mt-[-1px]">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </div>
        {/* Spacer */}
        <div className="text-center text-[10px] mt-[15px] "></div>
      </div>
    </footer>
  );
}

export default Footer;
