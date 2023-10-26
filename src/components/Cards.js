import React from "react";

const Cards = () => {
  return (
    <div
      className="flex flex-col w-[100px] h-[150px] border border-1 
      rounded-[5px] border-[#2c2f33] shadow-md cursor-pointer hover:scale-[1.1]
      transition ease-in-out"
    >
      <div className="flex h-[80%]">
        <img
          src="images/games/valo.jpg"
          alt="loading"
          className="flex flex-1"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex items-center justify-center h-[20%] bg-[#2c2f33]">
        <p>Card name</p>
      </div>
    </div>
  );
};

export default Cards;
