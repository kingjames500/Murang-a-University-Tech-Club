import Title from "../Tittle/Title";
import "./EnrollForm.css";

import TracksData from "../../data/TracksData";

function EnrollTrackForm() {
  return (
    <div>
      <Title
        mainTitle="Fill in Your Details to Begin"
        subTitle="Shape Your Future with the Right Path"
      />
      <form className="enroll-form">
        <div className="form-group">
          <label htmlFor="fullname" className="form-group-label">
            full name
          </label>
          <input
            type="text"
            className="form-group-input"
            placeholder="Enter your fullname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-group-label">
            {" "}
            your email
          </label>
          <input
            type="email"
            className="form-group-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="course" className="form-group-label">
            course{" "}
          </label>
          <input
            type="text"
            className="form-group-input"
            placeholder="current course"
          />
        </div>
        <div className="form-group">
          <label htmlFor="year-of-study" className="form-group-label">
            year of study
          </label>
          <input
            type="number"
            className="form-group-input"
            placeholder="Enter your year of study"
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="select-your-desired-track"
            className="form-group-label"
          >
            select a desired track
          </label>
          <select id="tracks" className="form-group-input">
            <option value="" className="tracks-select">
              --select your desired track--
            </option>
            {TracksData.map((track, index) => (
              <option key={index} value={track.trackName}>
                {track.trackName}
              </option>
            ))}
          </select>
        </div>
        <button className="track-enrol-btn">submit</button>
      </form>
    </div>
  );
}

export default EnrollTrackForm;
