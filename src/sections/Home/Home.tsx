import { Fragment } from "react";
import Divider from "../../components/Home/Divider";
import FirstItemCard4_4 from "../../components/Home/FirstItemCard4_4";
import SingleItemCard from "../../components/Home/SingleItemCard";
import { data, data2, data3, data4 } from "../../constants/cardData";
import "./Home.css";
import CarosalItemCard from "../../components/Home/CarosalItemCard";
import {
  CarosalData,
  CarosalData2,
  CarosalData3,
  CarosalData4,
  CarosalData5,
  CarosalData6,
} from "../../constants/carosalData";
import BigCardCarosal from "../../components/Home/BigCardCarosal";
import {
  BigCardData,
  BigCardData2,
  BigCardData3,
} from "../../constants/BigCardCarosalData";
function Home() {
  return (
    <div className="leading-[20px]">
      {/* Banner Section */}
      <div className=" max-h-[230px]   h-[300px] overflow-visible ">
        <div className="home-banner"></div>
      </div>

      <div className="px-[10px] ">
        {/* Small Description box */}
        <div className="mt-[20px] px-[10px]">
          <div className="bg-[#f5f6f6] px-[14px] py-[10px] flex items-center justify-center">
            <p className="font-ember text-[14px]">
              You are on amazon.com. You can also shop on Amazon India for
              millions of products with fast local delivery.
              <a href="" className="text-[#007185]">
                {" "}
                Click here to go to amazon.in
              </a>
            </p>
          </div>
        </div>
        {/* First Card Section */}
        <div className="py-[20px]  flex flex-row flex-wrap max-w-[1480px] overflow-hidden ">
          {data.map((item, index) => (
            <Fragment key={index}>
              {item.type === "multiple" ? (
                <FirstItemCard4_4 {...item} />
              ) : (
                <SingleItemCard {...item} />
              )}
              {(index + 1) % 4 === 0 && data.length !== index + 1 && (
                <Divider />
              )}
            </Fragment>
          ))}
        </div>
        {/* Carosal  cards section */}
        {CarosalData.map((item, index) => (
          <CarosalItemCard key={index} {...item} />
        ))}
        <Divider />
        {/* Big Card Carosal Section */}
        {BigCardData2.map((data, index) => (
          <BigCardCarosal {...data} key={index} />
        ))}
        <Divider />
        {/* Big Card Carosal Section */}
        {BigCardData.map((data, index) => (
          <BigCardCarosal {...data} key={index} />
        ))}
        <div className="py-[20px]  flex flex-row flex-wrap max-w-[1480px] overflow-hidden ">
          {data2.map((item, index) => (
            <Fragment key={index}>
              {item.type === "multiple" ? (
                <FirstItemCard4_4 {...item} />
              ) : (
                <SingleItemCard {...item} />
              )}
              {(index + 1) % 4 === 0 && data2.length !== index + 1 && (
                <Divider />
              )}
            </Fragment>
          ))}
        </div>
        {CarosalData2.map((item, index) => (
          <CarosalItemCard key={index} {...item} />
        ))}
        <Divider />
        {BigCardData3.map((data, index) => (
          <BigCardCarosal {...data} key={index} />
        ))}
        <Divider />
        {CarosalData3.map((item, index) => (
          <CarosalItemCard key={index} {...item} />
        ))}
        <div className="py-[20px]  flex flex-row flex-wrap max-w-[1480px] overflow-hidden ">
          {data3.map((item, index) => (
            <Fragment key={index}>
              {item.type === "multiple" ? (
                <FirstItemCard4_4 {...item} />
              ) : (
                <SingleItemCard {...item} />
              )}
              {(index + 1) % 4 === 0 && data2.length !== index + 1 && (
                <Divider />
              )}
            </Fragment>
          ))}
        </div>

        {CarosalData4.map((item, index) => (
          <CarosalItemCard key={index} {...item} />
        ))}
        <Divider />
        {CarosalData5.map((item, index) => (
          <CarosalItemCard key={index} {...item} />
        ))}
        <div className="py-[20px]  flex flex-row flex-wrap max-w-[1480px] overflow-hidden ">
          {data4.map((item, index) => (
            <Fragment key={index}>
              {item.type === "multiple" ? (
                <FirstItemCard4_4 {...item} />
              ) : (
                <SingleItemCard {...item} />
              )}
              {(index + 1) % 4 === 0 && data2.length !== index + 1 && (
                <Divider />
              )}
            </Fragment>
          ))}
        </div>
        {CarosalData6.map((item, index) => (
          <CarosalItemCard key={index} {...item} />
        ))}
        <Divider />
      </div>

      {/* Bottom spacer */}
      <div className="basis-[100%] flex-grow h-[22px]  overflow-hidden bg-[#ffffff]"></div>
      {/* Sign Button space Section */}
      <div className="bg-[#ffffff]">
        <div className="min-w-[940px] relative ">
          <br />
          <div className="">
            <div className="border-[1px] border-solid border-[#ddd] rounded-[5px] px-[20px] flex justify-center">
              <div className="p-[10px]"></div>
              <div>
                <div className="mt-[19px] mb-[17px]  ">
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
    </div>
  );
}

export default Home;
