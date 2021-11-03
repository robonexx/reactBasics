import React from 'react';
import styles from './EventList.module.css'

export default function EventList({ events, handleEvent }) {

    return (
        <div>
            {events.map((ev) => (
                <div key={ev.id} className={styles.card}>
                    <h2 className="events">{ev.title}</h2>
                    <button className="btn second"
                        onClick={() => { handleEvent(ev.id) }}>Delete</button>
                </div>
            ))}
        </div>
    )
}
