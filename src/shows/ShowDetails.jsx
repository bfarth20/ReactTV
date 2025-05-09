import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  //if No Show is selected
  if (!show) {
    return (
      <section className="show-details">
        <p>Please select a show to view its details.</p>
      </section>
    );
  }
  //if Show is selected
  return (
    <section className="show-details">
      <h2>{show.title}</h2>
      <p>{show.description}</p>

      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </section>
  );
}
