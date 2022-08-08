import './App.css';
import CountryForm from './CountryForm';
import WeatherCapital from './WeatherCapital';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 >Weather App</h1>
      {/* <CountryForm/>   */}
      <Router>
      <Routes>
          <Route exact path="/" element={<CountryForm />}></Route>
          <Route exact path="/weather" element={<WeatherCapital />}></Route>
          </Routes>
          </Router>
      </header>
    </div>
  );
}

export default App;
