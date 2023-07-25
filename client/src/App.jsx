import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreatePlayer from "./pages/createPlayer";
import Home from "./pages/home";
import EditPlayer from "./pages/editPlayer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-player" element={<CreatePlayer />} />
        <Route path={`/edit-player/:id`} element={<EditPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
