import "./Events.css";

import Title from "../Tittle/Title";

import weeklySchedule from "../../data/events";
import { Link } from "react-router-dom";

function EventsCard({
  eventName,
  eventTime,
  eventLocation,
  eventLead,
  eventDay,
}) {
  return (
    <div className="event-card">
      <div className="event-date">
        <h2 className="event-name">{eventName}</h2>
      </div>
      <div className="event-details">
        <h4 className="event-lead">
          <i className="fas fa-user" aria-hidden="true"></i> {eventLead}
        </h4>
        <h5 className="event-day">
          <i className="fas fa-calendar" aria-hidden="true"></i> {eventDay}
        </h5>
        <p className="event-location">
          <i className="fas fa-map-marker-alt" aria-hidden="true"></i>{" "}
          {eventLocation}
        </p>
        <span className="event-time">
          <i className="fas fa-clock" aria-hidden="true"></i> {eventTime}
        </span>
      </div>
    </div>
  );
}

function Events() {
  return (
    <div className="overall-section">
      <Title
        mainTitle="MUTC Weekly Schedule"
        subTitle="Explore a variety of learning opportunities from Monday to Saturday!"
      />
      <div className="events-section-container">
        {weeklySchedule.map((events, i) => (
          <EventsCard
            key={i}
            eventName={events.eventName}
            eventLead={events.eventLead}
            eventDay={events.eventDay}
            eventLocation={events.eventLocation}
            eventTime={events.eventTime}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
