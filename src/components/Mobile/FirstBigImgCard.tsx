const data = [
  {
    title: "Get ready for a day out with your little one",
    BigImg: {
      url: "https://m.media-amazon.com/images/I/31-DyDlXzXL._SY400_.jpg",
      title: "Snacks & food",
    },
    item: [
      {
        url: "https://m.media-amazon.com/images/I/31ctiUOeukL._SY220_.jpg",
        title: "Toys",
      },
      {
        url: "	https://m.media-amazon.com/images/I/21Q2e9vs7lL._SY220_.jpg",
        title: "Strollers",
      },
      {
        url: "	https://m.media-amazon.com/images/I/215ckmhmeOL._SY220_.jpg",
        title: "Car Seats",
      },
    ],
    footer: "Explore more",
  },
];

function FirstBigImgCard() {
  return (
    <div className="">
      <div className="my-[5px] bg-[#fff] overflow-auto py-[12px] px-[15px] ">
        {/* Title */}
        <div className="pb-[8px] ">
          <h3 className="font-ember font-[700] text-[18px] leading-[1.25]">
            <span className="leading-[1.3em] max-h-[2.6em] block relative w-full overflow-hidden ">
              <span className="h-auto inline-block w-full whitespace-normal ">
                {data[0].title}
              </span>
            </span>
          </h3>
        </div>
        {/* Card Body */}
        <div className="relative m-auto max-w-[500px] ">
          <div className="mb-[8px] ">
            <a href="">
              <div className="h-[200px] ">
                <div className="rounded-[4px] h-full overflow-hidden relative w-full ">
                  <img
                    src={data[0].BigImg.url}
                    alt=""
                    className="absolute m-auto h-full left-[-9999px] right-[-9999px] max-w-none align-top  "
                  />
                </div>
              </div>
              <span className="text-[#0f1111] ">
                <span className="leading-[1.3em] max-h-[2.6em] block relative w-full overflow-hidden ">
                  <span className="inline-block w-full whitespace-normal font-ember h-auto">
                    {data[0].BigImg.title}
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div className="mb-0 flex overflow-auto ">
            {/* single item */}
            {data[0].item.map((data, i) => (
              <div className="ml-[8px] first:ml-0 inline-block w-full " key={i}>
                <a href="" className="">
                  <div className="h-[110px] ">
                    <div className="rounded-[4px] h-full overflow-hidden relative w-full ">
                      <img
                        src={data.url}
                        alt=""
                        className="absolute m-auto h-full left-[-9999px] right-[-9999px] max-w-none align-top  "
                      />
                    </div>
                  </div>
                  {/* product title */}

                  <span className="text-[#0f1111] ">
                    <span className="leading-[1.3em] max-h-[2.6em] block relative w-full overflow-hidden ">
                      <span className="inline-block w-full whitespace-normal font-ember h-auto">
                        {data.title}
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="pt-[13px] font-ember ">
          <div>
            <a href="" className="text-[#007185]">
              <span className="leading-[1.3em] max-h-[1.3em] block relative w-full overflow-hidden ">
                <span className="h-auto inline-block w-full whitespace-normal">
                  {data[0].footer}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstBigImgCard;
