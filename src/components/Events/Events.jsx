import "./Events.css";

import Title from "../Tittle/Title";

import weeklySchedule from "../../data/events";

function EventsCard({
  eventName,
  eventTime,
  eventLocation,
  eventLead,
  eventDay,
  leadAvatar,
}) {
  return (
    <div className="event-card">
      <div className="event-date">
        <h2 className="event-name">{eventName}</h2>
      </div>
      <div className="event-details">
        <div className="event-lead">
          <img src={leadAvatar} alt={eventLead} />

          <img src={leadAvatar} alt={eventLead} className="event-lead-image" 
          <h4 className="event-lead-name">{eventLead}</h4>
        </div>
        <h5 className="event-day">
          <i className="fas fa-calendar" aria-hidden="true" id="card-icon"></i>{" "}
          {eventDay}
        </h5>
        <p className="event-location">
          <i
            className="fas fa-map-marker-alt"
            aria-hidden="true"
            id="card-icon"
          ></i>{" "}
          {eventLocation}
        </p>
        <span className="event-time">
          <i className="fas fa-clock" aria-hidden="true" id="card-icon"></i>{" "}
          {eventTime}
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
            leadAvatar={events.leadAvatar}
            eventName={events.eventName}
            eventLead={events.eventLead}
            leadAvatar={events.leadAvatar}
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
