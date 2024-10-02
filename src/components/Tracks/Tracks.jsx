import Title from "../Tittle/Title";
import "./Tracks.css";
import TracksData from "../../data/TracksData";
import { Link } from "react-router-dom";

function TracksCard({ trackImage, trackName, trackDescription }) {
  return (
    <div className="track-card">
      <div className="card-details">
        <img src={trackImage} alt={trackName} />
        <h4 className="card-title">{trackName}</h4>
      </div>
      <div className="description">
        <p className="card-description">{trackDescription}</p>
      </div>
      <div className="btn">
        <Link to="/enroll" className="card-btn">
          enroll track
        </Link>
      </div>
    </div>
  );
}

function Tracks() {
  return (
    <div className="container-tracks">
      <Title
        mainTitle="Explore Our Specialized Tracks"
        subTitle="We have a variety of tracks that cater to your interests"
      />
      <div className="card-section">
        {TracksData.map((tracks, i) => (
          <TracksCard
            key={i}
            trackImage={tracks.trackImage}
            trackName={tracks.trackName}
            trackDescription={tracks.trackDescription}
          />
        ))}
      </div>
    </div>
  );
}

export default Tracks;
