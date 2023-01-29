import Nav from "./components/Nav";
import Card from "./components/Card";
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
