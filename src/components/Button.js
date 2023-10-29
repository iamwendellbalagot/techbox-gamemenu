import React from "react";

const Button = ({ children, selected, setSelected }) => {
  return (
    <button
      className={`w-[100%] py-2 border-[1px] border-[#7289da] outline-double 
      outline-[1px] outline-[#7289da] outline-offset-2 
      rounded-[2px] hover:bg-[#7289da] font-bold bg-[#23272a] transition ease-in-out
      ${selected === children && "bg-[#7289da]"} `}
      onClick={() => setSelected(children)}
    >
      {children}
    </button>
  );
};

export default Button;
