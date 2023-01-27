import Nav from "./components/Nav.jsx";
import Card from "./components/Card.jsx";
import data from "./data.js";

function App() {
  const cards = data.map(function (item) {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="container">
      <Nav />
      {cards}
    </div>
  );
}

export default App;
