import React from "react";
// import crowClosed from ".//images/crow_closed.webp";
import crowClosed from "../images/crow_closed.webp";
import crowSpread from "../images/crow_spread.webp";

const HeaderCrow = () => {
  return (
    <div className="flex flex-row justify-between h-60 items-center bg-inherit group">
      {/* image is a circle */}
      <img
        src={crowClosed}
        alt="crowclosed"
        className="h-full rounded-full p-5 group-hover:hidden"
      />
      <img
        src={crowSpread}
        alt="crowspread"
        className="hidden h-full rounded-full p-5 group-hover:block"
      />
      <div className="font-mono text-stone-300 text-3xl h-fit pr-10 group-hover:hidden">
        tristan baujault-borresen;
      </div>
      <div className="font-mono text-stone-300 text-3xl h-fit pr-10 group-hover:block hidden">
        tristan baujault-borresen; poetry & thought
      </div>
    </div>
  );
};

export default HeaderCrow;
