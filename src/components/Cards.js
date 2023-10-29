import React from "react";

const Cards = ({ data }) => {
  return (
    <div
      className="flex flex-col w-[120px] h-[180px] border border-1 
      rounded-[5px] border-[#2c2f33] shadow-md cursor-pointer hover:scale-[1.1]
      transition ease-in-out m-2"
      onClick={() => window.electronAPI.openExe(data.path)}
    >
      <div className="flex h-[80%]">
        <img
          src={data?.image}
          alt="loading"
          className="flex flex-1 rounded-t-[5px]"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex items-center justify-center h-[20%] bg-[#2c2f33]">
        <p>{data?.name}</p>
      </div>
    </div>
  );
};

export default Cards;
