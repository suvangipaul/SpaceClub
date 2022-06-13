import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Collectables, Explore } from "./pages";
import { Header } from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collectables" element={<Collectables />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;
