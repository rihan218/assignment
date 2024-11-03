import React from "react";
import Card from "./Card";

const DataFromApi = ({ characters }) => {
  return (
    <div className="w-full  md:w-3/4 p-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 ">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};

export default DataFromApi;
