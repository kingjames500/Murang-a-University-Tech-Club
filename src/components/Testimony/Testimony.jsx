import "./Testimony.css";
import Title from "../Tittle/Title";
import alumniTestimonies from "../../data/alumniTestimonials";
import Carousel from "react-elastic-carousel";

function AlumniCard({ alumniName, alumniTestimony, alumniImage, alumniTitle }) {
  return (
    <div className="Alumni-card">
      <div className="alumni-card-details">
        <img src={alumniImage} alt={alumniName} />
        <h4 className="alumni-card-details-name">{alumniName}</h4>
      </div>
      <h4 className="alumni-title">{alumniTitle}</h4>
      <p className="alumni-testimony">{alumniTestimony}</p>
    </div>
  );
}

function Testimony() {
  return (
    <div className="testimonials">
      <Title
        mainTitle="testimonials"
        subTitle="Stories of Growth and Achievement"
      />
      <div className="testimonail-container">
        <Carousel itemsToShow={1} pagination={true} enableAutoPlay={false}>
          {alumniTestimonies.map((alumni, index) => (
            <AlumniCard
              key={index}
              alumniName={alumni.alumniName}
              alumniTitle={alumni.alumniTitle}
              alumniTestimony={alumni.alumniTestimony}
              alumniImage={alumni.alumniImage}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Testimony;
