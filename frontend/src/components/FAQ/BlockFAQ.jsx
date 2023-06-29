import React, { useState } from "react";

const BlockFAQ = ({ question, reponse }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
      <div
        onClick={() => setIsClicked(!isClicked)}
        className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
      >
        <button
          type="button"
          className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
        >
          <span className="flex text-lg font-semibold text-black">
            {question}
          </span>

          <svg
            className={`${
              isClicked
                ? "w-6 h-6 text-[#E52460] duration-300 rotate-180"
                : "w-6 h-6 text-[#E52460] duration-300 "
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div className={`${
              isClicked
                ? "px-4 pb-5 sm:px-6 sm:pb-6"
                : "px-4 pb-5 sm:px-6 sm:pb-6  hidden"
            }`}>
          <p>{reponse}</p>
        </div>
      </div>
    </div>
  );
};

export default BlockFAQ;
