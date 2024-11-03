import React from "react";

const Card = ({ character }) => {
  return (
    <div className="md:ml-2 p-2 md:p-4 rounded-lg flex flex-col items-center text-center bg-Card transform hover:scale-105 transition duration-300 ease-in-out ">
      <img
        src={character.image}
        alt={character.name}
        className="w-[5rem]  md:w-31.5 md:h-31.5 rounded-full"
      />
      <h3 className="mt-2 font-semibold text-sm md:text-md">
        {character.name}
      </h3>
    </div>
  );
};

export default Card;
