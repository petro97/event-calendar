import React, { useState } from 'react'
import { events } from '../eventsData/events.js'
import '../styles/calendar.less'
import EventsInfoModal from './EventsInfoModal'
import { weekdays } from '../constants/calendar'
import EventFilter from './EventFilter'
import { getEventColors } from '../helpers/helperFunctions'

export interface CalendarEvent {
  id: number
  type:
    | 'Meeting with an Expert'
    | 'Question and Answer'
    | 'Conference'
    | 'Webinar'
  date: string // YYYY-MM-DD format
  title: string
  description: string
  time: string // HH:MM format
  location: string
}

const getFormatDate = (day: number, monthIndex: number, year: number) =>
  `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`

const Calendar = () => {
  const [eventFilter, setEventFilter] = useState<string | null>(null)
  const [selectedEvents, setSelectedEvents] = useState<CalendarEvent[] | null>(
    null
  )
  // const [selectedEvent, setSelectedEvent] = useState<CalendarEvent[] | null>(null);

  const monthsToDisplay = 6 // Current month + 5 months
  const startMonth = new Date().getMonth()
  const startYear = new Date().getFullYear()

  const renderMonth = (year: number, monthIndex: number) => {
    const monthName = new Date(year, monthIndex, 1).toLocaleString('default', {
      month: 'long'
    })
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()

    return (
      <div key={`${year}-${monthIndex}`} className="month">
        <h3>
          {monthName} {year}
        </h3>
        <div className="weekdays">
          {weekdays.map((day, index) => (
            <div key={index} className="weekday">
              {day}
            </div>
          ))}
        </div>
        <div className="days-grid">
          {[...Array(daysInMonth)].map((_, dayIndex) => (
            <div
              key={dayIndex}
              className={`day ${selectedEvents && selectedEvents[0].date === getFormatDate(dayIndex + 1, monthIndex, year) ? 'open' : ''}`}
              onClick={() => handleDayClick(dayIndex + 1, monthIndex, year)}
            >
              <span>{dayIndex + 1}</span>
              <div className="event-dots">
                {getEventColors(
                  dayIndex + 1,
                  monthIndex,
                  year,
                  eventFilter
                ).map((color, index) => (
                  <span
                    key={index}
                    className="event-dot"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const handleDayClick = (day: number, monthIndex: number, year: number) => {
    const date = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    const dayEvents: CalendarEvent[] = events.filter(
      (event) => event.date === date
    )

    if (dayEvents.length > 0) {
      setSelectedEvents(dayEvents) // Show details of the first event for simplicity
    }
  }
  console.log('selectedEvents', selectedEvents)
  const onClosePopup = () => {
    setSelectedEvents(null)
  }

  const months = []
  for (let i = 0; i < monthsToDisplay; i++) {
    const year = startMonth + i < 12 ? startYear : startYear + 1
    const month = (startMonth + i) % 12
    months.push(renderMonth(year, month))
  }

  return (
    <div>
      <h1 className="page-title">Calendar</h1>
      <EventFilter
        handleSetEventFilter={setEventFilter}
        eventFilter={eventFilter}
      />
      <div className="calendar-grid">{months}</div>

      {selectedEvents && (
        <EventsInfoModal events={selectedEvents} onClosePopup={onClosePopup} />
      )}
    </div>
  )
}

export default Calendar
