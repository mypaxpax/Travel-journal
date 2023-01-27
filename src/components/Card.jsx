function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} className="card--cover"></img>
      <div className="card--infos">
        <img src="./src/assets/marker.png"></img>
        <span className="card--location">{props.item.location}</span>
        <span className="card--map">
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </span>
        <h1 className="card--title">{props.item.title}</h1>
        <p className="card--date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card--description">{props.item.description}</p>
      </div>
    </div>
  );
}

export default Card;
