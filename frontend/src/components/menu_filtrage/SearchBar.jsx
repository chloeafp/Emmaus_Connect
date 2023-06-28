import React from "react";

const SearchBar = () => {
  return (
    <div className="flex w-full items-center h-12 gap-3 bg-white overflow-hidden mb-6 ">
      <input
        className="peer h-full w-full px-2 border-b placeholder-black"
        type="text"
        id="search"
        placeholder="Rechercher..."
      />
    </div>
  );
};

export default SearchBar;
