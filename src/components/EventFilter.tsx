import React from 'react';
import '../styles/styles.css';

interface EventFilterProps {
    onSelectFilter: (filter: string | null) => void;
}
const EventFilter: React.FC<EventFilterProps> = ({ onSelectFilter }) => {
    const eventTypes = ["Meeting with an expert", "Question-answer", "Conference", "Webinar"];

    return (
        <div className="event-filter">
            {eventTypes.map(type => (
                <button key={type} onClick={() => onSelectFilter(type)}>
                    {type}
                </button>
            ))}
            <button onClick={() => onSelectFilter(null)}>Clear Filter</button>
        </div>
    );
};

export default EventFilter;
