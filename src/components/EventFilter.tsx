import React from 'react'
import '../styles/event-filter.less'
import { eventColors } from '../constants/calendar'

interface EventFilterProps {
  handleSetEventFilter: (filter: string | null) => void
  eventFilter: string | null
}
const EventFilter: React.FC<EventFilterProps> = ({
  handleSetEventFilter,
  eventFilter
}) => {
  return (
    <div className="event-filter">
      {Object.keys(eventColors).map((type) => (
        <button
          key={type}
          onClick={() =>
            handleSetEventFilter(type === eventFilter ? null : type)
          }
          className={` ${eventColors[type]} ${eventFilter === type ? 'active' : ''}`}
        >
          {' '}
          {type}{' '}
        </button>
      ))}
    </div>
  )
}

export default EventFilter
