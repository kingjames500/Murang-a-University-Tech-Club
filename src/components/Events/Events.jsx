import "./Events.css";

import Title from "../Tittle/Title";

import weeklySchedule from "../../data/events";

function EventsCard({
  eventName,
  eventTime,
  eventLocation,
  eventLead,
  eventDay,
}) {
  return (
    <div className="event-card-section">
      <div className="event-card">
        <h2 className="event-name">{eventName}</h2>
        <div className="event-details">
          <h4 className="event-lead">{eventLead}</h4>
          <h5 className="event-day">{eventDay}</h5>
          <p className="event-location">{eventLocation}</p>
          <span className="event-time">{eventTime}</span>
        </div>
        <div className="cta-buttons">
          <p className="cta-text">
            Ready to sharpen your skills? Join us in any of these sessions to
            learn and grow!
          </p>
          <button type="submit">want to join us?</button>
        </div>
      </div>
    </div>
  );
}

function Events() {
  return (
    <div>
      <Title
        mainTitle="MUTC Weekly Schedule"
        subTitle="Explore a variety of learning opportunities from Monday to Saturday!"
      />
      <div className="events-container">
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
