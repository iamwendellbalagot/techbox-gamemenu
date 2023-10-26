import React from "react";

const Search = () => {
  return (
    <div className="flex items-center justify-end">
      <input
        type="text"
        className="w-[300px] border-[1px] h-[30px]
      border-[#7289da] bg-[#2c2f33] outline-none rounded-tl-[3px] rounded-bl-[3px] px-2 "
      />
      <button
        className="bg-[#7289da] outline-none rounded-tr-[3px] 
      rounded-br-[3px] h-[30px] w-[60px]"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
