function Card() {
  return (
    <div className="card">
      <img src="./src/assets/japan.jpg" className="card--cover"></img>
      <div className="card--infos">
        <img src="./src/assets/marker.png"></img>
        <span className="card--location">Japan</span>
        <span className="card--map">
          <a href="#">View on Google Maps</a>
        </span>
        <h1 className="card--title">Mount Fiji</h1>
        <p className="card--date">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="card--description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}

export default Card;
