import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Collectables } from "./pages";
import Header from "./components/header/header.components";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collectables" element={<Collectables />} />
      </Routes>
    </div>
  );
}

export default App;
