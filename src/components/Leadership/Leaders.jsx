import "./Leaders.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Title from "../Tittle/Title";

import clubLeadership from "../../data/clubLeadership";
import { Link } from "react-router-dom";

function LeadersSocials({ linkedIn, twitter, facebook, instagram }) {
  return (
    <div className="leaders-socials">
      {twitter && (
        <Link
          href={twitter}
          className="socials-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </Link>
      )}

      {facebook && (
        <Link
          href={facebook}
          className="socials-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </Link>
      )}

      {linkedIn && (
        <Link
          href={linkedIn}
          className="socials-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
      )}

      {instagram && (
        <Link
          href={instagram}
          className="socials-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
        </Link>
      )}
    </div>
  );
}

function LeadersCards({
  leaderName,
  leaderPosition,
  leaderImage,
  leaderBiography,
  leaderSocialsMediaLink,
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
        linkedIn={leaderSocialsMediaLink.linkedIn}
        twitter={leaderSocialsMediaLink.twitter}
        facebook={leaderSocialsMediaLink.facebook}
        instagram={leaderSocialsMediaLink.instagram}
      />
    </div>
  );
}

function Leaders() {
  return (
    <div className="section">
      <Title
        mainTitle="Guiding Innovators, Leading the Future"
        subTitle="Meet the Visionaries Empowering Tomorrow’s Tech Leaders at MUTC"
      />
      <div className="leaders-container">
        {clubLeadership.map((leader, index) => (
          <LeadersCards
            key={index}
            leaderName={leader.leaderName}
            leaderPosition={leader.leaderPosition}
            leaderImage={leader.leaderImage}
            leaderBiography={leader.leaderBiography}
            leaderSocialsMediaLink={leader.leaderSocialMedia}
          />
        ))}
      </div>
    </div>
  );
}

export default Leaders;
