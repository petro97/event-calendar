import React, { useState } from 'react';
import Calendar from './components/Calendar.tsx';
import EventFilter from './components/EventFilter.js';
import './styles/styles.css';

const App = () => {
    const [eventFilter, setEventFilter] = useState(null);

    return (
        <div className="app">
            <header className="header">Event Calendar</header>
            <EventFilter setEventFilter={setEventFilter} />
            <Calendar eventFilter={eventFilter} />
        </div>
    );
};

export default App;
