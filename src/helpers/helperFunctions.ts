import { events } from '../eventsData/events'
import { eventColors } from '../constants/calendar'

const getEventColors = (
  day: number,
  monthIndex: number,
  year: number,
  eventFilter: string | null
): string[] => {
  const date = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  return events
    .filter(
      (event) =>
        event.date === date && (!eventFilter || event.type === eventFilter)
    )
    .map((event) => eventColors[event.type])
}

export { getEventColors }
