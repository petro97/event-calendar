import React from 'react'
import Calendar from './components/Calendar.tsx'
import './styles/calendar.less'
import './App.less'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <Calendar />
      <AppFooter />
    </div>
  )
}

export default App
