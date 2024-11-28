import { Fragment } from "react";
import Divider from "../../components/Home/Divider";
import FirstItemCard4_4 from "../../components/Home/FirstItemCard4_4";
import SingleItemCard from "../../components/Home/SingleItemCard";
import { data } from "../../constants/cardData";
import "./Home.css";
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
              {(index + 1) % 4 === 0 && <Divider />}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
