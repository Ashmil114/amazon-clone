import { Fragment } from "react/jsx-runtime";
import FooterLfItem from "../../../components/Mobile/FooterLfItem";
import FooterRtItem from "../../../components/Mobile/FooterRtItem";
import { listItem } from "../../../constants/Mobile/Footer";
import "./Footer.css";
function Footer() {
  return (
    <footer className="block">
      <div className="bg-[#0D141E] pb-[35px] relative w-full min-w-[200px] font-[12px] font-ember leading-[1em] ">
        {/* Top of page */}
        <a
          href=""
          className="h-[50px] bg-[#37475A] pt-[5px] block text-center border-b-[#cdcdcd]"
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
      </div>
    </footer>
  );
}

export default Footer;
