import "./About-us.css";
import Title from "../Tittle/Title";

function AboutInfo() {
  return (
    <div className="about-us">
      <div className="about-us-container">
        <div className="about-us-content">
          <h3 className="about-us-content-title">our mission</h3>
          <p className="about-us-content-text">
            At MUTC, our mission is to empower individuals with the skills and
            knowledge they need to excel in the rapidly evolving world of
            technology. We are committed to fostering an inclusive and
            supportive environment where members can grow, innovate, and
            collaborate. Through a combination of hands-on projects, expert-led
            workshops, and networking opportunities, we aim to shape the next
            generation of tech leaders.
          </p>
        </div>
        <div className="about-us-content">
          <h3 className="about-us-content-title">our values</h3>
          <p className="about-us-content-text">
            At the core of MUTC are values that drive our community forward:
            Innovation: We embrace creativity and forward-thinking, constantly
            exploring new ideas and solutions in technology. Collaboration: We
            believe in the power of teamwork and the collective strength of our
            diverse members. Growth: We are dedicated to the continuous learning
            and personal development of every member.
          </p>
        </div>
        <div className="about-us-content">
          <h3 className="about-us-content-title">our objectives</h3>
          <p className="about-us-content-text">
            Skill Development: Provide members with practical, hands-on
            experience in various areas of technology, from coding to
            cybersecurity. Networking: Create opportunities for members to
            connect with professionals, industry experts, and fellow tech
            enthusiasts. Innovation Hub: Encourage the development of
            cutting-edge ideas and projects that can make a tangible impact in
            the tech world. Community Building.
          </p>
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="about-us-section">
      <Title mainTitle="About Us" subTitle="Get to know us better" />
      <AboutInfo />
    </div>
  );
}

export default AboutUs;
