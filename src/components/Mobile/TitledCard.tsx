function TitledCard({ url }: { url: string }) {
  return (
    <div className="titled-card">
      <div className="p-0 h-[180px] relative w-[135px] mb-[.2rem] bg-[#FFF] overflow-auto">
        <a href="" className="">
          <img src={url} className="max-w-full align-top" />
        </a>
      </div>
    </div>
  );
}

export default TitledCard;
