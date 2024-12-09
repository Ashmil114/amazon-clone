import Cell from "../../components/Footer/Cell";
import "./Footer.css";

const Spacer = () => {
  return <div className="table-cell px-[10px] w-[10%]"></div>;
};

const TbSpacer = () => {
  return <div className="w-[3%] px-[15px]   "></div>;
};

function Footer() {
  return (
    <div className="bg-[#232F3E] min-w-[1000px] relative  ">
      {/* Bottom spacer */}
      <div className="basis-[100%] flex-grow h-[27px]  overflow-hidden bg-[#ffffff]"></div>
      {/* Sign Button space Section */}
      <div className="bg-[#ffffff]">
        <div className="min-w-[940px]  relative w-full">
          <br />
          <div className="">
            <div className="border-[1px] border-solid border-[#ddd] rounded-[5px] pl-[20px] flex justify-center pt-[5px] pr-[40px] mt-[13px]">
              <div className="p-[10px]"></div>
              <div>
                <div className="mt-[15px] mb-[17px]  ">
                  <div className="px-[20px] leading-[15px] flex flex-col items-center">
                    <br />
                    <h2 className="text-[24px] leading-[32px] font-[700] font-ember pb-[4px] ">
                      See personalized recommendations
                    </h2>
                    <div className="max-w-[230px] mb-[5px] mt-[5px] w-[230px] signbtn flex justify-center">
                      <span className="h-[28px]  relative text-[#000] text-[12px] leading-[28px] text-center font-[700] font-ember shadow-[#ffe093]">
                        Sign in
                      </span>
                    </div>
                    <div className="text-[11px] leading-[15px] text-[#000] font-ember ">
                      New customer?{" "}
                      <a href="" className="text-[#007185]">
                        Start here.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div className="mt-[-4px]">
        {/* 1st Footer */}
        <div className="text-[14px] whitespace-normal leading-[20px] ">
          <div className="mb-[40px] bg-[#37475A] flex justify-center">
            <span className="text-[#fff] font-ember text-center py-[15px] leading-[19px] text-[13px] ">
              Back to top
            </span>
          </div>
        </div>

        {/*2nd Footer  */}
        <div className="table mx-auto my-0 max-w-[1000px] font-ember">
          <div className="table-row ">
            {/* One Cell */}
            <Cell
              title="Get to Know Us"
              items={[
                "Careers",
                "Blog",
                "About Amazon",
                "Investor Relations",
                "Amazon Devices",
                "Amazon Science",
              ]}
            />
            <Spacer />
            <Cell
              title="Make Money with Us"
              items={[
                "Sell products on Amazon",
                "Sell on Amazon Business",
                "Sell apps on Amazon",
                "Become an Affiliate",
                "Advertise Your Products",
                "Self-Publish with Us",
                "Host an Amazon Hub",
                "› See More Make Money with Us",
              ]}
            />
            <Spacer />
            <Cell
              title="Amazon Payment Products"
              items={[
                "Amazon Business Card",
                "Shop with Points",
                "Reload Your Balance",
                "Amazon Currency Converter",
              ]}
            />
            <Spacer />
            <Cell
              title="Let Us Help You"
              items={[
                "Amazon and COVID-19",
                "Your Account",
                "Your Orders",
                "Shipping Rates & Policies",
                "Returns & Replacements",
                "Manage Your Content and Devices",
                "Help",
              ]}
            />
          </div>
        </div>

        {/* Footer Spacer */}
        <div className="border-t-[1px] border-solid border-[#3a4553] mt-[38px]  "></div>
        {/* Footer amazon icon section */}
        <div className="ml-[10px] mt-[11px] mb-[12px]   text-center max-w-[1000px] font-ember leading-[18px] whitespace-nowrap flex justify-center">
          <span className="pl-[0.6em] pr-[0.4em]">
            <div className="mt-[11px] mr-auto mb-[15px] ml-[5px]   leading-0 ">
              <a href="" className="px-[0.6em] ">
                <div className="footer-amazon-icon"></div>
              </a>
            </div>
          </span>
          <div className="whitespace-normal align-top pt-[17px] ml-[71px] mb-0  px-[0.6em] ">
            <div className="text-center leading-[18px] whitespace-nowrap text-[#ddd]">
              <a
                href=""
                className="whitespace-normal inline-block border-[1px] border-solid border-[#848688] rounded-[3px] py-[6px] pr-[18px] pl-[8px] mr-[7px] text-[13px] "
              >
                <div className="lang-icon"></div>
                <span className="text-[#CCC] px-[0.6em] whitespace-normal inline-block">
                  English
                </span>
                <span className="lang-arrow-icon"></span>
              </a>
              <a
                href=""
                className="whitespace-normal  inline-block border-[1px] border-solid border-[#848688] rounded-[3px] py-[6px] pr-[18px] pl-[8px] mr-[8px] text-[13px] "
              >
                <span className="text-[#fff] mt-[3px] text-[13px] whitespace-normal inline-block">
                  $
                </span>
                <span className="text-[#CCC] px-[0.6em] whitespace-normal inline-block">
                  USD - U.S. Dollar
                </span>
              </a>
              <a
                href=""
                className="whitespace-normal inline-block border-[1px] border-solid border-[#848688] rounded-[3px] py-[6px] pr-[18px] pl-[8px]  text-[13px] "
              >
                <span className="flag-icon"></span>
                <span className="text-[#CCC] px-[0.6em] whitespace-normal inline-block">
                  United States
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 3rd Footer */}
        {/* pb-[20px] */}
        <div className="bg-[#131A22] pt-[30px] pb-[30px]   leading-[18px] whitespace-nowrap ">
          <table
            className="max-w-[1000px] mx-auto w-full border-collapse font-ember mb-0 p-0"
            id="footer-table"
          >
            <tbody>
              {/* Row wise items */}
              {/* 1 */}
              <tr>
                {/* Items */}
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Amazon Music
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Stream millions
                      <br />
                      of songs
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Amazon Ads
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Reach customers
                      <br />
                      wherever they
                      <br />
                      spend their time
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    6pm
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Score deals
                      <br />
                      on fashion brands
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    AbeBooks
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Books, art
                      <br />& collectibles
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    ACX
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Audiobook Publishing
                      <br />
                      Made Easy
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Sell on Amazon
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Start a Selling Account
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Veeqo
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Shipping Software
                      <br />
                      Inventory Management
                    </span>
                  </a>
                </td>
              </tr>
              {/* spacer */}
              <tr>
                <td>&nbsp;</td>
              </tr>
              {/* 2 */}
              <tr>
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Amazon Business
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Everything For
                      <br />
                      Your Business
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    AmazonGlobal
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Ship Orders
                      <br />
                      Internationally
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Home Services
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Experienced Pros
                      <br />
                      Happiness Guarantee
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Amazon Web Services
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Scalable Cloud
                      <br />
                      Computing Services
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Audible
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Listen to Books & Original
                      <br />
                      Audio Performances
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Box Office Mojo
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Find Movie
                      <br />
                      Box Office Data
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Goodreads
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Book reviews
                      <br />& recommendations
                    </span>
                  </a>
                </td>
              </tr>
              {/* spacer */}
              <tr>
                <td>&nbsp;</td>
              </tr>
              {/* 3 */}
              <tr>
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    IMDb
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Movies, TV
                      <br />& Celebrities
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    IMDbPro
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Get Info Entertainment
                      <br />
                      Professionals Need
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Kindle Direct Publishing
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Indie Digital & Print Publishing
                      <br />
                      Made Easy
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Prime Video Direct
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Video Distribution
                      <br />
                      Made Easy
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Shopbop
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Designer
                      <br />
                      Fashion Brands
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Woot!
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Deals and
                      <br />
                      Shenanigans
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Zappos
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Shoes &
                      <br />
                      Clothing
                    </span>
                  </a>
                </td>
              </tr>
              {/* spacer */}
              <tr>
                <td>&nbsp;</td>
              </tr>
              {/* 4 */}
              <tr>
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Ring
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Smart Home
                      <br />
                      Security Systems
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    eero WiFi
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Stream 4K Video
                      <br />
                      in Every Room
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Blink
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Smart Security
                      <br />
                      for Every Home
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Neighbors App
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Real-Time Crime
                      <br />& Safety Alerts
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    Amazon Subscription Boxes
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Top subscription boxes – right to your door
                    </span>
                  </a>
                </td>
                <TbSpacer />
                <td className="tb-style">
                  <a href="" className="text-[#ddd] whitespace-normal ">
                    PillPack
                    <br />
                    <span className="text-[#999] whitespace-normal inline-block text-[12px]">
                      Pharmacy Simplified
                    </span>
                  </a>
                </td>
                <TbSpacer />
                {/* spacer */}
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* End Footer */}
        <div className="bg-[#131A22] max-w-full m-0 pt-[6px] pb-[30px] text-center text-[#ddd] leading-[18px] whitespace-nowrap">
          <ul className="flex flex-wrap justify-center ml-[18px] text-[12px] leading-[17px] font-ember mt-[4px]">
            <li className="inline ">
              <a href="" className="text-[#ddd] whitespace-normal px-[.6em] ">
                Conditions of Use
              </a>
            </li>
            <li className="inline ">
              <a href="" className="text-[#ddd] whitespace-normal px-[.6em] ">
                Privacy Notice
              </a>
            </li>
            <li className="inline ">
              <a href="" className="text-[#ddd] whitespace-normal px-[.6em] ">
                Consumer Health Data Privacy Disclosure
              </a>
            </li>
            <li className="inline ">
              <a href="" className="text-[#ddd] whitespace-normal px-[.6em] ">
                Your Ads Privacy Choices
              </a>
            </li>
            <li className="inline ">
              <span className="end-footer-icon"></span>
            </li>
          </ul>
          <div className="whitespace-normal px-[.7em]  font-ember  mt-[1px] text-[12px] text-center">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
