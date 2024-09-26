import "./Testimony.css";
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
      <h3>Voices of MUTC: Member Testimonials</h3>
      <div className="testimonail-container">
        <Carousel enableAutoPlay={true}>
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
