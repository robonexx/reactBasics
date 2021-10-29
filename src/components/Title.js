export default function Title({text, subtitle}) {
    return (
        <>
            <h1 className="title">{text}</h1>
            <br />
            <h2 className="subtitle">{subtitle}</h2>
        </>
    )
}