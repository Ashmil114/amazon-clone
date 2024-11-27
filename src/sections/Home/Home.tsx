import "./Home.css";
function Home() {
  return (
    <div>
      {/* Banner Section */}
      <div className=" max-h-[230px]   h-[300px] overflow-visible">
        <div className="home-banner"></div>
      </div>

      {/* Small Description box */}
      <div className="px-[10px]">
        <div className="mt-[20px] px-[10px]">
          <div className="bg-[#ffff] px-[14px] py-[10px] flex items-center justify-center">
            <p className="font-ember text-[14px] leading-[20px]">
              You are on amazon.com. You can also shop on Amazon India for
              millions of products with fast local delivery.
              <a href="" className="text-[#007185]">
                {" "}
                Click here to go to amazon.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
