import React from 'react';

export default function EventList({ events, handleEvent }) {

    return (
        <div>
            {events.map((ev) => (
                <React.Fragment key={ev.id}>
                    <h2 className="events">{ev.title}</h2>
                    <button className="btn second"
                        onClick={() => { handleEvent(ev.id) }}>Delete</button>
                </React.Fragment>
            ))}
        </div>
    )
}
