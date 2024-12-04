import Banner from "../../../components/Mobile/Banner";
import DetailCard from "../../../components/Mobile/DetailCard";
import FirstBigImgCard from "../../../components/Mobile/FirstBigImgCard";
import NoTitleCard4_4 from "../../../components/Mobile/NoTitleCard4_4";
import SingleImgCard from "../../../components/Mobile/SingleImgCard";
import TitleCardSqr4_4 from "../../../components/Mobile/TitleCardSqr4_4";
import TitledCard from "../../../components/Mobile/TitledCard";
import {
  data1,
  dataNTD,
  dataNTD2,
  dataNTD3,
} from "../../../constants/Mobile/NoTitleCard";
import { dataSI, dataSI2 } from "../../../constants/Mobile/SingleImgCard";
import {
  dataTD,
  dataTD2,
  dataTD3,
  dataTD4,
  dataTD5,
  TitleData4_4,
} from "../../../constants/Mobile/TitleCard4_4Data";
import "./Home.css";

const TitledCardData = [
  "https://m.media-amazon.com/images/I/41hSaKz0g1L._SR270,360_.jpg",
  "https://m.media-amazon.com/images/I/51CVhfEyQqL._SR270,360_.png",
  "https://m.media-amazon.com/images/I/41XS-mlyU0L._SR270,360_.jpg",
  "https://m.media-amazon.com/images/I/31eNQsEzvPL._SR270,360_.jpg",
  "https://m.media-amazon.com/images/I/41X4x4lFQBL._SR270,360_.jpg",
  "https://m.media-amazon.com/images/I/41VjtFbl7EL._SR270,360_.jpg",
  "https://m.media-amazon.com/images/I/41sxkAKd+6L._SR270,360_.jpg",
  "https://m.media-amazon.com/images/I/41FtTiDZXEL._SR270,360_.jpg",
  "https://m.media-amazon.com/images/I/41cVuXdM8TL._SR270,360_.jpg",
  "https://m.media-amazon.com/images/I/31qS36KvJML._SR270,360_.jpg",
  "https://m.media-amazon.com/images/I/41cPkLyz2WL._SR270,360_.jpg",
  "https://m.media-amazon.com/images/I/41ZqCc-0L9L._SR270,360_.jpg",
  "https://m.media-amazon.com/images/I/31qtzKrpSKL._SR270,360_.jpg",
  "https://m.media-amazon.com/images/I/31+5Tnp5llL._SR270,360_.jpg",
  "https://m.media-amazon.com/images/I/31LACnjzRmL._SR270,360_.jpg",
];

function Home() {
  return (
    <div className="text-[15px] text-[#111] ">
      <div className="">
        <Banner />
        {/* Titled Image Card Section */}
        <div className="h-[190px] w-full overflow-x-scroll relative ">
          <div className="h-[180px] w-max my-[5px] ml-[8px] ">
            {TitledCardData.map((url, i) => (
              <TitledCard url={url} key={i} />
            ))}
          </div>
        </div>
        {/* Description Banner Section */}
        <div className="my-[5px] text-center ">
          <div className="h-[83px] max-w-[414px] m-auto overflow-hidden relative w-full">
            <div className="w-[414px] absolute bottom-0 left-[-200%] right-[-200%] text-center top-0 mx-auto">
              <a href="" className="">
                <img
                  src="https://m.media-amazon.com/images/I/51RaednKxSL._SR1242,250_.jpg"
                  alt=""
                  className="align-top max-w-full "
                />
              </a>
            </div>
          </div>
        </div>
        {/* Sign in Section */}
        <div className="">
          <div className="my-[2px] bg-[#fff] overflow-auto  px-[15px] pb-[12px]">
            <div className=" pb-[1px] mt-[1px]">
              <h3 className="font-ember font-[700] text-[1.8rem] leading-[1.25] ">
                <span className="leading-[1.3em] max-h-[2.6em] w-full overflow-hidden relative ">
                  <span className="h-auto inline-block w-full whitespace-normal text-[18px]">
                    Sign in for the best experience
                  </span>
                </span>
              </h3>
            </div>
            <div className="relative ">
              <span className="rounded-[10rem] w-full bg-[#ffd814] border-[#ffd814] border-solid border-[1px]  text-center align-middle mt-[4px]  flex items-center justify-center">
                <span className="rounded-[99px] h-full relative  overflow-hidden text-center flex">
                  <a
                    href=""
                    className="text-[16px] py-[12px] pr-[16px] pl-[17px] text-center font-ember leading-[1.35]"
                  >
                    Sign in securely
                  </a>
                </span>
              </span>
            </div>
            <div className="pt-[13px] font-ember ">
              <div className="">
                <a href="">
                  <span className="leading-[1.3em] max-h-[1.3em] block relative w-full overflow-hidden  ">
                    <span className="h-auto w-full whitespace-normal inline-block text-[#007185]">
                      Create an account
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card Section Start */}
        {TitleData4_4.map((item, index) => (
          <TitleCardSqr4_4 {...item} key={index} />
        ))}
        <FirstBigImgCard />
        {data1.map((item, index) => (
          <NoTitleCard4_4 {...item} key={index} />
        ))}
        {dataTD.map((item, index) => (
          <TitleCardSqr4_4 {...item} key={index} />
        ))}
        {dataNTD.map((item, index) => (
          <NoTitleCard4_4 {...item} key={index} />
        ))}
        {dataTD2.map((item, index) => (
          <TitleCardSqr4_4 {...item} key={index} />
        ))}
        {dataNTD2.map((item, index) => (
          <NoTitleCard4_4 {...item} key={index} />
        ))}
        {dataTD3.map((item, index) => (
          <TitleCardSqr4_4 {...item} key={index} />
        ))}
        {dataSI.map((item, index) => (
          <SingleImgCard {...item} key={index} />
        ))}
        {dataTD4.map((item, index) => (
          <TitleCardSqr4_4 {...item} key={index} />
        ))}
        {dataNTD3.map((item, index) => (
          <NoTitleCard4_4 {...item} key={index} />
        ))}
        {dataSI2.map((item, index) => (
          <SingleImgCard {...item} key={index} />
        ))}
        {dataTD5.map((item, index) => (
          <TitleCardSqr4_4 {...item} key={index} />
        ))}
        <DetailCard />
      </div>
    </div>
  );
}

export default Home;
