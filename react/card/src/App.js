import './App.css';
import Card from './components/Card';
function App() {
  const cards = [];

  for (let i = 0; i < 10; i++) {
    cards.push(<Card key={i} />);
  }
  return (
    <div className="App">
        {cards}
    </div>
  );
}

export default App;
