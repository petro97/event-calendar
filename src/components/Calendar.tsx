import React, { useState } from 'react';
import { events } from '../data/events.js';
import '../styles/styles.css';

interface Event {
    id: number;
    type: string;
    date: Date;
}

const Calendar = () => {
    const [eventFilter, setEventFilter] = useState<string | null>(null);

    const monthsToDisplay = 6; // Current month + 5 months
    const startMonth = new Date().getMonth();

    const renderMonth = (monthIndex) => {
        const monthName = new Date(2024, monthIndex, 1).toLocaleString('default', { month: 'long' });
        const daysInMonth = new Date(2024, monthIndex + 1, 0).getDate();

        return (
            <div key={monthIndex} className="month">
                <h3>{monthName}</h3>
                <div className="days-grid">
                    {[...Array(daysInMonth)].map((_, dayIndex) => (
                        <div key={dayIndex} className={`day ${hasEvent(dayIndex + 1, monthIndex) ? 'has-event' : ''}`}>
                            {dayIndex + 1}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const hasEvent = (day, monthIndex) => {
        const date = `2024-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return events.some(event => event.date === date && (!eventFilter || event.type === eventFilter));
    };

    return (
        <div className="calendar-grid">
            {[...Array(monthsToDisplay)].map((_, i) => renderMonth(startMonth + i))}
        </div>
    );
};

export default Calendar;
