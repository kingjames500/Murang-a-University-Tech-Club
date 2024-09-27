import "./Leaders.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Title from "../Tittle/Title";

import clubLeadership from "../../data/clubLeadership";

function LeadersSocials({ linkedIn, twitter, facebook, instagram }) {
  return (
    <div className="leaders-socials">
      {twitter && (
        <a
          href={twitter}
          className="socials-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
      )}

      {facebook && (
        <a
          href={facebook}
          className="socials-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
      )}

      {linkedIn && (
        <a
          href={linkedIn}
          className="socials-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      )}

      {instagram && (
        <a
          href={instagram}
          className="socials-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
        </a>
      )}
    </div>
  );
}

function LeadersCards({
  leaderName,
  leaderPosition,
  leaderImage,
  leaderBiography,
}) {
  return (
    <div className="leader-cards">
      <h4 className="leader-name">{leaderName}</h4>
      <div className="leader-details">
        <img src={leaderImage} alt={leaderName} />
        <h3 className="leader-position">{leaderPosition}</h3>
      </div>
      <div className="biograpy">
        <p className="leader-biography">{leaderBiography}</p>
      </div>
      {/* pasiing the leader-socails */}
      <LeadersSocials
        linkedIn="https://linkedin.com/in/john-ndia"
        twitter="https://twitter.com/john_ndia"
        facebook="https://facebook.com/john.ndia"
        instagram="https://instagram.com/john.ndia"
      />
    </div>
  );
}

function Leaders() {
  return (
    <div className="section">
      <Title mainTitle="Leadership" subTitle="Meet the Team" />
      <div className="leaders-container">
        {clubLeadership.map((leader, index) => (
          <LeadersCards
            key={index}
            leaderName={leader.leaderName}
            leaderPosition={leader.leaderPosition}
            leaderImage={leader.leaderImage}
            leaderBiography={leader.leaderBiography}
          />
        ))}
      </div>
    </div>
  );
}

export default Leaders;
