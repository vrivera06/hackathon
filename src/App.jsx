// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import SymptomForm from "./pages/SymptomForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} /> {/* Home page */}
        <Route path="/symptom-checker" Component={SymptomForm} /> {/* Home page */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;