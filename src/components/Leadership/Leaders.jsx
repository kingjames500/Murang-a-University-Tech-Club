import "./Leaders.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import leader1 from "../../assets/leadership images/leadership1.jpg";
// import { Link } from 'react-router-dom';

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
      <h4 className="leader-position">{leaderPosition}</h4>
      <div className="leader-details">
        <img src={leaderImage} alt={leaderName} />
        <h3 className="leader-name">{leaderName}</h3>
      </div>
      <p className="leader-biography">{leaderBiography}</p>
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
    <div className="leaders-container">
      <LeadersCards
        leaderName="dr. john ndia"
        leaderPosition="club patron"
        leaderImage={leader1}
        leaderBiography="Dr. John Ndia is a highly respected academic and technology leader with over two decades of experience in research, mentorship, and guiding young professionals in the tech industry."
        leaderSocialMedia={{
          linkedIn: "https://linkedin.com/in/john-ndia",
          twitter: "https://twitter.com/john_ndia",
          facebook: "https://facebook.com/john.ndia",
          instagram: "https://instagram.com/john.ndia",
        }}
      />
    </div>
  );
}

export default Leaders;
