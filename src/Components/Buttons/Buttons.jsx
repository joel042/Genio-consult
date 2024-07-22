import React from "react";

const Buttons = (props) => {
  const { btnName } = props;

  return (
    <div>
      <button className="border border-white w-[165px] h-12 text-white font-bold rounded-lg">
        <p>{btnName}</p>
      </button>
    </div>
  );
};

export default Buttons;
