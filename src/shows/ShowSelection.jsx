//import React from "react"; NOT NEEDED BECAUSE NEVER CALLED FOR
import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  const handleClick = (show) => {
    //When a show is clicked, update the selected show state
    setSelectedShow(show);
  };

  return (
    <nav className="show-selection">
      <h2>Select a Show</h2>
      <div>
        {shows.map((show) => (
          <a key={show.name} className="show" onClick={() => handleClick(show)}>
            {show.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
