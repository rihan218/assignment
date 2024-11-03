// Sidebar.jsx
import React from "react";

const Sidebar = ({ episodes, onSelectEpisode, selectedEpisode }) => {
  return (
    <div className="w-1/3 md:w-1/5 min-h-screen  py-3 px-1 overflow-y-auto bg-SideNav text-white custom-scrollbar ">
      <h2 className="md:text-xl font-bold mb-4">Episodes</h2>
      <ul>
        {episodes.map((episode) => (
          <li
            key={episode.id}
            className={`cursor-pointer p-2 text-sm md:text-md   ${
              selectedEpisode?.id === episode.id
                ? "bg-Card border-l-4 border-Body text-black"
                : "hover:bg-gray-200 hover:text-black"
            }`}
            onClick={() => onSelectEpisode(episode)}
          >
            {episode.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
