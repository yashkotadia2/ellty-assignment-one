import { useState } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleMouseDown = () => {
    setPressed(true);
  };

  const handleMouseUp = () => {
    setPressed(false);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`checkbox w-[25px] h-[25px] rounded-[6px] border outline outline-2 outline-transparent transition-all duration-200 ease-in-out
        ${checked ? "bg-blue-500 border-blue-500" : "bg-white border-gray-300"}
        ${pressed ? "border-gray-300" : ""}
        ${hovered ? (checked ? "outline outline-2 !outline-blue-200" : "") : ""}
        ${checked && !hovered ? "opacity-75" : ""}
        ${checked && hovered ? "outline outline-2 !outline-blue-200" : ""}
        ${pressed && checked ? "opacity-75" : ""}
        focus:outline-none
        cursor-pointer
      `}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCheckboxChange}
    >
      <svg
        className={`w-[25px] h-[25px] ${
          !checked && pressed ? "text-gray-300" : "text-white"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 26 26"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
    </div>
  );
};

export default Checkbox;
