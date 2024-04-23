
export default function Card(props) {
    return (
        <section className="card--container">
            <div className="card--img-container">
                <img src={props.item.img} alt={props.item.title} className="card--img"/>
                <h2>{props.item.title}</h2>
            </div>
                
            <div className="card--info">
                <span>{props.item.location}</span>
                <a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                <p>{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
                
            </div>
        </section>   
    )
}