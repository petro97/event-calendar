import React from 'react'
import { CalendarEvent } from './Calendar'
import { eventColors } from '../constants/calendar'

interface EventsInfoModalProps {
  events: CalendarEvent[]

  onClosePopup: () => void
}

const EventsInfoModal: React.FC<EventsInfoModalProps> = ({
  events,
  onClosePopup
}) => {
  return (
    <div className="popup-overlay" onClick={onClosePopup}>
      <div
        className="popup"
        onClick={(e) => e.stopPropagation()} // Prevent closing the popup when clicking inside
      >
        <h2 className="events-title">Events</h2>

        {events.map((event: CalendarEvent) => (
          <div key={event.id} className="popup-content">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p className="location">{event.location}</p>
            <div className="additional-data">
              <div className={eventColors[event.type]}>
                {event.date}, {event.time}
              </div>
              <div className={`event-type-tag ${eventColors[event.type]}`}>
                {event.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default EventsInfoModal
