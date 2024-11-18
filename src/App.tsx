import React from 'react'
import Calendar from './components/Calendar.tsx'
import './styles/calendar.less'
import './App.less'
import AppHeader from './components/AppHeader'

const App = () => {
  // const [eventFilter, setEventFilter] = useState(null);

  return (
    <div className="app">
      <AppHeader />
      {/*<EventFilter setEventFilter={setEventFilter} />*/}
      <Calendar />
    </div>
  )
}

export default App
