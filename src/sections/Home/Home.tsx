import { Fragment } from "react";
import Divider from "../../components/Home/Divider";
import FirstItemCard from "../../components/Home/FirstItemCard4_4";
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
import { LG_DIVIDER, MD_DIVIDER } from "../../constants/shared/constact";
import Banner from "../../components/Home/Banner";

function Home() {
  return (
    <div className="leading-[20px] min-w-[1000px] max-w-[1500px] mx-auto">
      {/* Banner Section */}
      <Banner />
      <div className="px-[10px] relative z-10">
        {/* Small Description box */}
        <div className="mt-[20px] px-[10px]">
          <div className="bg-[#f5f6f6] px-[14px] py-[10px] flex items-center justify-center ">
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
        <div className="py-[20px]  flex-row flex-wrap max-w-[1480px] overflow-hidden hidden xl:flex">
          {data.map((item, index) => (
            <Fragment key={index}>
              {item.type === "multiple" ? (
                <FirstItemCard {...item} />
              ) : (
                <SingleItemCard {...item} />
              )}
              {(index + 1) % 4 === 0 && data.length !== index + 1 && (
                <Divider />
              )}
            </Fragment>
          ))}
        </div>
        <div className="py-[20px]  flex flex-row flex-wrap max-w-[1480px] overflow-hidden xl:hidden">
          {data.map((item, index) => (
            <Fragment key={index}>
              {item.type === "multiple" ? (
                <FirstItemCard {...item} />
              ) : (
                <SingleItemCard {...item} />
              )}
              {(index + 1) % MD_DIVIDER === 0 && data.length !== index + 1 && (
                <Divider />
              )}
            </Fragment>
          ))}
          <SingleItemCard
            title="Deals in PCs"
            url="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg"
            footer="Shop now"
          />
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
        <div className="py-[20px]   flex-row flex-wrap max-w-[1480px] overflow-hidden hidden xl:flex">
          {data2.map((item, index) => (
            <Fragment key={index}>
              {item.type === "multiple" ? (
                <FirstItemCard {...item} />
              ) : (
                <SingleItemCard {...item} />
              )}
              {(index + 1) % LG_DIVIDER === 0 && data2.length !== index + 1 && (
                <Divider />
              )}
            </Fragment>
          ))}
        </div>
        <div className="py-[20px]  flex flex-row flex-wrap max-w-[1480px] overflow-hidden xl:hidden">
          {data2.slice(0, 3).map((item, index) => (
            <Fragment key={index}>
              {item.type === "multiple" ? (
                <FirstItemCard {...item} />
              ) : (
                <SingleItemCard {...item} />
              )}
              {/* {(index + 1) % 3 === 0 && data2.length !== index + 1 && (
                <Divider />
              )} */}
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
        <div className="py-[20px]  flex-row flex-wrap max-w-[1480px] overflow-hidden hidden xl:flex">
          {data3.map((item, index) => (
            <Fragment key={index}>
              {item.type === "multiple" ? (
                <FirstItemCard {...item} />
              ) : (
                <SingleItemCard {...item} />
              )}
              {(index + 1) % LG_DIVIDER === 0 && data2.length !== index + 1 && (
                <Divider />
              )}
            </Fragment>
          ))}
        </div>
        <div className="py-[20px]  flex flex-row flex-wrap max-w-[1480px] overflow-hidden xl:hidden">
          {data3.slice(0, 3).map((item, index) => (
            <Fragment key={index}>
              {item.type === "multiple" ? (
                <FirstItemCard {...item} />
              ) : (
                <SingleItemCard {...item} />
              )}
              {/* {(index + 1) % 3 === 0 && data2.length !== index + 1 && (
                <Divider />
              )} */}
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
        <div className="py-[20px]  flex-row flex-wrap max-w-[1480px] overflow-hidden hidden xl:flex">
          {data4.map((item, index) => (
            <Fragment key={index}>
              {item.type === "multiple" ? (
                <FirstItemCard {...item} />
              ) : (
                <SingleItemCard {...item} />
              )}
              {(index + 1) % LG_DIVIDER === 0 && data2.length !== index + 1 && (
                <Divider />
              )}
            </Fragment>
          ))}
        </div>
        <div className="py-[20px]  flex flex-row flex-wrap max-w-[1480px] overflow-hidden xl:hidden">
          {data4.slice(0, 3).map((item, index) => (
            <Fragment key={index}>
              {item.type === "multiple" ? (
                <FirstItemCard {...item} />
              ) : (
                <SingleItemCard {...item} />
              )}
              {/* {(index + 1) % 4 === 0 && data2.length !== index + 1 && (
                <Divider />
              )} */}
            </Fragment>
          ))}
        </div>
        {CarosalData6.map((item, index) => (
          <CarosalItemCard key={index} {...item} />
        ))}
        <Divider />
      </div>
    </div>
  );
}

export default Home;
