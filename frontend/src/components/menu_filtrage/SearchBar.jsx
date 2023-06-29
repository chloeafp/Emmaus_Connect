import React from "react";

const SearchBar = ({search, setSearch}) => {

  return (
    <div className="flex w-full items-center h-12 gap-3 bg-white overflow-hidden mb-6 ">
      <input
        className="peer h-full w-full px-2 border-b placeholder-black"
        type="text"
        id="search"
        placeholder="Rechercher..."
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
