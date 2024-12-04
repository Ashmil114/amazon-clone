function SmallInsideCard({ url, title }: { url: string; title: string }) {
  return (
    <div>
      <a href="" className="">
        <img
          src={url}
          alt=""
          className="w-full rounded-[4px] align-top max-w-full border-0"
        />
        {/* product title */}
        <div>
          <span className="text-[#0f1111] ">
            <span className="leading-[1.3em] max-h-[2.6em] block relative w-full overflow-hidden ">
              <span className="inline-block w-full whitespace-normal font-ember h-auto">
                {title}
              </span>
            </span>
          </span>
        </div>
      </a>
    </div>
  );
}

export default SmallInsideCard;
