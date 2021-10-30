import { useState } from 'react'

export default function ClockHook({name}) {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <h1>Hello {name}</h1>
            <p>this is the hook component</p>
            <h2>It is {date.toDateString()}</h2>
        </div>
    )
}
