// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SymptomForm from "./components/SymptomForm";
import ResultsPage from "./components/ResultsPage";

function App() {
  const [results, setResults] = useState(null);

  const handleFormSubmit = (data) => {
    // Simulate AI analysis (replace with actual AI logic)
    const analysis = analyzeSymptoms(data);
    setResults(analysis);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SymptomForm onSubmit={handleFormSubmit} />} />
        <Route
          path="/results"
          element={results ? <ResultsPage results={results} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

// Simulated AI analysis function
const analyzeSymptoms = (data) => {
  const { wheezing, shortnessOfBreath, chestTightness, coughing } = data;
  if (wheezing && shortnessOfBreath && chestTightness && coughing) {
    return { diagnosis: "Potential Asthma", type: "Allergic Asthma" };
  }
  return { diagnosis: "No Asthma Detected", type: null };
};

export default App;