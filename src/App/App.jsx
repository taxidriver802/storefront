import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="home_page">
        <Home />
      </div>
    </div>
  );
}

export default App;
