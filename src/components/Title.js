export default function Title({text, subtitle}) {
    return (
        <div>
            <h1 className="title">{text}</h1>
            <br />
            <h2 className="subtitle">{subtitle}</h2>
        </div>
    )
}